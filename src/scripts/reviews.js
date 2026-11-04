import { reviewsData } from '../data/reviewsData.js'

function escapeHTML(value = '') {
  return String(value).replace(/[&<>"']/g, (char) => {
    const entities = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#039;',
    }

    return entities[char]
  })
}

function getVisibleReviews() {
  return reviewsData.filter(
    (review) => typeof review.text === 'string' && review.text.trim() !== ''
  )
}

function renderStars(rating = 5) {
  return `
    <span class="google-review-stars" aria-label="Оцінка: ${rating} з 5">
      ${'★'.repeat(Math.max(0, Math.min(5, Number(rating) || 0)))}
    </span>
  `
}

function renderReviewCard(review) {
  return `
    <article class="google-review-card">
      <div class="google-review-card-top">
        ${renderStars(review.rating)}
        <span class="google-review-source">Google</span>
      </div>

      <p class="google-review-text">${escapeHTML(review.text)}</p>

      <span class="google-review-author">
        ${escapeHTML(review.author)}
      </span>
    </article>
  `
}

/**
 * Відображає карусель відгуків на головній сторінці.
 */
export function initReviewsCarousel() {
  const root = document.querySelector('#home-reviews')

  if (!root) return

  // Перемешиваем отзывы только для главной страницы.
  const reviews = [...getVisibleReviews()]

  for (let i = reviews.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[reviews[i], reviews[j]] = [reviews[j], reviews[i]]
  }

  if (!reviews.length) return

  root.innerHTML = `
    <div class="reviews-container">
      <p class="reviews-eyebrow">ВІДГУКИ</p>

      <h2 class="reviews-title">
        Досвід пацієнтів — важлива частина довіри.
      </h2>

      <p class="reviews-description">
        Відгуки людей, які поділилися своїм досвідом у Google.
      </p>

      <div class="reviews-carousel" aria-label="Відгуки пацієнтів">
        <div class="reviews-carousel-viewport">
          <div class="reviews-carousel-track">
            ${reviews.map((review) => `
              <div class="reviews-carousel-slide">
                ${renderReviewCard(review)}
              </div>
            `).join('')}
          </div>
        </div>

        <div class="reviews-carousel-controls">
          <button
            class="reviews-carousel-arrow"
            type="button"
            data-direction="-1"
            aria-label="Попередні відгуки"
          >←</button>

          <div class="reviews-carousel-dots" aria-label="Вибір відгуку">
            ${reviews.map((_, index) => `
              <button
                class="reviews-carousel-dot${index === 0 ? ' is-active' : ''}"
                type="button"
                data-index="${index}"
                aria-label="Перейти до відгуку ${index + 1}"
                aria-current="${index === 0 ? 'true' : 'false'}"
              ></button>
            `).join('')}
          </div>

          <button
            class="reviews-carousel-arrow"
            type="button"
            data-direction="1"
            aria-label="Наступні відгуки"
          >→</button>
        </div>
      </div>

      <a class="reviews-all-link" href="/reviews.html">
        Усі відгуки <span aria-hidden="true">↗</span>
      </a>
    </div>
  `

  const viewport = root.querySelector('.reviews-carousel-viewport')
  const track = root.querySelector('.reviews-carousel-track')
  const slides = [...root.querySelectorAll('.reviews-carousel-slide')]
  const dots = [...root.querySelectorAll('.reviews-carousel-dot')]
  const arrows = [...root.querySelectorAll('.reviews-carousel-arrow')]
  const carousel = root.querySelector('.reviews-carousel')

  if (!viewport || !track || slides.length < 2) return

  let currentIndex = 0
  let autoplayId = null
  let interactionTimeout = null
  let startX = 0
  let startY = 0
  let isPointerDown = false

  const interval = 7000

  // Сколько карточек одновременно видно на экране.
  function getVisibleCount() {
    if (window.innerWidth <= 600) return 1
    if (window.innerWidth <= 900) return 2
    return 3
  }

  function getMaxIndex() {
    return Math.max(0, slides.length - getVisibleCount())
  }

  function updateCarousel() {
    currentIndex = Math.min(currentIndex, getMaxIndex())

    const targetSlide = slides[currentIndex]

    if (targetSlide) {
      track.style.transform = `translateX(-${targetSlide.offsetLeft}px)`
    }

    dots.forEach((dot, index) => {
      const isActive = index === currentIndex

      dot.classList.toggle('is-active', isActive)
      dot.setAttribute('aria-current', isActive ? 'true' : 'false')
    })

    arrows.forEach((arrow) => {
      const direction = Number(arrow.dataset.direction)

      arrow.disabled =
        direction < 0
          ? currentIndex === 0
          : currentIndex >= getMaxIndex()
    })
  }

  function goTo(index) {
    currentIndex = Math.max(0, Math.min(index, getMaxIndex()))
    updateCarousel()
  }

  function stopAutoplay() {
    if (autoplayId) {
      clearInterval(autoplayId)
      autoplayId = null
    }
  }

  function startAutoplay() {
    stopAutoplay()

    if (document.hidden || carousel.matches(':hover')) return

    autoplayId = setInterval(() => {
      if (currentIndex >= getMaxIndex()) {
        goTo(0)
      } else {
        goTo(currentIndex + 1)
      }
    }, interval)
  }

  function pauseAfterInteraction() {
    stopAutoplay()
    clearTimeout(interactionTimeout)

    interactionTimeout = setTimeout(() => {
      if (!carousel.matches(':hover')) {
        startAutoplay()
      }
    }, 10000)
  }

  // Стрелки.
  arrows.forEach((arrow) => {
    arrow.addEventListener('click', () => {
      goTo(currentIndex + Number(arrow.dataset.direction))
      pauseAfterInteraction()
    })
  })

  // Точки.
  dots.forEach((dot) => {
    dot.addEventListener('click', () => {
      goTo(Number(dot.dataset.index))
      pauseAfterInteraction()
    })
  })

  // Свайп мышью или пальцем.
  viewport.addEventListener('pointerdown', (event) => {
    if (event.pointerType === 'mouse' && event.button !== 0) return

    startX = event.clientX
    startY = event.clientY
    isPointerDown = true
  })

  viewport.addEventListener('pointerup', (event) => {
    if (!isPointerDown) return

    isPointerDown = false

    const diffX = event.clientX - startX
    const diffY = event.clientY - startY

    // Не переключаем отзывы, если пользователь прокручивает страницу вертикально.
    if (Math.abs(diffX) < 45 || Math.abs(diffX) < Math.abs(diffY)) return

    goTo(currentIndex + (diffX < 0 ? 1 : -1))
    pauseAfterInteraction()
  })

  viewport.addEventListener('pointercancel', () => {
    isPointerDown = false
  })

  // Пауза при наведении и взаимодействии с клавиатурой.
  carousel.addEventListener('mouseenter', stopAutoplay)

  carousel.addEventListener('mouseleave', () => {
    clearTimeout(interactionTimeout)
    startAutoplay()
  })

  carousel.addEventListener('focusin', stopAutoplay)

  carousel.addEventListener('focusout', (event) => {
    if (!carousel.contains(event.relatedTarget)) {
      startAutoplay()
    }
  })

  // Пересчитываем положение при изменении размера окна.
  window.addEventListener('resize', updateCarousel)

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      stopAutoplay()
    } else {
      startAutoplay()
    }
  })

  updateCarousel()
  startAutoplay()
}

/**
 * Відображає повний список текстових відгуків на сторінці /reviews.html.
 */
export function renderAllReviews() {
  const root = document.querySelector('#all-reviews')

  if (!root) return

  const reviews = getVisibleReviews()

  root.innerHTML = reviews.map(renderReviewCard).join('')
}
import './style.css'
import { siteData } from './data/siteData.js'
import { initMenu } from './scripts/menu.js'
import { initVideoModal } from './scripts/video.js'
import { conditionsData } from './data/conditionsData.js'
import { articlesData } from './data/articlesData.js'
import { initConditionsCarousel } from './scripts/conditionsCarousel.js'
import { imageSettings } from './data/imageSettings.js'
import { aboutImageSettings } from './data/aboutImageSettings.js'

function renderProblemCards() {
  // Перемешиваем карточки случайным образом
  const shuffled = [...conditionsData]

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }

  // Разбиваем карточки на группы по 4
  const groups = []

  for (let i = 0; i < shuffled.length; i += 4) {
    const group = shuffled.slice(i, i + 4)

    // Заполняем последнюю неполную группу карточками из начала
    let nextIndex = 0

    while (group.length < 4) {
      group.push(shuffled[nextIndex])
      nextIndex++
    }

    groups.push(group)
  }

  return groups.map((group) => `
    <div class="problem-slide">
      <div class="problems-grid">
        ${group.map((condition) => {
          const content = `
            <div>
              <h3>${condition.title}</h3>
              <p>${condition.description}</p>
            </div>
            <span class="problem-arrow">↗</span>
          `

          return condition.url
            ? `<a href="${condition.url}" class="problem-card">${content}</a>`
            : `<article class="problem-card">${content}</article>`
        }).join('')}
      </div>
    </div>
  `).join('')
}

function renderLatestArticles() {
  const shuffledArticles = [...articlesData]

  // Перемешиваем статьи в случайном порядке
  for (let i = shuffledArticles.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffledArticles[i], shuffledArticles[j]] = [
      shuffledArticles[j],
      shuffledArticles[i],
    ]
  }

  // Берём первые три случайные статьи
  return shuffledArticles
    .slice(0, 3)
    .map((article) => {
      const [topic, ...subtitleParts] = article.title.split(':')
      const subtitle = subtitleParts.join(':').trim()

      return `
        <a href="${article.url}" class="material-card">
          <div class="material-image">
            <span>${topic.trim()}</span>
          </div>

          <div class="material-content">
            <h3>${subtitle || topic.trim()}</h3>
            <p>${article.description}</p>
            <span>Читати статтю ↗</span>
          </div>
        </a>
      `
    })
    .join('')
}

async function loadComponent(path) {
  const response = await fetch(path)

  if (!response.ok) {
    throw new Error(`Не вдалося завантажити компонент: ${path}`)
  }

  return response.text()
}

const headerHTML = await loadComponent('/src/components/Header.html')
const footerHTML = await loadComponent('/src/components/Footer.html')

document.querySelector('#app').innerHTML = `
  ${headerHTML}
  

  <main id="home">
  <section class="hero">
    <div class="hero-container">

      <div class="hero-content">
        <div class="hero-eyebrow">
          МАНУАЛЬНА ТЕРАПІЯ • ІВАНО-ФРАНКІВСЬК
        </div>

        <h1 class="hero-title">
          Рух без страху.<br>
          Повернення до звичного<br>
          життя починається з уваги<br>
          до вашого тіла.
        </h1>

        <p class="hero-description">
          Індивідуальний підхід до болю та обмеження рухливості.<br>
          Пояснюю, що відбувається, і разом визначаємо наступні кроки.
        </p>

        <div class="hero-actions">
          <a href="/booking.html" class="hero-button">
            Записатися на прийом
          </a>

          <a href="/yak-prohodyt-pryiom.html" class="hero-secondary-link">
            Як проходить прийом →
          </a>
        </div>
      </div>

      <div class="hero-visual">
          <img
            class="hero-photo"
            src="${imageSettings.hero.src}"
            alt="Лікар Алєксандр Потоцький"
            style="
              object-fit: ${imageSettings.hero.fit};
              object-position: ${imageSettings.hero.positionX}% ${imageSettings.hero.positionY}%;
              transform: scale(${imageSettings.hero.scale});
            "
          />
        </div>

    </div>

    <div class="hero-principles">
      <div class="principle-item">
        <span class="principle-title">ІНДИВІДУАЛЬНО</span>
        <span class="principle-description">
          План з урахуванням вашого стану
        </span>
      </div>

      <div class="principle-item">
        <span class="principle-title">ЗРОЗУМІЛО</span>
        <span class="principle-description">
          Пояснення без складних термінів
        </span>
      </div>

      <div class="principle-item">
        <span class="principle-title">ВІДПОВІДАЛЬНО</span>
        <span class="principle-description">
          Без обіцянок миттєвого результату
        </span>
      </div>
    </div>
  </section>
<section class="problems" id="services">
  <div class="problems-container">

    <div class="problems-heading">
      <div class="section-eyebrow">З ЧИМ ЗВЕРТАЮТЬСЯ</div>

      <h2 class="section-title">
        Коли рух обмежений —<br>
        важливо знайти причину.
      </h2>

      <p class="section-description">
        Симптоми можуть мати різне походження. Починаємо з оцінки ситуації,<br>
        а не з готової обіцянки лікування.
      </p>
    </div>

    <div class="problems-carousel">
      <div class="problems-carousel-window" id="problems-carousel">
        <div class="problems-carousel-track">
          ${renderProblemCards()}
        </div>
      </div>
    </div>

  </div>
</section>



<section class="about-preview" id="about">
  <div class="about-preview-container">

    <div class="about-preview-content">
      <div class="about-preview-eyebrow">ЗНАЙОМСТВО</div>

      <h2 class="about-preview-title">
        Лікар, який пояснює<br>
        і працює разом із вами.
      </h2>

      <p class="about-preview-description">
        Я — Алєксандр Потоцький, лікар мануальний терапевт.
        У своїй роботі приділяю увагу не лише ділянці болю,
        а й загальному стану опорно-рухового апарату.
        Для мене важливо зрозуміти причину скарг, пояснити
        пацієнту можливі варіанти допомоги та підібрати
        індивідуальний підхід до кожної ситуації.
      </p>

      <a href="/pro-likarya.html" class="about-preview-button">
        Більше про лікаря
      </a>
    </div>

      <a href="/pro-likarya.html" class="about-preview-photo">
        <img
          class="about-preview-image"
          src="${aboutImageSettings.src}"
          alt="Лікар Алєксандр Потоцький"
          style="
            object-fit: ${aboutImageSettings.fit};
            object-position: ${aboutImageSettings.positionX}% ${aboutImageSettings.positionY}%;
            transform: scale(${aboutImageSettings.scale});
          "
        />
      </a>

  </div>
</section>

<section class="methods-section" id="methods">
  <div class="methods-container">
    <p class="methods-eyebrow">ПІДХІД ДО РОБОТИ</p>

    <h2 class="methods-title">Методи — не меню процедур.</h2>

    <p class="methods-description">
      Метод обирається після оцінки стану та цілей людини.
    </p>

    <div class="methods-grid">
      <a href="/manualna-terapiya.html" class="method-card">
        <span class="method-number">НАПРЯМ 01</span>
        <h3>Мануальна терапія</h3>
        <p>Робота з рухливістю, функцією та станом опорно-рухового апарату</p>
        <span class="method-link">Дізнатися більше →</span>
      </a>

      <a href="/myakotkannynni-tehniky.html" class="method-card">
        <span class="method-number">НАПРЯМ 02</span>
        <h3>М’якотканинні техніки</h3>
        <p>Робота з м’язовим напруженням і болем, зокрема коли вони супроводжують порушення роботи нервової системи</p>
        <span class="method-link">Дізнатися більше →</span>
      </a>

      <a href="/rekomendatsiyi-ta-vpravy.html" class="method-card">
        <span class="method-number">НАПРЯМ 03</span>
        <h3>Рекомендації й вправи</h3>
        <p>Корекція повсякденних звичок, положень тіла та рухових патернів</p>
        <span class="method-link">Дізнатися більше →</span>
      </a>
    </div>
  </div>
</section>

<section class="process-section" id="how-it-works">
  <div class="process-container">
    <p class="process-eyebrow">ЯК ЦЕ ВІДБУВАЄТЬСЯ</p>

    <h2 class="process-title">
      <span class="process-title-desktop">
        Зрозумілий шлях від<br>
        першого звернення до плану дій.
      </span>
      <span class="process-title-mobile">Зрозумілий шлях</span>
    </h2>

    <div class="process-steps">
      <div class="process-step">
        <h3>01&nbsp; Знайомство</h3>
        <p>
          <span class="process-text-desktop">Обговорюємо скарги та історію.</span>
          <span class="process-text-mobile">Обговорюємо ваш запит.</span>
        </p>
      </div>

      <div class="process-step">
        <h3>02&nbsp; Оцінка</h3>
        <p>
          <span class="process-text-desktop">Перевіряємо рухи й важливі ознаки.</span>
          <span class="process-text-mobile">Перевіряємо важливі ознаки.</span>
        </p>
      </div>

      <div class="process-step">
        <h3>03&nbsp; План</h3>
        <p>
          <span class="process-text-desktop">Узгоджуємо доцільні наступні кроки.</span>
          <span class="process-text-mobile">Узгоджуємо наступні кроки.</span>
        </p>
      </div>
    </div>
  </div>
</section>

<section class="patient-info-section" id="for-patients">
  <div class="patient-info-container">
    <p class="patient-info-eyebrow">ДЛЯ ПАЦІЄНТІВ</p>

    <h2 class="patient-info-title">
      <span class="patient-info-title-desktop">
        Що варто знати перед прийомом
      </span>
      <span class="patient-info-title-mobile">Перед прийомом</span>
    </h2>

    <div class="patient-info-grid">
      <a href="/pershyi-vizyt/" class="patient-info-card">
        <span class="patient-info-text-desktop">
          Чого очікувати від першого візиту
        </span>
        <span class="patient-info-text-mobile">
          Чого очікувати від візиту
        </span>
        <span class="patient-info-arrow">↗</span>
      </a>

      <a href="/vidchuttya-pislya-protsedury/" class="patient-info-card">
        <span class="patient-info-text-desktop">
          Які відчуття можуть бути після процедури
        </span>
        <span class="patient-info-text-mobile">
          Відчуття після процедури
        </span>
        <span class="patient-info-arrow">↗</span>
      </a>

      <a href="/povtorna-konsultatsiya/" class="patient-info-card">
        <span class="patient-info-text-desktop">
          Коли потрібна повторна консультація
        </span>
        <span class="patient-info-text-mobile">
          Коли потрібна повторна консультація
        </span>
        <span class="patient-info-arrow">↗</span>
      </a>

      <a href="/kilkist-vizytiv/" class="patient-info-card">
        <span class="patient-info-text-desktop">
          Від чого залежить кількість візитів
        </span>
        <span class="patient-info-text-mobile">
          Кількість візитів
        </span>
        <span class="patient-info-arrow">↗</span>
      </a>
    </div>
  </div>
</section>

<section class="reviews-section" id="reviews">
  <div class="reviews-container">

    <p class="reviews-eyebrow">ВІДГУКИ</p>

    <h2 class="reviews-title">
      Досвід пацієнтів — важлива частина довіри.
    </h2>

    <p class="reviews-description">
      Короткі відгуки пацієнтів про досвід консультації та роботи.
    </p>

    <div class="reviews-grid">

      <div class="review-card">
        <p class="review-text">
          «Звернувся через біль у спині. Лікар уважно вислухав,
          пояснив можливі причини дискомфорту та розповів,
          як буде проходити робота.»
        </p>
        <span class="review-author">Пацієнт</span>
      </div>

      <div class="review-card">
        <p class="review-text">
          «Сподобався уважний підхід. Отримав відповіді на свої
          запитання та рекомендації щодо вправ і повсякденної
          активності.»
        </p>
        <span class="review-author">Пацієнтка</span>
      </div>

      <div class="review-card">
        <p class="review-text">
          «На консультації все було зрозуміло та без поспіху.
          Лікар пояснив, на що звернути увагу і які наступні
          кроки варто зробити.»
        </p>
        <span class="review-author">Пацієнт</span>
      </div>

    </div>

  </div>
</section>

<section class="materials-section" id="materials">
  <div class="materials-container">

    <p class="materials-eyebrow">КОРИСНІ МАТЕРІАЛИ</p>

    <h2 class="materials-title">
      Пояснюю складне просто.
    </h2>

   <div class="materials-grid">
        ${renderLatestArticles()}
    </div>

      <div class="materials-all">
        <a href="/articles.html" class="materials-all-link">
          Усі статті
          <span>↗</span>
        </a>
      </div>

  </div>
</section>

<section class="contact-section" id="contacts">
  <div class="contact-container">

    <div class="contact-main">
      <p class="contact-eyebrow desktop-contact">
        ЗРОБІТЬ ПЕРШИЙ КРОК
      </p>

      <p class="contact-eyebrow mobile-contact">
        ПОТРІБНА КОНСУЛЬТАЦІЯ?
      </p>

      <h2 class="contact-title desktop-contact">
        Потрібна консультація?
      </h2>

      <h2 class="contact-title mobile-contact">
        Зв’яжіться зі мною
      </h2>

      <p class="contact-description">
        Зв’яжіться зі мною, щоб узгодити зручний час.
      </p>

      <a href="${siteData.contact.phoneLink}" class="contact-button">
        Записатися
      </a>
    </div>

    <div class="contact-details">
      <h3>Івано-Франківськ</h3>

      <p class="contact-address">
        вул. Незалежності, 38
      </p>

      <span class="contact-note">
        ${siteData.contact.addressNote} • за попереднім записом
      </span>

      <a href="${siteData.contact.phoneLink}" class="contact-phone">
        ${siteData.contact.phone}
      </a>

      <a
        href="${siteData.contact.telegram}"
        class="contact-telegram"
        target="_blank"
        rel="noopener noreferrer"
      >
        Написати нам у Telegram
      </a>

      <div class="contact-socials">
        <a href="${siteData.contact.facebook}"
           target="_blank" rel="noopener noreferrer"
           aria-label="Facebook" title="Facebook">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.6-1.5h1.7V3.9c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3V10H7.3v3h2.8v8z"/>
          </svg>
        </a>

        <a href="${siteData.contact.instagram}"
           target="_blank" rel="noopener noreferrer"
           aria-label="Instagram" title="Instagram">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <rect x="3" y="3" width="18" height="18" rx="5"/>
            <circle cx="12" cy="12" r="4"/>
            <circle cx="17.5" cy="6.8" r="1" class="social-dot"/>
          </svg>
        </a>

        <a href="${siteData.contact.tiktok}"
           target="_blank" rel="noopener noreferrer"
           aria-label="TikTok" title="TikTok">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M14 3v11.2a3.2 3.2 0 1 1-2.8-3.2V8.1a6.2 6.2 0 1 0 6 6.1V8.5a8.2 8.2 0 0 0 3.8 1V6.3A5.2 5.2 0 0 1 16 3z"/>
          </svg>
        </a>
      </div>
    </div>

    <div class="contact-extra">
      <button type="button" class="contact-video-button" id="open-video">
        <span class="video-play-icon">▶</span>
        Переглянути відеоінструкцію, як до нас дістатися
      </button>

      <div class="contact-map">
        <iframe
          src="${siteData.contact.mapEmbed}"
          title="Карта проїзду до кабінету"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          allowfullscreen>
        </iframe>
      </div>
    </div>

  </div>
</section>

<!-- Окно с видеоинструкцией -->
<div class="video-modal" id="video-modal" aria-hidden="true">
  <div class="video-modal-backdrop" id="close-video-backdrop"></div>

  <div class="video-modal-content" role="dialog"
       aria-modal="true" aria-label="Відеоінструкція">
    <button type="button" class="video-modal-close" id="close-video"
            aria-label="Закрити відео">
      &times;
    </button>

    <div class="video-frame">
      <video
        id="location-video"
        controls
        playsinline
        preload="metadata"
        aria-label="Відеоінструкція, як дістатися до кабінету">
        <source src="/video/location.mp4" type="video/mp4">
        Ваш браузер не підтримує відтворення відео.
      </video>
    </div>
  </div>
</div>




</main>

${footerHTML}
`



initConditionsCarousel({
  viewportSelector: '#problems-carousel',
  trackSelector: '.problems-carousel-track',
  slideSelector: '.problem-slide',
})


initMenu()

initVideoModal()

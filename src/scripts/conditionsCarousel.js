export function initConditionsCarousel({
  viewportSelector,
  trackSelector,
  slideSelector,
  interval = 5000,
}) {
  const carousel = document.querySelector(viewportSelector)
  const track = carousel?.querySelector(trackSelector)

  if (!carousel || !track) return

  const originalSlides = [...track.querySelectorAll(slideSelector)]

  if (originalSlides.length < 2) return

  // Копируем первый слайд для бесконечного перехода
  const firstClone = originalSlides[0].cloneNode(true)
  track.appendChild(firstClone)

  let currentIndex = 0
  let isResetting = false

  function getIndex() {
    return Math.round(carousel.scrollLeft / carousel.clientWidth)
  }

  carousel.addEventListener('scroll', () => {
    if (isResetting) return

    currentIndex = getIndex()

    if (currentIndex === originalSlides.length) {
      isResetting = true

      setTimeout(() => {
        carousel.scrollTo({
          left: 0,
          behavior: 'instant',
        })

        currentIndex = 0
        isResetting = false
      }, 400)
    }
  })

  // Автоматическое переключение
  setInterval(() => {
    if (document.hidden || isResetting) return

    currentIndex++

    carousel.scrollTo({
      left: currentIndex * carousel.clientWidth,
      behavior: 'smooth',
    })
  }, interval)

  // Корректировка при изменении ширины экрана
  window.addEventListener('resize', () => {
    carousel.scrollTo({
      left: currentIndex * carousel.clientWidth,
      behavior: 'instant',
    })
  })
}
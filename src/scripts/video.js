export function initVideoModal() {
  const openVideoButton = document.getElementById('open-video')
  const videoModal = document.getElementById('video-modal')
  const closeVideoButton = document.getElementById('close-video')
  const closeVideoBackdrop = document.getElementById('close-video-backdrop')
  const locationVideo = document.getElementById('location-video')

  // Если на странице нет видео, ничего не делаем
  if (
    !openVideoButton ||
    !videoModal ||
    !closeVideoButton ||
    !closeVideoBackdrop ||
    !locationVideo
  ) {
    return
  }

  function openVideoModal() {
    videoModal.classList.add('is-open')
    videoModal.setAttribute('aria-hidden', 'false')

    locationVideo.currentTime = 0

    locationVideo.play().catch((error) => {
      console.log('Автоматичне відтворення не вдалося:', error)
    })
  }

  function closeVideoModal() {
    videoModal.classList.remove('is-open')
    videoModal.setAttribute('aria-hidden', 'true')

    locationVideo.pause()
    locationVideo.currentTime = 0
  }

  openVideoButton.addEventListener('click', openVideoModal)
  closeVideoButton.addEventListener('click', closeVideoModal)
  closeVideoBackdrop.addEventListener('click', closeVideoModal)

  document.addEventListener('keydown', (event) => {
    if (
      event.key === 'Escape' &&
      videoModal.classList.contains('is-open')
    ) {
      closeVideoModal()
    }
  })
}
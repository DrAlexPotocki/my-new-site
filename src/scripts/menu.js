export function initMenu() {
      // Защита изображений от копирования мышкой
  if (!document.documentElement.dataset.imageProtection) {
    document.documentElement.dataset.imageProtection = 'true'

    document.addEventListener('contextmenu', (event) => {
      if (event.target.closest?.('img, svg')) {
        event.preventDefault()
      }
    }, true)

    document.addEventListener('dragstart', (event) => {
      if (event.target.closest?.('img, svg')) {
        event.preventDefault()
      }
    }, true)
  }

  
  const menuToggle = document.querySelector('.menu-toggle')
  const navigation = document.querySelector('.main-navigation')

  if (!menuToggle || !navigation) return

  // Закриття мобільного меню
  function closeMenu() {
    navigation.classList.remove('is-open')
    menuToggle.setAttribute('aria-expanded', 'false')
    menuToggle.setAttribute('aria-label', 'Відкрити меню')
  }

  // Відкриття та закриття меню кнопкою
  menuToggle.addEventListener('click', () => {
    const isOpen = menuToggle.getAttribute('aria-expanded') === 'true'

    if (isOpen) {
      closeMenu()
    } else {
      menuToggle.setAttribute('aria-expanded', 'true')
      menuToggle.setAttribute('aria-label', 'Закрити меню')
      navigation.classList.add('is-open')
    }
  })

  // Закриття меню після переходу за посиланням
  navigation.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeMenu)
  })

  // Закриття меню при натисканні поза ним
  document.addEventListener('click', (event) => {
    const clickedInsideMenu = navigation.contains(event.target)
    const clickedToggle = menuToggle.contains(event.target)

    if (!clickedInsideMenu && !clickedToggle) {
      closeMenu()
    }
  })

  // Закриття меню клавішею Escape
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeMenu()
    }
  })

  // Автоматичне визначення активного пункту меню
  function updateActiveLink() {
    const currentPath = window.location.pathname
    const currentHash = window.location.hash

    navigation.querySelectorAll('.nav-link').forEach((link) => {
      const linkUrl = new URL(link.href)
      const linkPath = linkUrl.pathname
      const isHomePage = currentPath === '/' || currentPath === '/index.html'

      let isActive = false

      if (isHomePage) {
        if (currentHash) {
          isActive = linkUrl.hash === currentHash
        } else {
          isActive = linkPath === '/' && !linkUrl.hash
        }
      } else {
        isActive = linkPath === currentPath
      }

      link.classList.toggle('active', isActive)
    })
  }

  updateActiveLink()

  window.addEventListener('hashchange', updateActiveLink)
  window.addEventListener('popstate', updateActiveLink)
}
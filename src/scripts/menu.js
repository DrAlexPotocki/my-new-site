export function initMenu() {
  const menuToggle = document.querySelector('.menu-toggle')
  const navigation = document.querySelector('.main-navigation')

  if (!menuToggle || !navigation) return

  // Відкриття та закриття мобільного меню
  menuToggle.addEventListener('click', () => {
    const isOpen = menuToggle.getAttribute('aria-expanded') === 'true'

    menuToggle.setAttribute('aria-expanded', String(!isOpen))
    menuToggle.setAttribute(
      'aria-label',
      isOpen ? 'Відкрити меню' : 'Закрити меню'
    )

    navigation.classList.toggle('is-open', !isOpen)
  })

  // Закриття меню після переходу за посиланням
  navigation.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navigation.classList.remove('is-open')
      menuToggle.setAttribute('aria-expanded', 'false')
      menuToggle.setAttribute('aria-label', 'Відкрити меню')
    })
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
export function initMenu() {
  const menuToggle = document.querySelector('.menu-toggle')
  const navigation = document.querySelector('.main-navigation')

  // Если на странице нет меню, ничего не делаем
  if (!menuToggle || !navigation) return

  menuToggle.addEventListener('click', () => {
    const isOpen = menuToggle.getAttribute('aria-expanded') === 'true'

    menuToggle.setAttribute('aria-expanded', String(!isOpen))
    menuToggle.setAttribute(
      'aria-label',
      isOpen ? 'Відкрити меню' : 'Закрити меню'
    )

    navigation.classList.toggle('is-open', !isOpen)
  })

  navigation.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navigation.classList.remove('is-open')
      menuToggle.setAttribute('aria-expanded', 'false')
      menuToggle.setAttribute('aria-label', 'Відкрити меню')
    })
  })
}
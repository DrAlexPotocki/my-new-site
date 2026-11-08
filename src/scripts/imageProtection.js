export function initImageProtection() {
  // Запрет контекстного меню на изображениях
  document.addEventListener(
    'contextmenu',
    (event) => {
      if (event.target.closest?.('img, svg')) {
        event.preventDefault()
      }
    },
    true
  )

  // Запрет перетаскивания изображений
  document.addEventListener(
    'dragstart',
    (event) => {
      if (event.target.closest?.('img, svg')) {
        event.preventDefault()
      }
    },
    true
  )
}
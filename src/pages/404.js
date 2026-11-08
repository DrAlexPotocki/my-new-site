import '../style.css'

import Header from '../components/Header.html?raw'
import Footer from '../components/Footer.html?raw'

import { initMenu } from '../scripts/menu.js'

const app = document.querySelector('#app')

function renderPage() {
  app.innerHTML = `
    ${Header}

    <main class="not-found-page">
      <div class="not-found-container">

        <div class="not-found-content">

          <span class="not-found-label">
            СТОРІНКУ НЕ ЗНАЙДЕНО
          </span>

          <div class="not-found-number" aria-hidden="true">
            404
          </div>

          <h1>
            Здається, ми зайшли не туди
          </h1>

          <p class="not-found-description">
            Сторінка, яку ви шукаєте, не існує або була переміщена.
            Можливо, посилання застаріло або в адресі є помилка.
          </p>

          <div class="not-found-actions">
            <a href="/" class="not-found-home">
              На головну сторінку
              <span aria-hidden="true">→</span>
            </a>

            <button
              type="button"
              class="not-found-back"
              id="not-found-back"
            >
              ← Повернутися назад
            </button>
          </div>

        </div>

        <div class="not-found-decoration" aria-hidden="true">
          <span class="not-found-circle not-found-circle-one"></span>
          <span class="not-found-circle not-found-circle-two"></span>

          <div class="not-found-cross">
            <span></span>
            <span></span>
          </div>
        </div>

      </div>
    </main>

    ${Footer}
  `

  const backButton = document.querySelector('#not-found-back')

  backButton?.addEventListener('click', () => {
    if (window.history.length > 1) {
      window.history.back()
    } else {
      window.location.href = '/'
    }
  })

  initMenu()
}

renderPage()
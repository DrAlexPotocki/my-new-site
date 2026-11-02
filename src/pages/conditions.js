import '../style.css'
import { siteData } from '../data/siteData.js'
import { conditionsData } from '../data/conditionsData.js'
import { initMenu } from '../scripts/menu.js'

// Завантажуємо спільні компоненти сайту
async function loadComponent(path) {
  const response = await fetch(path)

  if (!response.ok) {
    throw new Error(`Не вдалося завантажити компонент: ${path}`)
  }

  return response.text()
}

const headerHTML = await loadComponent('/src/components/Header.html')
const footerHTML = await loadComponent('/src/components/Footer.html')

// Формуємо картки напрямів
function renderConditions() {
  return conditionsData
    .map((condition, index) => {
      const number = String(index + 1).padStart(2, '0')

      const cardContent = `
        <span class="condition-number">${number}</span>
        <h3>${condition.title}</h3>
        <p>${condition.description}</p>
        ${
          condition.url
            ? '<span class="condition-card-more">Детальніше →</span>'
            : ''
        }
      `

      return condition.url
        ? `
          <a href="${condition.url}" class="condition-card condition-card-link">
            ${cardContent}
          </a>
        `
        : `
          <article class="condition-card">
            ${cardContent}
          </article>
        `
    })
    .join('')
}

// Формуємо сторінку «З чим я працюю»
document.querySelector('#app').innerHTML = `
  ${headerHTML}

  <main class="conditions-page">

    <section class="conditions-intro">
      <div class="conditions-container">
        <span class="conditions-eyebrow">НАПРЯМИ РОБОТИ</span>

        <h1>З чим я працюю</h1>

        <p>
          Біль у спині, шиї, суглобах та обмеження рухливості
          можуть мати різні причини. На цій сторінці ви можете
          ознайомитися з проблемами, з якими я працюю,
          та дізнатися більше про можливості мануальної терапії.
        </p>
      </div>
    </section>

    <section class="conditions-content">
      <div class="conditions-container">

        <div class="conditions-heading">
          <span class="conditions-eyebrow">ЗА ЯКИХ СИМПТОМІВ ЗВЕРТАЮТЬСЯ</span>
          <h2>Основні напрями роботи</h2>
          <p>
            Оберіть напрям, який вас цікавить.
            Для кожної проблеми згодом буде доступна окрема сторінка
            з детальнішою інформацією.
          </p>
        </div>

        <div class="conditions-grid">
          ${renderConditions()}
        </div>

        <div class="conditions-note">
          <p>
            <strong>Важливо:</strong>
            наявність певного симптому або діагнозу не означає,
            що мануальна терапія буде доречною в кожному випадку.
            Можливість її застосування визначається індивідуально
            після оцінки стану та за потреби додаткового обстеження.
          </p>
        </div>

      </div>
    </section>

    <section class="conditions-cta">
      <div class="conditions-container">
        <h2>Не знаєте, з чого почати?</h2>
        <p>
          Зв'яжіться зі мною, щоб обговорити вашу ситуацію
          та уточнити можливість консультації.
        </p>

        <a class="conditions-phone" href="${siteData.contact.phoneLink}">
          ${siteData.contact.phone}
        </a>

        <a class="conditions-button" href="/booking.html">
          Контакти та запис
        </a>
      </div>
    </section>

  </main>

  ${footerHTML}
`

initMenu()
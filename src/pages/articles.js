import '../style.css'
import { siteData } from '../data/siteData.js'
import { articlesData } from '../data/articlesData.js'
import { initMenu } from '../scripts/menu.js'

const app = document.querySelector('#app')

function renderArticles() {
  if (!articlesData.length) {
    return `
      <div class="articles-coming-soon">
        <h2>Матеріали готуються</h2>
        <p>Незабаром тут з'являться нові статті.</p>
      </div>
    `
  }

  return articlesData
    .map(
      (article, index) => `
        <a class="article-card" href="${article.url}">
          <div class="article-card-top">
            <span class="article-card-category">
              ${article.category}
            </span>
            <span class="article-card-number">
              ${String(index + 1).padStart(2, '0')}
            </span>
          </div>

          <h3>${article.title}</h3>

          <p>${article.description}</p>

          <span class="article-card-link">
            Читати статтю →
          </span>
        </a>
      `
    )
    .join('')
}

async function loadPage() {
  const [header, footer] = await Promise.all([
    fetch('/src/components/Header.html').then((response) => response.text()),
    fetch('/src/components/Footer.html').then((response) => response.text()),
  ])

  app.innerHTML = `
    ${header}

    <main class="articles-page">
      <section class="articles-intro">
        <div class="articles-container">
          <span class="articles-eyebrow">ЗНАННЯ ПРО ЗДОРОВ'Я</span>
          <h1>Статті</h1>

          <p>
            Тут я ділюся корисною інформацією про здоров'я хребта,
            причини болю, рухливість та можливості мануальної терапії.
            Моя мета — допомогти вам краще розуміти своє тіло
            та відповідальніше ставитися до власного здоров'я.
          </p>
        </div>
      </section>

      <section class="articles-section">
        <div class="articles-container">
          <div class="articles-section-heading">
            <span class="articles-eyebrow">ПУБЛІКАЦІЇ</span>
            <h2>Корисні матеріали</h2>
            <p>
              Інформація про здоров'я хребта, симптоми
              та сучасні підходи до допомоги.
            </p>
          </div>

          <div class="articles-grid">
            ${renderArticles()}
          </div>
        </div>
      </section>

      <section class="articles-cta-section">
        <div class="articles-container">
          <div class="articles-cta">
            <span class="articles-eyebrow">МАЄТЕ ЗАПИТАННЯ?</span>
            <h2>Обговорімо вашу ситуацію</h2>
            <p>
              Якщо вас турбує біль або обмеження рухливості,
              ви можете звернутися до мене для індивідуальної оцінки.
            </p>

            <a
              class="articles-button"
              href="${siteData.contact.phoneLink}"
            >
              Зв'язатися зі мною
            </a>
          </div>
        </div>
      </section>
    </main>

    ${footer}
  `

  initMenu()
}

loadPage()
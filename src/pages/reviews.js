import '../style.css'
import { siteData } from '../data/siteData.js'
import { initMenu } from '../scripts/menu.js'

const app = document.querySelector('#app')

async function loadPage() {
  const [header, footer] = await Promise.all([
    fetch('/src/components/Header.html').then((response) => response.text()),
    fetch('/src/components/Footer.html').then((response) => response.text()),
  ])

  app.innerHTML = `
    ${header}

    <main class="reviews-page">
      <section class="reviews-intro">
        <div class="reviews-container">
          <span class="reviews-eyebrow">ДОСВІД ПАЦІЄНТІВ</span>
          <h1>Відгуки</h1>
          <p>
            Довіра та зворотний зв'язок пацієнтів — важлива частина
            моєї роботи. Тут ви зможете ознайомитися з відгуками
            людей, які вже зверталися до мене.
          </p>
        </div>
      </section>

      <section class="reviews-section">
        <div class="reviews-container">
          <div class="reviews-empty">
            <span class="reviews-eyebrow">ЗВОРОТНИЙ ЗВ'ЯЗОК</span>
            <h2>Ваш досвід має значення</h2>
            <p>
              Розділ відгуків готується до наповнення.
              Незабаром тут з'являться реальні відгуки пацієнтів
              про досвід консультацій та роботи.
            </p>
          </div>
        </div>
      </section>

      <section class="reviews-section reviews-section-alt">
        <div class="reviews-container">
          <div class="reviews-cta">
            <span class="reviews-eyebrow">Є ЧИМ ПОДІЛИТИСЯ?</span>
            <h2>Залиште свій відгук</h2>
            <p>
              Якщо ви вже були на прийомі та хочете поділитися
              своїми враженнями, буду вдячний за ваш зворотний зв'язок.
            </p>
            <a
              class="reviews-button"
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
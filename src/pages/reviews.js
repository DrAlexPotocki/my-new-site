import '../style.css'
import { siteData } from '../data/siteData.js'
import { initMenu } from '../scripts/menu.js'
import { renderAllReviews } from '../scripts/reviews.js'

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
            Тут зібрані відгуки людей, які поділилися своїм досвідом
            після звернення до мене. Усі відгуки публікуються в Google.
          </p>
        </div>
      </section>

      <section class="reviews-section">
        <div class="reviews-container">
          <div class="google-reviews-list" id="all-reviews"></div>
        </div>
      </section>

      <section class="reviews-section reviews-section-alt">
        <div class="reviews-container">
          <div class="reviews-cta">
            <span class="reviews-eyebrow">Є ЧИМ ПОДІЛИТИСЯ?</span>

            <h2>Залиште свій відгук</h2>

            <p>
              Якщо ви вже були на прийомі та хочете поділитися
              своїми враженнями, буду вдячний за ваш відгук у Google.
            </p>

            <a
              class="reviews-button"
              href="https://g.page/r/CeBrpf1nWjetEAE/review"
              target="_blank"
              rel="noopener noreferrer"
            >
              Залишити відгук у Google
            </a>
          </div>
        </div>
      </section>
    </main>

    ${footer}
  `

  renderAllReviews()
  initMenu()
}

loadPage()
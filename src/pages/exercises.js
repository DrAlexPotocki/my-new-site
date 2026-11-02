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

    <main class="exercises-page">
      <section class="exercises-intro">
        <div class="exercises-container">
          <span class="exercises-eyebrow">КОРИСНІ МАТЕРІАЛИ</span>
          <h1>Бібліотека вправ</h1>
          <p>
            Рух — важлива складова турботи про опорно-руховий апарат.
            Тут збиратимуться вправи та комплекси для підтримки рухливості,
            роботи з м'язовим напруженням і розвитку рухових навичок.
          </p>
        </div>
      </section>

      <section class="exercises-section">
        <div class="exercises-container">
          <div class="exercises-heading">
            <span class="exercises-eyebrow">КАТЕГОРІЇ</span>
            <h2>Оберіть потрібний напрямок</h2>
            <p>
              Матеріали будуть поступово доповнюватися описами,
              рекомендаціями та відеодемонстраціями.
            </p>
          </div>

          <div class="exercises-grid">
            <article class="exercise-card">
              <span class="exercise-number">01</span>
              <h3>Вправи для шиї</h3>
              <p>
                Рухливість шийного відділу, контроль рухів
                та робота з напруженням м'язів шиї.
              </p>
              <span class="exercise-status">Матеріали готуються</span>
            </article>

            <article class="exercise-card">
              <span class="exercise-number">02</span>
              <h3>Вправи для грудного відділу</h3>
              <p>
                Рухливість грудного відділу хребта,
                повороти корпусу та рухи грудної клітки.
              </p>
              <span class="exercise-status">Матеріали готуються</span>
            </article>

            <article class="exercise-card">
              <span class="exercise-number">03</span>
              <h3>Вправи для попереку</h3>
              <p>
                Рухи поперекового відділу, контроль положення
                таза та робота з руховою активністю.
              </p>
              <span class="exercise-status">Матеріали готуються</span>
            </article>

            <article class="exercise-card">
              <span class="exercise-number">04</span>
              <h3>Вправи для покращення рухливості</h3>
              <p>
                Комплекси для розвитку амплітуди рухів
                та підтримки загальної рухливості тіла.
              </p>
              <span class="exercise-status">Матеріали готуються</span>
            </article>

            <article class="exercise-card">
              <span class="exercise-number">05</span>
              <h3>Вправи для постави</h3>
              <p>
                Рухові вправи для розвитку контролю положення
                тіла та підтримки м'язової активності.
              </p>
              <span class="exercise-status">Матеріали готуються</span>
            </article>

            <article class="exercise-card">
              <span class="exercise-number">06</span>
              <h3>Загальна рухова активність</h3>
              <p>
                Прості рухові комплекси для підтримки
                активності у повсякденному житті.
              </p>
              <span class="exercise-status">Матеріали готуються</span>
            </article>
          </div>
        </div>
      </section>

      <section class="exercises-section exercises-section-alt">
        <div class="exercises-container">
          <div class="exercises-note">
            <span class="exercises-eyebrow">ВАЖЛИВО ЗНАТИ</span>
            <h2>Вправи мають відповідати вашому стану</h2>
            <p>
              Одна й та сама вправа може підходити одній людині
              та бути небажаною для іншої. Враховуйте свій стан,
              симптоми й рекомендації фахівця.
            </p>
            <p>
              Якщо під час виконання вправи виникає різкий біль,
              посилюється оніміння або з'являється слабкість,
              припиніть виконання та зверніться за медичною оцінкою.
            </p>
            <a href="/booking.html" class="exercises-button">
              Записатися на консультацію
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
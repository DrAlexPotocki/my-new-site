import '../style.css'
import { siteData } from '../data/siteData.js'
import { initMenu } from '../scripts/menu.js'

async function loadComponent(path) {
  const response = await fetch(path)

  if (!response.ok) {
    throw new Error(`Не вдалося завантажити компонент: ${path}`)
  }

  return response.text()
}

async function loadPage() {
  const [header, footer] = await Promise.all([
    loadComponent('/src/components/Header.html'),
    loadComponent('/src/components/Footer.html'),
  ])

  const app = document.querySelector('#app')

  app.innerHTML = `
    ${header}

    <main class="hernias-page">

      <section class="hernias-intro">
        <div class="hernias-container">
          <p class="hernias-eyebrow">ПІДХІД ДО РОБОТИ</p>

          <h1>Мануальна терапія — уважна робота з рухом і функцією тіла</h1>

          <div class="hernias-text">
            <p>
              Це метод роботи з опорно-руховим апаратом,
              який передбачає використання спеціальних ручних
              технік з урахуванням стану та потреб людини.
            </p>

            <p>
              Перш ніж обрати підхід, важливо оцінити скарги,
              рухливість і можливі обмеження.
            </p>
          </div>
        </div>
      </section>

      <section class="hernias-section">
        <div class="hernias-container">
          <h2>Що передбачає мануальна терапія?</h2>

          <div class="hernias-text">
            <p>
              Мануальна терапія охоплює різні ручні техніки,
              які застосовують для роботи з суглобами,
              м'язами та рухливістю окремих ділянок тіла.
            </p>

            <p>
              Конкретні техніки та інтенсивність впливу залежать
              від результатів оцінки стану людини. Не кожна
              техніка підходить кожному пацієнту.
            </p>
          </div>
        </div>
      </section>

      

      <section class="hernias-section">
        <div class="hernias-container">
          <h2>Від першого знайомства до плану дій</h2>

          <div class="hernias-symptoms">

            <article class="hernias-symptom">
              <span>01</span>
              <div>
                <h3>Знайомство та скарги</h3>
                <p>
                  Обговорюємо, що саме турбує, коли з'явилися
                  симптоми та як вони впливають
                  на повсякденне життя.
                </p>
              </div>
            </article>

            <article class="hernias-symptom">
              <span>02</span>
              <div>
                <h3>Оцінка стану</h3>
                <p>
                  За потреби оцінюємо рухливість, функціональні
                  можливості та наявні обмеження.
                </p>
              </div>
            </article>

            <article class="hernias-symptom">
              <span>03</span>
              <div>
                <h3>Вибір підходу</h3>
                <p>
                  Обговорюємо можливі варіанти допомоги,
                  очікування та доцільність застосування
                  ручних технік.
                </p>
              </div>
            </article>

            <article class="hernias-symptom">
              <span>04</span>
              <div>
                <h3>Рекомендації</h3>
                <p>
                  За результатами прийому визначаємо подальші
                  кроки та рекомендації для повсякденного життя.
                </p>
              </div>
            </article>

          </div>
        </div>
      </section>

      <section class="hernias-section">
        <div class="hernias-warning">
            <div class="hernias-container">
            <h2>Можливості та обмеження методу</h2>

            <div class="hernias-text">
                <p>
                Мануальна терапія не є універсальним способом
                лікування всіх захворювань опорно-рухового апарату.
                Вона не відновлює механічно пошкоджений диск
                і не усуває міжхребцеву грижу.
                </p>

                <p>
                За наявності певних симптомів або протипоказань
                ручні техніки можуть бути недоречними. У таких
                випадках важливо спочатку пройти необхідне
                медичне обстеження.
                </p>

                <p>
                Якщо виникли прогресуюча слабкість у кінцівках,
                порушення контролю сечовипускання чи дефекації
                або оніміння в ділянці промежини, потрібна
                невідкладна медична оцінка.
                </p>
            </div>
            </div>
        </div>
        </section>

      <section class="hernias-section">
        <div class="hernias-container hernias-cta">
          <h2>Є запитання щодо вашого стану?</h2>

          <div class="hernias-text">
            <p>
              Зателефонуйте, щоб узгодити час прийому
              та обговорити можливість консультації.
            </p>
          </div>

          <a
            class="hernias-button"
            href="${siteData.contact.phoneLink}"
          >
            Записатися на прийом
          </a>
        </div>
      </section>

    </main>

    ${footer}
  `

  initMenu()
}

loadPage().catch((error) => {
  console.error('Помилка завантаження сторінки:', error)
})
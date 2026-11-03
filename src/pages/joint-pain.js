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
          <p class="hernias-eyebrow">З ЧИМ Я ПРАЦЮЮ</p>

          <h1>Проблеми із суглобами</h1>

          <div class="hernias-text">
            <p>
              Біль, скутість і обмеження рухливості суглобів можуть
              заважати звичним повсякденним справам. Дискомфорт може
              виникати в плечах, ліктях, кистях, кульшових, колінних
              та інших суглобах.
            </p>
            <p>
              Причини таких симптомів бувають різними. Щоб визначити
              подальшу тактику, важливо оцінити стан суглоба,
              навколишніх тканин та опорно-рухового апарату загалом.
            </p>
          </div>
        </div>
      </section>

      <section class="hernias-section">
        <div class="hernias-container">
          <h2>Які суглоби можуть турбувати?</h2>

          <div class="hernias-text">
            <p>
              Суглобовий біль може виникати в різних ділянках тіла.
              Іноді він з'являється поступово, а іноді — після
              фізичного навантаження або травми.
            </p>
          </div>
        </div>
      </section>

      <section class="hernias-section hernias-section-alt">
        <div class="hernias-container">
          <div class="hernias-symptoms">

            <article class="hernias-symptom">
              <span>01</span>
              <div>
                <h3>Плечові суглоби</h3>
                <p>
                  Біль під час підняття руки, відведення її вбік,
                  одягання або виконання рухів над головою.
                </p>
              </div>
            </article>

            <article class="hernias-symptom">
              <span>02</span>
              <div>
                <h3>Ліктьові суглоби</h3>
                <p>
                  Дискомфорт під час згинання та розгинання руки,
                  захоплення предметів або фізичного навантаження.
                </p>
              </div>
            </article>

            <article class="hernias-symptom">
              <span>03</span>
              <div>
                <h3>Кульшові суглоби</h3>
                <p>
                  Біль у ділянці паху, сідниці або стегна,
                  скутість під час ходьби та обмеження рухів.
                </p>
              </div>
            </article>

            <article class="hernias-symptom">
              <span>04</span>
              <div>
                <h3>Колінні суглоби</h3>
                <p>
                  Біль під час ходьби, присідання, підйому сходами
                  або після тривалого перебування на ногах.
                </p>
              </div>
            </article>

            <article class="hernias-symptom">
              <span>05</span>
              <div>
                <h3>Суглоби кистей і стоп</h3>
                <p>
                  Скутість, болючість, дискомфорт під час захоплення
                  предметів або перенесення ваги тіла.
                </p>
              </div>
            </article>

          </div>
        </div>
      </section>

      <section class="hernias-section">
        <div class="hernias-container">
          <h2>Чому можуть боліти суглоби?</h2>

          <div class="hernias-text">
            <p>
              Серед можливих причин — надмірне або повторюване
              навантаження, травми, запальні процеси, дегенеративні
              зміни, захворювання навколосуглобових тканин та інші
              порушення.
            </p>

            <p>
              Не кожен біль у ділянці суглоба виникає безпосередньо
              в самому суглобі. Наприклад, дискомфорт у плечі або
              стегні іноді може бути пов'язаний із проблемами
              в інших анатомічних структурах.
            </p>

            <p>
              Саме тому важливо не обмежуватися оцінкою лише місця,
              де відчувається біль.
            </p>
          </div>
        </div>
      </section>

      <section class="hernias-section hernias-section-alt">
        <div class="hernias-container">
          <h2>На що варто звернути увагу?</h2>

          <div class="hernias-text">
            <p>
              Важливими є тривалість симптомів, обставини їх появи,
              наявність набряку, почервоніння, локального підвищення
              температури, обмеження рухів та реакція на навантаження.
            </p>

            <p>
              За необхідності лікар може рекомендувати додаткове
              обстеження або консультацію профільного спеціаліста.
              Це допомагає визначити причину симптомів і виключити
              стани, за яких певні види фізичного впливу протипоказані.
            </p>
          </div>

          <h2>Чи може бути корисною мануальна терапія?</h2>

          <div class="hernias-text">
            <p>
              У деяких випадках мануальна терапія може бути одним
              зі складників комплексного підходу до роботи
              з рухливістю та м'язовим напруженням навколо суглоба.
            </p>

            <p>
              Можливість її застосування залежить від причини болю,
              стану суглоба та загального здоров'я пацієнта.
              Методика підбирається індивідуально після оцінки.
            </p>

            <p>
              Мануальна терапія не замінює діагностику та лікування
              захворювань суглобів, які потребують спеціалізованої
              медичної допомоги.
            </p>
          </div>
        </div>
      </section>

      <section class="hernias-section">
        <div class="hernias-warning">
          <div class="hernias-container">
            <h2>Коли потрібно звернутися до лікаря?</h2>

            <div class="hernias-text">
              <p>
                Не відкладайте медичну оцінку, якщо біль виник
                після серйозної травми, суглоб деформований,
                виражено набряк або неможливо спиратися на кінцівку
                чи рухати нею.
              </p>

              <p>
                Особливо важливо терміново звернутися по допомогу,
                якщо суглоб став гарячим, почервонів і сильно болить,
                а також з'явилася температура або загальне
                погіршення самопочуття. Такі симптоми можуть
                свідчити про стан, який потребує невідкладної оцінки.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class="hernias-section">
        <div class="hernias-container hernias-cta">
          <h2>Потрібна консультація?</h2>

          <div class="hernias-text">
            <p>
              Якщо біль або обмеження рухливості суглоба заважають
              повсякденному життю, зверніться за консультацією,
              щоб оцінити стан і визначити можливі подальші кроки.
            </p>
          </div>

          <a
            class="hernias-button"
            href="${siteData.contact.phoneLink}"
          >
            Записатися на консультацію
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

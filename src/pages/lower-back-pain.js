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

          <h1>Біль у попереку</h1>

          <div class="hernias-text">
            <p>
              Біль у попереку — одна з поширених причин дискомфорту
              та обмеження повсякденної активності. Він може виникати
              після фізичного навантаження, тривалого перебування
              в одному положенні або без очевидної причини.
            </p>
            <p>
              Характер болю та його причини можуть відрізнятися.
              Тому важливо оцінити стан людини, супутні симптоми
              та обставини появи дискомфорту.
            </p>
          </div>
        </div>
      </section>

      <section class="hernias-section">
        <div class="hernias-container">
          <h2>Як може проявлятися біль у попереку?</h2>

          <div class="hernias-text">
            <p>
              У когось біль відчувається як постійне напруження
              або скутість, в інших випадках він може бути гострим
              і посилюватися під час нахилів, поворотів чи зміни
              положення тіла.
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
                <h3>М'язове напруження</h3>
                <p>
                  Відчуття скутості, напруження та дискомфорту
                  в ділянці попереку, особливо після навантаження.
                </p>
              </div>
            </article>

            <article class="hernias-symptom">
              <span>02</span>
              <div>
                <h3>Біль під час руху</h3>
                <p>
                  Неприємні відчуття під час нахилів, поворотів,
                  піднімання предметів або вставання з положення сидячи.
                </p>
              </div>
            </article>

            <article class="hernias-symptom">
              <span>03</span>
              <div>
                <h3>Скутість після спокою</h3>
                <p>
                  Відчуття обмеження рухів після сну або тривалого
                  перебування в одному положенні.
                </p>
              </div>
            </article>

            <article class="hernias-symptom">
              <span>04</span>
              <div>
                <h3>Біль із поширенням у ногу</h3>
                <p>
                  Іноді біль може поширюватися в сідницю,
                  стегно або нижче по нозі.
                </p>
              </div>
            </article>

          </div>
        </div>
      </section>

      <section class="hernias-section">
        <div class="hernias-container">
          <h2>Чому може боліти поперек?</h2>

          <div class="hernias-text">
            <p>
              Причинами можуть бути перевантаження м'язів і зв'язок,
              зміни міжхребцевих дисків, суглобів хребта, подразнення
              нервових структур та інші порушення.
            </p>

            <p>
              Іноді біль у попереку пов'язаний не лише з хребтом,
              а й зі станом інших структур організму. Тому не варто
              самостійно визначати причину лише за місцем болю.
            </p>

            <p>
              Для вибору подальшої тактики важливо враховувати
              тривалість симптомів, їхню інтенсивність, характер
              та вплив на повсякденну активність.
            </p>
          </div>
        </div>
      </section>

      <section class="hernias-section hernias-section-alt">
        <div class="hernias-container">
          <h2>Як визначається підхід до роботи?</h2>

          <div class="hernias-text">
            <p>
              Перед початком роботи необхідно оцінити рухливість,
              м'язове напруження, характер болю та можливі
              обмеження. За потреби пацієнту може бути рекомендована
              консультація профільного лікаря або додаткове обстеження.
            </p>
          </div>

          <h2>Чи може допомогти мануальна терапія?</h2>

          <div class="hernias-text">
            <p>
              У деяких випадках мануальна терапія може бути частиною
              комплексного підходу до роботи з болем у попереку
              та обмеженням рухливості.
            </p>

            <p>
              Можливість і доцільність її застосування визначаються
              індивідуально після оцінки стану пацієнта. Мануальна
              терапія не замінює медичну діагностику та не є
              універсальним способом усунення всіх причин болю.
            </p>
          </div>
        </div>
      </section>

      <section class="hernias-section">
        <div class="hernias-warning">
          <div class="hernias-container">
            <h2>Коли потрібно терміново звернутися до лікаря?</h2>

            <div class="hernias-text">
              <p>
                Не відкладайте медичну допомогу, якщо з'явилися
                порушення контролю сечовипускання або випорожнення,
                втрата чутливості в ділянці промежини чи швидке
                наростання слабкості в ногах.
              </p>

              <p>
                Також важливо звернутися до лікаря, якщо біль виник
                після серйозної травми, супроводжується гарячкою,
                незрозумілим погіршенням самопочуття або стає
                дедалі інтенсивнішим.
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
              Якщо біль у попереку заважає рухатися та виконувати
              звичні справи, зверніться за консультацією,
              щоб оцінити стан і визначити подальші кроки.
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

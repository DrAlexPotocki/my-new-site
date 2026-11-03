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

          <h1>Спондильоз та спондилоартроз хребта</h1>

          <div class="hernias-text">
            <p>
              Спондильоз та спондилоартроз — це дегенеративні
              зміни структур хребта. Вони можуть розвиватися
              поступово та супроводжуватися болем, скутістю
              й обмеженням рухливості.
            </p>

            <p>
              Такі зміни не завжди викликають симптоми.
              Їх наявність на знімках не означає, що саме вони
              є причиною болю. Важливо оцінювати результати
              обстежень разом зі скаргами та клінічним станом
              людини.
            </p>
          </div>
        </div>
      </section>

      <section class="hernias-section">
        <div class="hernias-container">
          <h2>У чому різниця між спондильозом і спондилоартрозом?</h2>

          <div class="hernias-text">
            <p>
              Спондильоз пов'язаний із дегенеративними змінами
              тіл хребців та утворенням кісткових розростань.
              Спондилоартроз стосується змін міжхребцевих
              (фасеткових) суглобів.
            </p>

            <p>
              Обидва стани можуть зустрічатися одночасно.
              Їх прояви залежать від локалізації змін,
              супутніх порушень та індивідуальних особливостей
              організму.
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
                <h3>Біль у спині</h3>
                <p>
                  Дискомфорт у шийному, грудному або поперековому
                  відділі, який може змінюватися залежно
                  від навантаження та положення тіла.
                </p>
              </div>
            </article>

            <article class="hernias-symptom">
              <span>02</span>
              <div>
                <h3>Скутість після спокою</h3>
                <p>
                  Відчуття скутості після сну або тривалого
                  перебування в одному положенні.
                </p>
              </div>
            </article>

            <article class="hernias-symptom">
              <span>03</span>
              <div>
                <h3>Обмеження рухливості</h3>
                <p>
                  Дискомфорт або зменшення амплітуди рухів
                  під час нахилів, поворотів чи розгинання спини.
                </p>
              </div>
            </article>

            <article class="hernias-symptom">
              <span>04</span>
              <div>
                <h3>М'язове напруження</h3>
                <p>
                  Відчуття напруження м'язів навколо ураженої
                  ділянки хребта, яке може супроводжуватися
                  додатковим дискомфортом.
                </p>
              </div>
            </article>

          </div>
        </div>
      </section>

      <section class="hernias-section">
        <div class="hernias-container">
          <h2>Чому виникають такі зміни?</h2>

          <div class="hernias-text">
            <p>
              Дегенеративні зміни хребта пов'язані з природними
              процесами старіння та поступовими змінами
              міжхребцевих дисків і суглобів.
            </p>

            <p>
              На їх розвиток можуть впливати вік, перенесені
              травми, особливості фізичних навантажень,
              спадкові чинники та інші індивідуальні особливості.
            </p>

            <p>
              Водночас вираженість змін на рентгенівських
              знімках або МРТ не завжди відповідає інтенсивності
              симптомів. Тому важливо не робити висновків
              лише за результатами обстеження.
            </p>
          </div>
        </div>
      </section>

      <section class="hernias-section hernias-section-alt">
        <div class="hernias-container">
          <h2>Як визначається підхід до роботи?</h2>

          <div class="hernias-text">
            <p>
              Перед вибором тактики необхідно оцінити характер
              болю, рухливість хребта, м'язове напруження,
              неврологічні симптоми та наявні результати
              обстежень.
            </p>

            <p>
              За потреби пацієнту може бути рекомендована
              консультація невролога, ортопеда або іншого
              профільного спеціаліста.
            </p>
          </div>

          <h2>Чи може допомогти мануальна терапія?</h2>

          <div class="hernias-text">
            <p>
              У деяких випадках мануальна терапія може бути
              частиною комплексного підходу до зменшення
              м'язового напруження та роботи з обмеженням
              рухливості.
            </p>

            <p>
              Вона не усуває кісткові розростання чи структурні
              дегенеративні зміни. Можливість застосування
              мануальної терапії визначається індивідуально
              після оцінки стану пацієнта та виключення
              протипоказань.
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
                Не відкладайте медичну консультацію, якщо біль
                посилюється, з'являється слабкість у руках
                або ногах, порушення чутливості чи нестійкість
                під час ходьби.
              </p>

              <p>
                При швидкому наростанні слабкості, втраті
                контролю сечовипускання або випорожнення
                чи втраті чутливості в ділянці промежини
                необхідна невідкладна медична допомога.
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
              Якщо біль, скутість або обмеження рухливості
              заважають повсякденній активності, зверніться
              за консультацією, щоб оцінити стан і визначити
              подальші кроки.
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

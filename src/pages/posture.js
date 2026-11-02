import '../style.css'
import { siteData } from '../data/siteData.js'
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

// Формуємо сторінку про порушення постави
document.querySelector('#app').innerHTML = `
  ${headerHTML}

  <main class="posture-page">

    <section class="posture-intro">
      <div class="posture-container">
        <span class="posture-eyebrow">З ЧИМ Я ПРАЦЮЮ</span>

        <h1>Порушення постави</h1>

        <p>
          Постава формується під впливом багатьох факторів:
          особливостей будови тіла, м'язового балансу,
          рухової активності та щоденних звичок.
          Тривале перебування в одному положенні може
          впливати на комфорт руху та самопочуття.
        </p>

        <a class="posture-button" href="/booking.html">
          Записатися на консультацію
        </a>
      </div>
    </section>

    <section class="posture-section">
      <div class="posture-container">
        <div class="posture-text">
          <span class="posture-eyebrow">ПРО ПОСТАВУ</span>

          <h2>Що таке порушення постави?</h2>

          <p>
            Постава — це звичне положення тіла людини
            під час стояння, сидіння та руху. Вона залежить
            від взаємодії хребта, суглобів, м'язів та нервової
            системи.
          </p>

          <p>
            Порушення постави можуть проявлятися зміною
            положення голови, плечей, лопаток, грудної клітки
            або таза. Іноді такі особливості не викликають
            болю чи інших скарг.
          </p>

          <p>
            Важливо розрізняти функціональні зміни постави
            та структурні деформації хребта. Для визначення
            причини та вибору подальшої тактики потрібна
            індивідуальна оцінка.
          </p>
        </div>
      </div>
    </section>

    <section class="posture-section posture-section-alt">
      <div class="posture-container">
        <div class="posture-text">
          <span class="posture-eyebrow">МОЖЛИВІ ПРИЧИНИ</span>

          <h2>Що може впливати на поставу?</h2>

          <div class="posture-list">

            <article class="posture-item">
              <span>01</span>
              <div>
                <h3>Тривале сидіння</h3>
                <p>
                  Робота за комп'ютером, керування автомобілем
                  або тривале сидіння без зміни положення тіла.
                </p>
              </div>
            </article>

            <article class="posture-item">
              <span>02</span>
              <div>
                <h3>Недостатня рухова активність</h3>
                <p>
                  Нестача регулярного руху та фізичних
                  навантажень може впливати на витривалість
                  м'язів і рухові звички.
                </p>
              </div>
            </article>

            <article class="posture-item">
              <span>03</span>
              <div>
                <h3>Звичне положення тіла</h3>
                <p>
                  Звичка сутулитися, нахиляти голову вперед
                  або постійно переносити вагу на одну сторону.
                </p>
              </div>
            </article>

            <article class="posture-item">
              <span>04</span>
              <div>
                <h3>М'язовий дисбаланс</h3>
                <p>
                  Відмінності у силі, витривалості та контролі
                  м'язів можуть впливати на положення тіла.
                </p>
              </div>
            </article>

          </div>
        </div>
      </div>
    </section>

    <section class="posture-section">
      <div class="posture-container">
        <div class="posture-text">
          <span class="posture-eyebrow">МОЖЛИВІ ПРОЯВИ</span>

          <h2>На що варто звернути увагу?</h2>

          <p>
            Особливості постави можуть супроводжуватися
            різними відчуттями та змінами рухливості.
            Серед можливих проявів:
          </p>

          <div class="posture-list">

            <article class="posture-item">
              <span>01</span>
              <div>
                <h3>Напруження у шиї та плечах</h3>
                <p>
                  Відчуття скутості або втоми після тривалої
                  роботи сидячи.
                </p>
              </div>
            </article>

            <article class="posture-item">
              <span>02</span>
              <div>
                <h3>Дискомфорт у грудному відділі</h3>
                <p>
                  Відчуття напруження між лопатками
                  або в ділянці грудної клітки.
                </p>
              </div>
            </article>

            <article class="posture-item">
              <span>03</span>
              <div>
                <h3>Втома м'язів спини</h3>
                <p>
                  Втома або дискомфорт під час тривалого
                  стояння чи сидіння.
                </p>
              </div>
            </article>

            <article class="posture-item">
              <span>04</span>
              <div>
                <h3>Обмеження рухливості</h3>
                <p>
                  Відчуття скутості під час поворотів,
                  нахилів та інших рухів.
                </p>
              </div>
            </article>

          </div>
        </div>
      </div>
    </section>

    <section class="posture-section posture-section-alt">
      <div class="posture-container">
        <div class="posture-text">
          <span class="posture-eyebrow">МОЖЛИВОСТІ ДОПОМОГИ</span>

          <h2>Роль мануальної терапії у роботі з поставою</h2>

          <p>
            Мануальна терапія може бути частиною комплексного
            підходу, якщо порушення постави супроводжуються
            м'язовим напруженням, болем або обмеженням
            рухливості.
          </p>

          <p>
            Під час консультації я оцінюю рухливість хребта,
            стан м'язів, особливості рухових звичок та скарги
            пацієнта. На основі цієї оцінки визначається,
            чи є показання до мануального впливу.
          </p>

          <p>
            За потреби мануальна терапія поєднується
            з рекомендаціями щодо рухової активності
            та індивідуально підібраними вправами.
          </p>

          <p>
            Важливо не лише працювати з наявним дискомфортом,
            а й змінювати щоденні звички: робити перерви
            під час сидячої роботи, регулярно рухатися
            та підтримувати фізичну активність.
          </p>
        </div>
      </div>
    </section>

    <section class="posture-section">
      <div class="posture-container posture-cta">
        <span class="posture-eyebrow">ІНДИВІДУАЛЬНИЙ ПІДХІД</span>

        <h2>Почніть із оцінки вашого стану</h2>

        <p>
          Якщо вас турбує дискомфорт у спині, шиї,
          напруження м'язів або особливості постави,
          можна звернутися для консультації та обговорення
          можливих подальших дій.
        </p>

        <a class="posture-phone" href="${siteData.contact.phoneLink}">
          ${siteData.contact.phone}
        </a>

        <a class="posture-button" href="/booking.html">
          Контакти та запис
        </a>
      </div>
    </section>

  </main>

  ${footerHTML}
`

initMenu()
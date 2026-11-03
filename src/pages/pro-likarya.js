import '../style.css'
import { siteData } from '../data/siteData.js'
import { conditionsData } from '../data/conditionsData.js'
import { initMenu } from '../scripts/menu.js'
import { initConditionsCarousel } from '../scripts/conditionsCarousel.js'
import { doctorImageSettings } from '../data/doctorImageSettings.js'

const app = document.querySelector('#app')

function renderDoctorPracticeCards() {
  const shuffledConditions = [...conditionsData]
    .sort(() => Math.random() - 0.5)

  const cardsPerSlide = window.matchMedia('(max-width: 768px)').matches ? 2 : 4
  const slides = []

  for (let i = 0; i < shuffledConditions.length; i += cardsPerSlide) {
    slides.push(shuffledConditions.slice(i, i + cardsPerSlide))
  }

  return slides.map((slide) => `
    <div class="doctor-practice-slide">
      <div class="doctor-practice-grid">
        ${slide.map((condition) => {
          const cardContent = `
            <h3>${condition.title}</h3>
            <p>${condition.description}</p>
            <span class="doctor-practice-link">
              ${condition.url ? 'Детальніше →' : 'Напрям роботи'}
            </span>
          `

          return condition.url
            ? `<a href="${condition.url}" class="doctor-practice-card">${cardContent}</a>`
            : `<article class="doctor-practice-card">${cardContent}</article>`
        }).join('')}
      </div>
    </div>
  `).join('')
}

async function loadPage() {
  const [header, footer] = await Promise.all([
    fetch('/src/components/Header.html').then((response) => response.text()),
    fetch('/src/components/Footer.html').then((response) => response.text()),
  ])

  app.innerHTML = `
    ${header}

    <main class="doctor-page">

      <section class="doctor-intro">
        <div class="doctor-container doctor-hero">

          <div class="doctor-hero-content">
            <span class="doctor-eyebrow">
              ЗНАЙОМСТВО З ЛІКАРЕМ
            </span>

            <h1>
              Лікар, який уважно ставиться до вашого здоров'я.
            </h1>

            <p class="doctor-lead">
              Я — ${siteData.doctor.name}, лікар мануальний терапевт.
              У своїй роботі приділяю увагу не лише ділянці болю,
              а й загальному стану опорно-рухового апарату.
            </p>

            <p class="doctor-lead">
              Для мене важливо зрозуміти причину скарг, пояснити
              пацієнту можливі варіанти допомоги та підібрати
              індивідуальний підхід до кожної ситуації.
            </p>

            <div class="doctor-experience">
                <span class="doctor-experience-number">10+</span>
                <div>
                    <strong>років практичного досвіду</strong>
                    <span>Професійну діяльність розпочав у грудні 2015 року</span>
                </div>
                </div>

            <a href="/booking.html" class="doctor-button">
              Записатися на прийом
            </a>
          </div>

          <div class="doctor-photo">
            <img
                src="${doctorImageSettings.src}"
                alt="Алєксандр Потоцький — лікар мануальний терапевт"
                style="
                object-fit: ${doctorImageSettings.fit};
                object-position: ${doctorImageSettings.positionX}% ${doctorImageSettings.positionY}%;
                transform: scale(${doctorImageSettings.scale});
                "
            />
            </div>

        </div>
      </section>

      <section class="doctor-approach">
        <div class="doctor-container">

          <span class="doctor-eyebrow">МІЙ ПІДХІД</span>

          <h2>Не просто працювати з болем, а розуміти ситуацію.</h2>

          <p class="doctor-section-lead">
            Кожна людина має свою історію, особливості стану
            та причини звернення. Тому роботу починаю з оцінки
            скарг і розуміння того, що саме турбує пацієнта.
          </p>

          <div class="doctor-principles">

            <article class="doctor-principle">
              <span>01</span>
              <h3>Індивідуально</h3>
              <p>
                Враховую скарги, особливості стану та можливості
                кожного пацієнта.
              </p>
            </article>

            <article class="doctor-principle">
              <span>02</span>
              <h3>Зрозуміло</h3>
              <p>
                Пояснюю, що може відбуватися з організмом
                та які є варіанти подальших дій.
              </p>
            </article>

            <article class="doctor-principle">
              <span>03</span>
              <h3>Відповідально</h3>
              <p>
                Враховую показання та обмеження. Не обіцяю
                результатів, які неможливо гарантувати.
              </p>
            </article>

          </div>
        </div>
      </section>

      <section class="doctor-education">
        <div class="doctor-container doctor-education-layout">

          <div>
            <span class="doctor-eyebrow">ПРОФЕСІЙНИЙ РОЗВИТОК</span>
            <h2>Освіта та досвід</h2>
            <p class="doctor-section-lead">
              Професійна підготовка та постійне навчання
              є важливою частиною відповідальної роботи з пацієнтами.
            </p>
          </div>

        <div class="doctor-education-note">

                <div class="doctor-education-item">
                    <span class="doctor-education-number">01</span>
                    <div>
                    <h3>Медична освіта</h3>
                    <p>
                        Шестирічна медична освіта, що стала основою
                        для подальшої професійної діяльності та роботи
                        з опорно-руховим апаратом.
                    </p>
                    </div>
                </div>

                <div class="doctor-education-item">
                    <span class="doctor-education-number">02</span>
                    <div>
                    <h3>Академічний ступінь</h3>
                    <p>
                        Ступінь магістра.
                    </p>
                    </div>
                </div>

                <div class="doctor-education-item">
                    <span class="doctor-education-number">03</span>
                    <div>
                    <h3>Професійний розвиток</h3>
                    <p>
                        Поглиблення практичних знань і вдосконалення
                        навичок у сфері мануальної терапії та роботи
                        з м'якими тканинами.
                    </p>
                    </div>
                </div>

            </div>

        </div>
      </section>

      <section class="doctor-career">
        <div class="doctor-container">

            <div class="doctor-career-heading">
            <span class="doctor-eyebrow">ПРОФЕСІЙНИЙ ШЛЯХ</span>
            <h2>Досвід, набутий роками практики</h2>
            <p class="doctor-section-lead">
                Моя професійна діяльність у кабінеті мануальної терапії
                розпочалася у грудні 2015 року. За цей час практична
                робота стала важливою частиною мого професійного життя.
            </p>
            </div>

            <div class="doctor-career-timeline">

            <div class="doctor-career-point">
                <div class="doctor-career-marker"></div>

                <div class="doctor-career-content">
                <span class="doctor-career-date">ГРУДЕНЬ 2015</span>
                <h3>Початок практичної діяльності</h3>
                <p>
                    Початок роботи в кабінеті мануальної терапії
                    та професійного шляху, пов'язаного з допомогою
                    людям із проблемами опорно-рухового апарату.
                </p>
                </div>
            </div>

                <div class="doctor-career-point">
                    <div class="doctor-career-marker"></div>

                    <div class="doctor-career-content">
                    <span class="doctor-career-date">ДО 2024 РОКУ</span>
                    <h3>Викладацька діяльність</h3>
                    <p>
                        Також мав досвід викладання масажних технік
                        у школі A.M.IF., де ділився практичними знаннями
                        та професійним досвідом з іншими фахівцями.
                    </p>
                    </div>
                </div>

            <div class="doctor-career-point">
                <div class="doctor-career-marker"></div>

                <div class="doctor-career-content">
                <span class="doctor-career-date">2026</span>
                <h3>Понад 10 років практичного досвіду</h3>
                <p>
                    Сьогодні за моїми плечима понад десять років
                    практичної роботи, професійного досвіду
                    та взаємодії з пацієнтами.
                </p>
                </div>
            </div>


            </div>
        </div>
        </section>

        <section class="doctor-practice">
            <div class="doctor-container">

                <div class="doctor-practice-heading">
                <span class="doctor-eyebrow">НАПРЯМИ РОБОТИ</span>

                <h2>З якими проблемами я працюю</h2>

                <p class="doctor-section-lead">
                    У своїй практиці я працюю з різними проявами порушень
                    опорно-рухового апарату. Кожен випадок потребує
                    індивідуальної оцінки та підбору відповідного підходу.
                </p>
                </div>

                <div class="doctor-practice-carousel" id="doctor-practice-carousel">
                    <div class="doctor-practice-track">
                        ${renderDoctorPracticeCards()}
                    </div>
                </div>

         </section>

      <section class="doctor-final">
        <div class="doctor-container doctor-final-content">

          <div>
            <span class="doctor-eyebrow">ЗАПИС НА ПРИЙОМ</span>
            <h2>Почнімо з розмови про те, що вас турбує.</h2>
            <p>
              Запишіться на прийом, щоб обговорити ваш стан
              та можливі наступні кроки.
            </p>
          </div>

          <a href="${siteData.contact.phoneLink}" class="doctor-button">
            Зателефонувати
         </a>

        </div>
      </section>

    </main>

    ${footer}
  `

    initMenu()

  initConditionsCarousel({
    viewportSelector: '#doctor-practice-carousel',
    trackSelector: '.doctor-practice-track',
    slideSelector: '.doctor-practice-slide',
  })
}

loadPage().catch((error) => {
  console.error('Помилка завантаження сторінки:', error)
})
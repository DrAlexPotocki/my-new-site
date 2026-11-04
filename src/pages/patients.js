import '../style.css'
import { siteData } from '../data/siteData.js'
import { initMenu } from '../scripts/menu.js'

const app = document.querySelector('#app')

const patientMaterials = [
  {
    number: '01',
    title: 'Чого очікувати від першого візиту',
    description: 'Як проходить перша консультація, що я оцінюю та як визначається подальша тактика.',
    url: '/pershyi-vizyt.html',
  },
  {
    number: '02',
    title: 'Відчуття після процедури',
    description: 'Які відчуття можуть виникати після мануальної терапії та на що варто звернути увагу.',
    url: '/vidchuttya-pislya-protsedury.html',
  },
  {
    number: '03',
    title: 'Загострення симптомів після процедури',
    description: 'Що робити, якщо після процедури біль посилився або з’явилися нові симптоми.',
    url: '/zagostrennya-pislya-protsedury.html',
  },
  {
    number: '04',
    title: 'Від чого залежить кількість візитів',
    description: 'Чому кількість процедур визначається індивідуально та як оцінюється необхідність наступних візитів.',
    url: '/kilkist-vizytiv.html',
  },
  {
    number: '05',
    title: 'Як підготуватися до прийому',
    description: 'Що варто взяти із собою, про що повідомити лікаря та який одяг обрати.',
    url: '/pidgotovka-do-pryiomu.html',
  },
  {
    number: '06',
    title: 'Чи потрібно робити МРТ перед прийомом',
    description: 'Коли МРТ справді необхідне та чому результати обстеження важливо оцінювати разом із симптомами.',
    url: '/mrt-pered-pryiomom.html',
  },
  {
    number: '07',
    title: 'Кому не підходить мануальна терапія',
    description: 'Які стани потребують особливої обережності, додаткової оцінки або відмови від процедури.',
    url: '/protypokazannya-do-manualnoyi-terapiyi.html',
  },
  {
    number: '08',
    title: 'Профілактика порушень опорно-рухового апарату',
    description: 'Як підтримувати рухливість, правильно дозувати навантаження та дбати про здоров’я спини.',
    url: '/profilaktyka-porushen-oporno-rukhovogo-aparatu.html',
  },
]

async function loadPage() {
  const [header, footer] = await Promise.all([
    fetch('/src/components/Header.html').then((response) => response.text()),
    fetch('/src/components/Footer.html').then((response) => response.text()),
  ])

  app.innerHTML = `
    ${header}

    <main class="patients-page">

      <section class="patients-intro">
        <div class="patients-container">
          <span class="patients-eyebrow">ІНФОРМАЦІЯ ДЛЯ ВАС</span>

          <h1>Пацієнтам</h1>

          <p>
            Тут зібрана корисна інформація про перший прийом,
            мануальну терапію, підготовку до процедури, безпеку
            та профілактику порушень опорно-рухового апарату.
          </p>

          <a href="/booking.html" class="patients-button">
            Записатися на прийом
          </a>
        </div>
      </section>

      <section class="patients-section">
        <div class="patients-container">

          <div class="patients-text">
            <span class="patients-eyebrow">КОРИСНА ІНФОРМАЦІЯ</span>

            <h2>Матеріали для пацієнтів</h2>

            <p>
              Відповіді на поширені запитання про прийом,
              процедури мануальної терапії та турботу про
              опорно-руховий апарат.
            </p>
          </div>

          <div class="patients-grid">
            ${patientMaterials.map((item) => `
              <a
                href="${item.url}"
                class="patients-card patients-card-link"
              >
                <span>${item.number}</span>

                <h3>${item.title}</h3>

                <p>${item.description}</p>

                <span class="patients-card-more">
                  Читати матеріал →
                </span>
              </a>
            `).join('')}
          </div>

        </div>
      </section>

      <section class="patients-section patients-section-alt">
        <div class="patients-container">

          <div class="patients-text">
            <span class="patients-eyebrow">ПЕРШИЙ ВІЗИТ</span>

            <h2>Як підготуватися до прийому?</h2>

            <p>
              Спеціальної складної підготовки зазвичай не потрібно.
              Проте кілька простих речей допоможуть зробити консультацію
              більш змістовною.
            </p>
          </div>

          <div class="patients-grid">

            <article class="patients-card">
              <span>01</span>

              <h3>Візьміть результати обстежень</h3>

              <p>
                Якщо ви проходили МРТ, КТ, рентгенографію або маєте
                висновки інших спеціалістів, візьміть їх із собою.
              </p>
            </article>

            <article class="patients-card">
              <span>02</span>

              <h3>Згадайте історію проблеми</h3>

              <p>
                Подумайте, коли з'явився біль, що його посилює,
                що полегшує та чи були подібні епізоди раніше.
              </p>
            </article>

            <article class="patients-card">
              <span>03</span>

              <h3>Повідомте про стан здоров'я</h3>

              <p>
                Розкажіть про хронічні захворювання, перенесені травми,
                операції та препарати, які приймаєте.
              </p>
            </article>

            <article class="patients-card">
              <span>04</span>

              <h3>Оберіть зручний одяг</h3>

              <p>
                Бажано одягнути речі, які не обмежують рухів
                і дозволяють комфортно провести огляд.
              </p>
            </article>

          </div>
        </div>
      </section>

      <section class="patients-section">
        <div class="patients-container">

          <div class="patients-text">
            <span class="patients-eyebrow">ЕТАПИ КОНСУЛЬТАЦІЇ</span>

            <h2>Як проходить прийом?</h2>

            <p>
              Під час консультації важливо не лише визначити,
              де саме виникає біль, а й зрозуміти обставини
              його появи та фактори, які можуть на нього впливати.
            </p>
          </div>

          <div class="patients-steps">

            <article class="patients-step">
              <span>01</span>

              <div>
                <h3>Обговорення скарг</h3>

                <p>
                  Ви розповідаєте про симптоми, їх тривалість,
                  характер болю та те, як вони впливають на повсякденне життя.
                </p>
              </div>
            </article>

            <article class="patients-step">
              <span>02</span>

              <div>
                <h3>Оцінка стану</h3>

                <p>
                  Проводиться оцінка рухливості, функціонального стану
                  та інших особливостей, важливих для ваших скарг.
                </p>
              </div>
            </article>

            <article class="patients-step">
              <span>03</span>

              <div>
                <h3>Визначення подальшої тактики</h3>

                <p>
                  Обговорюємо можливі причини симптомів, доцільність
                  мануальної терапії та інші необхідні рекомендації.
                </p>
              </div>
            </article>

            <article class="patients-step">
              <span>04</span>

              <div>
                <h3>Процедура та рекомендації</h3>

                <p>
                  Якщо після оцінки стану немає протипоказань,
                  процедуру зазвичай можна провести під час
                  того самого візиту.
                </p>
              </div>
            </article>

          </div>
        </div>
      </section>

      <section class="patients-section">
        <div class="patients-container">

          <div class="patients-text">
            <span class="patients-eyebrow">ВАЖЛИВО ПОВІДОМИТИ</span>

            <h2>Що обов'язково потрібно розповісти лікарю?</h2>

            <p>
              Не приховуйте інформацію, яка може впливати на безпеку
              та вибір методів роботи. Особливо важливо повідомити про:
            </p>
          </div>

          <div class="patients-grid">

            <article class="patients-card">
              <span>01</span>

              <h3>Перенесені операції та травми</h3>

              <p>
                Навіть якщо вони відбулися давно, ця інформація
                може бути важливою для оцінки вашого стану.
              </p>
            </article>

            <article class="patients-card">
              <span>02</span>

              <h3>Хронічні захворювання</h3>

              <p>
                Повідомте про встановлені діагнози та особливості
                стану здоров'я.
              </p>
            </article>

            <article class="patients-card">
              <span>03</span>

              <h3>Оніміння та слабкість</h3>

              <p>
                Розкажіть, якщо відчуваєте поколювання, втрату чутливості
                або зниження сили в руках чи ногах.
              </p>
            </article>

            <article class="patients-card">
              <span>04</span>

              <h3>Результати попереднього лікування</h3>

              <p>
                Розкажіть, які методи лікування вже застосовувалися
                та який результат вони дали.
              </p>
            </article>

          </div>
        </div>
      </section>

      <section class="patients-section patients-section-alt">
        <div class="patients-container">

          <div class="patients-note">
            <span class="patients-eyebrow">БЕЗПЕКА ПАЦІЄНТА</span>

            <h2>Коли потрібна невідкладна медична допомога?</h2>

            <p>
              Раптова виражена слабкість у кінцівках, порушення контролю
              сечовипускання або дефекації, оніміння в ділянці промежини
              можуть бути ознаками серйозного неврологічного порушення.
            </p>

            <p>
              У таких випадках не варто чекати планового прийому —
              необхідно невідкладно звернутися по медичну допомогу.
            </p>
          </div>

        </div>
      </section>

      <section class="patients-section">
        <div class="patients-container">

          <div class="patients-cta">
            <span class="patients-eyebrow">ЗАПИС НА ПРИЙОМ</span>

            <h2>Є запитання або потрібна консультація?</h2>

            <p>
              Зв'яжіться зі мною, щоб узгодити зручний час прийому
              та отримати необхідну інформацію.
            </p>

            <a class="patients-phone" href="${siteData.contact.phoneLink}">
              ${siteData.contact.phone}
            </a>

            <a href="/booking.html" class="patients-button">
              Записатися на прийом
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
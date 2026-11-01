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

// Формуємо сторінку «З чим я працюю»
document.querySelector('#app').innerHTML = `
  ${headerHTML}

  <main class="conditions-page">

    <section class="conditions-intro">
      <div class="conditions-container">
        <span class="conditions-eyebrow">НАПРЯМИ РОБОТИ</span>

        <h1>З чим я працюю</h1>

        <p>
          Біль у спині, шиї, суглобах та обмеження рухливості
          можуть мати різні причини. На цій сторінці ви можете
          ознайомитися з проблемами, з якими я працюю,
          та дізнатися більше про можливості мануальної терапії.
        </p>
      </div>
    </section>

    <section class="conditions-content">
      <div class="conditions-container">

        <div class="conditions-heading">
          <span class="conditions-eyebrow">ЗА ЯКИХ СИМПТОМІВ ЗВЕРТАЮТЬСЯ</span>
          <h2>Основні напрями роботи</h2>
          <p>
            Оберіть напрям, який вас цікавить.
            Для кожної проблеми згодом буде доступна окрема сторінка
            з детальнішою інформацією.
          </p>
        </div>

        <div class="conditions-grid">

          <a href="/hernias.html" class="condition-card condition-card-link">
            <span class="condition-number">04</span>
            <h3>Міжхребцеві грижі</h3>
            <p>
                Робота з проявами міжхребцевих гриж, зокрема болем
                у спині, попереку та поширенням болю в руку або ногу.
                Можливість застосування мануальної терапії визначається
                індивідуально після оцінки стану пацієнта.
            </p>
            <span class="condition-card-more">Детальніше →</span>
         </a>


          <article class="condition-card">
            <span class="condition-number">02</span>
            <h3>Біль у шиї та головний біль</h3>
            <p>
              Обмеження рухливості шиї, напруження м'язів,
              дискомфорт у потилиці та головний біль.
            </p>
          </article>

          <article class="condition-card">
            <span class="condition-number">03</span>
            <h3>Біль з поширенням у руку чи ногу</h3>
            <p>
              Біль, поколювання або оніміння, що поширюються
              від хребта до кінцівок.
            </p>
          </article>

          <article class="condition-card">
            <span class="condition-number">04</span>
            <h3>Проблеми із суглобами</h3>
            <p>
              Дискомфорт у плечах, кульшових, колінних
              та інших суглобах, обмеження їхньої рухливості.
            </p>
          </article>

           <article class="condition-card">
            <span class="condition-number">05</span>
            <h3>Протрузії міжхребцевих дисків</h3>
            <p>
                Робота з больовими проявами, пов'язаними з протрузіями
                міжхребцевих дисків. Підхід до кожного випадку
                визначається індивідуально після оцінки стану пацієнта.
            </p>
          </article>

          <article class="condition-card">
            <span class="condition-number">06</span>
            <h3>Порушення постави</h3>
            <p>
              Сутулість, посилення грудного кіфозу,
              м'язовий дисбаланс та нерівномірне навантаження.
            </p>
          </article>

          <article class="condition-card">
            <span class="condition-number">07</span>
            <h3>Обмеження рухливості</h3>
            <p>
              Скутість у спині, шиї та кінцівках,
              зменшення амплітуди рухів і відчуття скутості.
            </p>
          </article>

        </div>

        <div class="conditions-note">
          <p>
            <strong>Важливо:</strong>
            наявність певного симптому або діагнозу не означає,
            що мануальна терапія буде доречною в кожному випадку.
            Можливість її застосування визначається індивідуально
            після оцінки стану та за потреби додаткового обстеження.
          </p>
        </div>

      </div>
    </section>

    <section class="conditions-cta">
      <div class="conditions-container">
        <h2>Не знаєте, з чого почати?</h2>
        <p>
          Зв'яжіться зі мною, щоб обговорити вашу ситуацію
          та уточнити можливість консультації.
        </p>

        <a class="conditions-phone" href="${siteData.contact.phoneLink}">
          ${siteData.contact.phone}
        </a>

        <a class="conditions-button" href="/booking.html">
          Контакти та запис
        </a>
      </div>
    </section>

  </main>

  ${footerHTML}
`

initMenu()
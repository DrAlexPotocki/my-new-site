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

// Формуємо сторінку про міжхребцеві грижі
document.querySelector('#app').innerHTML = `
  ${headerHTML}

  <main class="hernias-page">

    <section class="hernias-intro">
      <div class="hernias-container">
        <span class="hernias-eyebrow">З ЧИМ Я ПРАЦЮЮ</span>

        <h1>Міжхребцеві грижі</h1>

        <p>
          Біль у попереку, дискомфорт у спині або біль,
          що поширюється в ногу, можуть бути пов'язані
          зі змінами міжхребцевих дисків.
          Важливо розібратися в причині симптомів
          та підібрати безпечну тактику дій.
        </p>

        <a class="hernias-button" href="/booking.html">
          Записатися на консультацію
        </a>
      </div>
    </section>

    <section class="hernias-section">
      <div class="hernias-container">

        <div class="hernias-text">
          <span class="hernias-eyebrow">ПРО ДІАГНОЗ</span>
          <h2>Що таке міжхребцева грижа?</h2>

          <p>
            Міжхребцевий диск — це структура між сусідніми
            хребцями, яка допомагає розподіляти навантаження
            та забезпечує рухливість хребта.
          </p>

          <p>
            Міжхребцева грижа виникає тоді, коли частина
            внутрішнього вмісту диска виходить за його
            звичайні межі через пошкодження зовнішніх
            волокон диска.
          </p>

          <p>
            Важливо розуміти: сама наявність грижі на МРТ
            не завжди означає, що саме вона є причиною болю.
            Результати обстеження потрібно оцінювати разом
            із симптомами та даними клінічного огляду.
          </p>
        </div>

      </div>
    </section>

        <section class="hernias-section hernias-section-alt">
      <div class="hernias-container">
        <div class="hernias-text">
          <span class="hernias-eyebrow">КЛАСИФІКАЦІЯ</span>
          <h2>Види міжхребцевих гриж</h2>

          <p>
            Залежно від форми та особливостей зміщення
            дискового матеріалу виділяють три основні
            морфологічні варіанти: протрузію, екструзію
            та секвестрацію.
          </p>

          <h3>Протрузія</h3>
          <p>
            Локальне випинання міжхребцевого диска за його
            звичайні межі. При цьому основа випинання ширша
            за його зовнішню частину.
          </p>

          <h3>Екструзія</h3>
          <p>
            Форма грижі, за якої зміщена частина дискового
            матеріалу виступає за межі диска, а її зовнішня
            частина ширша за основу. Це може супроводжуватися
            порушенням цілісності фіброзного кільця.
          </p>

          <h3>Секвестрація</h3>
          <p>
            Стан, за якого фрагмент дискового матеріалу
            повністю відокремлюється від основної частини
            диска та може мігрувати вгору або вниз
            уздовж хребетного каналу.
          </p>

          <p>
            Ці терміни описують різні морфологічні варіанти
            гриж, але не обов'язково є послідовними стадіями
            розвитку одного процесу.
          </p>
        </div>
      </div>
    </section>
    
    <section class="hernias-section hernias-section-alt">
      <div class="hernias-container">

        <div class="hernias-text">
          <span class="hernias-eyebrow">МОЖЛИВІ ПРОЯВИ</span>
          <h2>Які симптоми можуть виникати?</h2>

          <p>
            Прояви залежать від розташування грижі,
            її розміру та того, чи впливає вона на нервові структури.
          </p>

          <div class="hernias-symptoms">

            <article class="hernias-symptom">
              <span>01</span>
              <div>
                <h3>Біль у попереку</h3>
                <p>
                  Дискомфорт або біль у нижній частині спини,
                  який може посилюватися під час певних рухів.
                </p>
              </div>
            </article>

            <article class="hernias-symptom">
              <span>02</span>
              <div>
                <h3>Біль у нозі</h3>
                <p>
                  Біль може поширюватися через сідницю
                  до стегна, гомілки або стопи.
                </p>
              </div>
            </article>

            <article class="hernias-symptom">
              <span>03</span>
              <div>
                <h3>Оніміння та поколювання</h3>
                <p>
                  Можливі зміни чутливості, поколювання
                  або відчуття оніміння в нозі чи стопі.
                </p>
              </div>
            </article>

            <article class="hernias-symptom">
              <span>04</span>
              <div>
                <h3>М'язова слабкість</h3>
                <p>
                  У деяких випадках може виникати слабкість
                  окремих м'язів ноги або стопи.
                </p>
              </div>
            </article>

          </div>
        </div>

      </div>
    </section>

    <section class="hernias-section">
      <div class="hernias-container">

        <div class="hernias-text">
          <span class="hernias-eyebrow">МОЖЛИВОСТІ ДОПОМОГИ</span>
          <h2>Чи допомагає мануальна терапія при грижі?</h2>

          <p>
            Мануальна терапія може розглядатися як частина
            комплексного консервативного підходу до роботи
            з болем у спині, якщо після оцінки стану пацієнта
            немає протипоказань.
          </p>

          <p>
            Мета роботи — не механічно «вправити» або
            «прибрати» грижу, а допомогти зменшити
            м'язове напруження, покращити рухливість
            та полегшити повсякденну активність.
          </p>

          <p>
            Методика та інтенсивність впливу підбираються
            індивідуально. За наявності неврологічних
            порушень або інших тривожних симптомів
            необхідна оцінка лікаря відповідного профілю.
          </p>
        </div>

      </div>
    </section>

    <section class="hernias-warning">
      <div class="hernias-container">
        <h2>Коли потрібна термінова медична допомога?</h2>

        <p>
          Якщо біль у спині супроводжується новими порушеннями
          сечовипускання або контролю кишківника, онімінням
          у ділянці промежини чи статевих органів, або
          вираженою чи прогресуючою слабкістю ніг —
          необхідно негайно звернутися по екстрену медичну допомогу.
        </p>
      </div>
    </section>

    <section class="hernias-section">
      <div class="hernias-container hernias-cta">
        <span class="hernias-eyebrow">ІНДИВІДУАЛЬНИЙ ПІДХІД</span>

        <h2>Кожен випадок потребує окремої оцінки</h2>

        <p>
          Якщо у вас діагностували міжхребцеву грижу
          або турбує біль у спині, можна звернутися
          для обговорення вашої ситуації та можливостей
          подальшої роботи.
        </p>

        <a class="hernias-phone" href="${siteData.contact.phoneLink}">
          ${siteData.contact.phone}
        </a>

        <a class="hernias-button" href="/booking.html">
          Контакти та запис
        </a>
      </div>
    </section>

  </main>

  ${footerHTML}
`

initMenu()
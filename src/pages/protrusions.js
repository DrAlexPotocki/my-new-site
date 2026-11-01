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

// Формуємо сторінку про протрузії
document.querySelector('#app').innerHTML = `
  ${headerHTML}

  <main class="protrusions-page">

    <section class="protrusions-intro">
      <div class="protrusions-container">
        <span class="protrusions-eyebrow">З ЧИМ Я ПРАЦЮЮ</span>

        <h1>Протрузії міжхребцевих дисків</h1>

        <p>
          Протрузія — одна з поширених змін міжхребцевих дисків,
          яку можна виявити під час МРТ. В одних випадках вона
          не викликає жодних симптомів, в інших може супроводжуватися
          болем та обмеженням рухливості.
        </p>

        <a class="protrusions-button" href="/booking.html">
          Записатися на консультацію
        </a>
      </div>
    </section>

    <section class="protrusions-section">
      <div class="protrusions-container">
        <div class="protrusions-text">
          <span class="protrusions-eyebrow">ПРО ДІАГНОЗ</span>

          <h2>Що таке протрузія?</h2>

          <p>
            Міжхребцеві диски розташовані між хребцями та виконують
            важливу функцію амортизації. Вони допомагають хребту
            витримувати навантаження та забезпечують його рухливість.
          </p>

          <p>
            Протрузія — це випинання міжхребцевого диска за межі
            його звичайного контуру без повного порушення цілісності
            зовнішнього фіброзного кільця.
          </p>

          <p>
            Протрузії можуть відрізнятися за розташуванням,
            розміром та впливом на навколишні нервові структури.
            Саме тому важливо оцінювати не лише знімок МРТ,
            а й скарги та результати клінічного огляду.
          </p>
        </div>
      </div>
    </section>

    <section class="protrusions-section protrusions-section-alt">
      <div class="protrusions-container">
        <div class="protrusions-text">
          <span class="protrusions-eyebrow">ПРОЯВИ</span>

          <h2>Які симптоми можуть виникати?</h2>

          <p>
            Багато протрузій не супроводжуються симптомами.
            Якщо ж зміни диска пов'язані з подразненням або
            стисненням нервових структур, можуть виникати:
          </p>

          <div class="protrusions-symptoms">

            <article class="protrusions-symptom">
              <span>01</span>
              <div>
                <h3>Біль у спині або попереку</h3>
                <p>
                  Дискомфорт у певній ділянці хребта,
                  який може посилюватися під час руху
                  або тривалого перебування в одному положенні.
                </p>
              </div>
            </article>

            <article class="protrusions-symptom">
              <span>02</span>
              <div>
                <h3>Поширення болю в кінцівки</h3>
                <p>
                  Біль може віддавати в сідницю, ногу
                  або руку залежно від локалізації змін.
                </p>
              </div>
            </article>

            <article class="protrusions-symptom">
              <span>03</span>
              <div>
                <h3>Поколювання та оніміння</h3>
                <p>
                  Можливі зміни чутливості в окремих ділянках
                  руки або ноги.
                </p>
              </div>
            </article>

            <article class="protrusions-symptom">
              <span>04</span>
              <div>
                <h3>Обмеження рухливості</h3>
                <p>
                  Скутість та дискомфорт під час нахилів,
                  поворотів або інших рухів.
                </p>
              </div>
            </article>

          </div>
        </div>
      </div>
    </section>

        <section class="protrusions-section">
      <div class="protrusions-container">
        <div class="protrusions-text">
          <span class="protrusions-eyebrow">КЛАСИФІКАЦІЯ</span>

          <h2>Протрузія — це різновид міжхребцевої грижі</h2>

          <p>
            Міжхребцеві грижі мають різні морфологічні форми.
            Залежно від характеру випинання та зміщення
            дискового матеріалу виділяють протрузію,
            екструзію та секвестрацію.
          </p>

          <div class="protrusions-comparison">
            <article>
              <h3>Протрузія</h3>
              <p>
                Випинання міжхребцевого диска за його звичайні
                межі. Основа випинання ширша за його зовнішню
                частину. Зовнішні волокна фіброзного кільця
                не мають повного розриву.
              </p>
            </article>

            <article>
              <h3>Екструзія</h3>
              <p>
                Більш виражене зміщення дискового матеріалу,
                коли його зовнішня частина ширша за основу
                або втрачає безперервний зв'язок із диском.
                Це може супроводжуватися порушенням цілісності
                фіброзного кільця.
              </p>
            </article>

            <article>
              <h3>Секвестрація</h3>
              <p>
                Частина дискового матеріалу повністю
                відокремлюється від основного диска.
                Такий фрагмент може мігрувати вгору або вниз
                уздовж хребетного каналу.
              </p>
            </article>
          </div>

          <p>
            Важливо: ці назви описують різні морфологічні
            варіанти гриж, але не обов'язково є послідовними
            стадіями розвитку одного процесу.
          </p>
        </div>
      </div>
    </section>

    <section class="protrusions-section protrusions-section-alt">
      <div class="protrusions-container">
                <div class="protrusions-text">
          <span class="protrusions-eyebrow">МОЖЛИВОСТІ ДОПОМОГИ</span>

          <h2>Мануальна терапія в роботі з міжхребцевими грижами</h2>

          <p>
            Мануальна терапія є важливим напрямом консервативної
            роботи з проблемами хребта. Вона може бути складовою
            комплексного підходу до лікування пацієнтів
            із міжхребцевими грижами, зокрема протрузіями,
            екструзіями та секвестраціями.
          </p>

          <p>
            Основна мета мануальної терапії — зменшення больових
            проявів, покращення рухливості хребта, зниження
            надмірного м'язового напруження та відновлення
            повсякденної функціональної активності.
          </p>

          <p>
            Під час роботи я враховую локалізацію грижі,
            характер симптомів, результати обстежень та
            індивідуальні особливості пацієнта. Методики
            та інтенсивність впливу підбираються індивідуально.
          </p>

          <p>
            Важливо розуміти, що мануальна терапія не означає
            механічного «вправлення» або видалення грижі.
            Доцільність її застосування визначається після
            оцінки стану пацієнта. За наявності виражених
            неврологічних порушень необхідна консультація
            відповідного лікаря.
          </p>
        </div>
      </div>
    </section>

    <section class="protrusions-warning">
      <div class="protrusions-container">
        <h2>Коли не можна відкладати звернення до лікаря?</h2>

        <p>
          Нові порушення сечовипускання або контролю кишківника,
          оніміння в ділянці промежини чи статевих органів,
          виражена або прогресуюча слабкість у кінцівках —
          привід негайно звернутися по екстрену медичну допомогу.
        </p>
      </div>
    </section>

    <section class="protrusions-section">
      <div class="protrusions-container protrusions-cta">
        <span class="protrusions-eyebrow">ІНДИВІДУАЛЬНИЙ ПІДХІД</span>

        <h2>Не відкладайте увагу до свого здоров'я</h2>

        <p>
          Якщо у вас виявили протрузії або турбує біль
          у спині, можна звернутися для обговорення вашої
          ситуації та можливих подальших дій.
        </p>

        <a class="protrusions-phone" href="${siteData.contact.phoneLink}">
          ${siteData.contact.phone}
        </a>

        <a class="protrusions-button" href="/booking.html">
          Контакти та запис
        </a>
      </div>
    </section>

  </main>

  ${footerHTML}
`

initMenu()
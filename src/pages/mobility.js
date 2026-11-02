import '../style.css'
import { siteData } from '../data/siteData.js'
import { initMenu } from '../scripts/menu.js'

const app = document.querySelector('#app')

async function loadPage() {
  const [header, footer] = await Promise.all([
    fetch('/src/components/Header.html').then((response) => response.text()),
    fetch('/src/components/Footer.html').then((response) => response.text()),
  ])

  app.innerHTML = `
    ${header}

    <main class="mobility-page">
      <section class="mobility-intro">
        <div class="mobility-container">
          <span class="mobility-eyebrow">НАПРЯМОК РОБОТИ</span>
          <h1>Обмеження рухливості</h1>
          <p>
            Скутість, відчуття напруження та труднощі під час звичних рухів
            можуть впливати на повсякденне життя. Важливо з'ясувати,
            що саме обмежує рухливість, і підібрати індивідуальний підхід.
          </p>
          <a href="/booking.html" class="mobility-button">
            Записатися на прийом
          </a>
        </div>
      </section>

      <section class="mobility-section">
        <div class="mobility-container">
          <div class="mobility-text">
            <span class="mobility-eyebrow">ПРО ПРОБЛЕМУ</span>
            <h2>Що означає обмеження рухливості?</h2>
            <p>
              Обмеження рухливості — це стан, коли певні рухи виконуються
              не в повному обсязі або потребують додаткових зусиль.
              Наприклад, людині може бути складно повернути голову,
              нахилитися, розігнути спину або вільно рухати плечима.
            </p>
            <p>
              Такі зміни можуть виникати поступово або з'являтися після
              травми, тривалого перебування в одному положенні чи періоду
              зниженої фізичної активності.
            </p>
            <p>
              Обмеження руху не завжди свідчить про серйозне захворювання.
              Для розуміння причини важливо враховувати супутні симптоми,
              історію їх появи та результати клінічного огляду.
            </p>
          </div>
        </div>
      </section>

      <section class="mobility-section mobility-section-alt">
        <div class="mobility-container">
          <div class="mobility-text">
            <span class="mobility-eyebrow">МОЖЛИВІ ПРИЧИНИ</span>
            <h2>Чому може зменшуватися рухливість?</h2>
            <p>
              На рухливість суглобів і хребта можуть впливати різні чинники.
              Серед них:
            </p>

            <div class="mobility-list">
              <article class="mobility-item">
                <span>01</span>
                <div>
                  <h3>М'язове напруження</h3>
                  <p>
                    Тривале або надмірне напруження м'язів може супроводжуватися
                    відчуттям скутості та дискомфорту під час руху.
                  </p>
                </div>
              </article>

              <article class="mobility-item">
                <span>02</span>
                <div>
                  <h3>Малорухливий спосіб життя</h3>
                  <p>
                    Недостатня кількість руху може знижувати звичну переносимість
                    навантаження та впливати на функціональну рухливість.
                  </p>
                </div>
              </article>

              <article class="mobility-item">
                <span>03</span>
                <div>
                  <h3>Наслідки травм</h3>
                  <p>
                    Після травм або тривалого періоду обмеження активності
                    рухливість може відновлюватися поступово.
                  </p>
                </div>
              </article>

              <article class="mobility-item">
                <span>04</span>
                <div>
                  <h3>Зміни в суглобах і хребті</h3>
                  <p>
                    Деякі захворювання опорно-рухового апарату можуть
                    супроводжуватися болем і зменшенням амплітуди рухів.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section class="mobility-section">
        <div class="mobility-container">
          <div class="mobility-text">
            <span class="mobility-eyebrow">ЯК ЦЕ ПРОЯВЛЯЄТЬСЯ</span>
            <h2>На що варто звернути увагу?</h2>
            <p>
              Обмеження рухливості може проявлятися по-різному залежно
              від ділянки тіла та причини проблеми.
            </p>

            <div class="mobility-list">
              <article class="mobility-item">
                <span>01</span>
                <div>
                  <h3>Скутість після сну або відпочинку</h3>
                  <p>
                    Потрібен певний час, щоб почати рухатися вільніше.
                  </p>
                </div>
              </article>

              <article class="mobility-item">
                <span>02</span>
                <div>
                  <h3>Зменшення амплітуди рухів</h3>
                  <p>
                    Складно повернути голову, нахилитися або розігнутися.
                  </p>
                </div>
              </article>

              <article class="mobility-item">
                <span>03</span>
                <div>
                  <h3>Дискомфорт під час руху</h3>
                  <p>
                    Певні рухи супроводжуються болем, натягом або напруженням.
                  </p>
                </div>
              </article>

              <article class="mobility-item">
                <span>04</span>
                <div>
                  <h3>Відчуття скутості в окремих ділянках</h3>
                  <p>
                    Може бути складно рухати шиєю, плечима, спиною або тазом.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section class="mobility-section mobility-section-alt">
        <div class="mobility-container">
          <div class="mobility-text">
            <span class="mobility-eyebrow">МОЖЛИВОСТІ ДОПОМОГИ</span>
            <h2>Яку роль може відігравати мануальна терапія?</h2>
            <p>
              Після оцінки стану пацієнта мануальна терапія може бути
              частиною комплексного підходу до роботи з болем і порушеннями
              рухливості.
            </p>
            <p>
              Під час прийому я оцінюю рухливість, м'язове напруження,
              особливості рухових звичок та інші чинники, які можуть
              бути пов'язані зі скаргами.
            </p>
            <p>
              Залежно від ситуації робота може бути спрямована на зменшення
              дискомфорту, покращення функціональної рухливості та підбір
              рекомендацій щодо фізичної активності й вправ.
            </p>
            <p>
              Методика та інтенсивність впливу підбираються індивідуально.
              Мануальна терапія не замінює медичну діагностику та не є
              універсальним способом лікування всіх причин обмеження рухів.
            </p>
          </div>
        </div>
      </section>

      <section class="mobility-section">
        <div class="mobility-container">
          <div class="mobility-text">
            <span class="mobility-eyebrow">ВАЖЛИВО</span>
            <h2>Коли не варто відкладати обстеження?</h2>
            <p>
              Якщо обмеження рухливості виникло після значної травми,
              супроводжується вираженим або наростаючим болем, слабкістю
              в кінцівках чи іншими незвичними симптомами, потрібна
              медична оцінка.
            </p>
            <p>
              Раптова слабкість у кінцівках, порушення контролю сечовипускання
              або дефекації, а також оніміння в ділянці промежини потребують
              невідкладної медичної допомоги.
            </p>
          </div>
        </div>
      </section>

      <section class="mobility-section mobility-section-alt">
        <div class="mobility-container">
          <div class="mobility-cta">
            <span class="mobility-eyebrow">ЗАПИС НА ПРИЙОМ</span>
            <h2>Поверніть рухам більше свободи</h2>
            <p>
              Якщо вас турбує скутість або обмеження рухливості,
              запишіться на консультацію. Разом визначимо можливі причини
              проблеми та обговоримо подальші кроки.
            </p>
            <a class="mobility-phone" href="${siteData.contact.phoneLink}">
              ${siteData.contact.phone}
            </a>
            <a href="/booking.html" class="mobility-button">
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
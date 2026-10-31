import './style.css'

async function loadComponent(path) {
  const response = await fetch(path)

  if (!response.ok) {
    throw new Error(`Не вдалося завантажити компонент: ${path}`)
  }

  return response.text()
}

const headerHTML = await loadComponent('/src/components/Header.html')
const footerHTML = await loadComponent('/src/components/Footer.html')

document.querySelector('#app').innerHTML = `
  ${headerHTML}
  

  <main id="home">
  <section class="hero">
    <div class="hero-container">

      <div class="hero-content">
        <div class="hero-eyebrow">
          МАНУАЛЬНА ТЕРАПІЯ • ІВАНО-ФРАНКІВСЬК
        </div>

        <h1 class="hero-title">
          Рух без страху.<br>
          Повернення до звичного<br>
          життя починається з уваги<br>
          до вашого тіла.
        </h1>

        <p class="hero-description">
          Індивідуальний підхід до болю та обмеження рухливості.<br>
          Пояснюю, що відбувається, і разом визначаємо наступні кроки.
        </p>

        <div class="hero-actions">
          <a href="#appointment" class="hero-button">
            Записатися на прийом
          </a>

          <a href="#process" class="hero-secondary-link">
            Як проходить прийом →
          </a>
        </div>
      </div>

      <div class="hero-visual">
        <svg
          class="hero-spine"
          viewBox="0 0 200 400"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M105 25 C65 85 135 115 100 175 S130 275 90 375"
            fill="none"
            stroke="#176B63"
            stroke-width="5"
            stroke-linecap="round"
            opacity=".55"
          />

          <g fill="#FFFFFF" stroke="#A9C4B7" stroke-width="2">
            <path d="M100 45 Q65 25 55 48 Q75 68 100 58 Q125 68 145 48 Q135 25 100 45Z"/>
            <path d="M100 90 Q65 70 55 93 Q75 113 100 103 Q125 113 145 93 Q135 70 100 90Z"/>
            <path d="M100 135 Q65 115 55 138 Q75 158 100 148 Q125 158 145 138 Q135 115 100 135Z"/>
            <path d="M100 180 Q65 160 55 183 Q75 203 100 193 Q125 203 145 183 Q135 160 100 180Z"/>
            <path d="M100 225 Q65 205 55 228 Q75 248 100 238 Q125 248 145 228 Q135 205 100 225Z"/>
            <path d="M100 270 Q65 250 55 273 Q75 293 100 283 Q125 293 145 273 Q135 250 100 270Z"/>
            <path d="M100 315 Q65 295 55 318 Q75 338 100 328 Q125 338 145 318 Q135 295 100 315Z"/>
          </g>
        </svg>

        <span class="hero-visual-caption">
          Візуальний образ / фото лікаря
        </span>
      </div>

    </div>

    <div class="hero-principles">
      <div class="principle-item">
        <span class="principle-title">ІНДИВІДУАЛЬНО</span>
        <span class="principle-description">
          План з урахуванням вашого стану
        </span>
      </div>

      <div class="principle-item">
        <span class="principle-title">ЗРОЗУМІЛО</span>
        <span class="principle-description">
          Пояснення без складних термінів
        </span>
      </div>

      <div class="principle-item">
        <span class="principle-title">ВІДПОВІДАЛЬНО</span>
        <span class="principle-description">
          Без обіцянок миттєвого результату
        </span>
      </div>
    </div>
  </section>
<section class="problems" id="services">
  <div class="problems-container">

    <div class="problems-heading">
      <div class="section-eyebrow">З ЧИМ ЗВЕРТАЮТЬСЯ</div>

      <h2 class="section-title">
        Коли рух обмежений —<br>
        важливо знайти причину.
      </h2>

      <p class="section-description">
        Симптоми можуть мати різне походження. Починаємо з оцінки ситуації,<br>
        а не з готової обіцянки лікування.
      </p>
    </div>

    <div class="problems-grid">

  <a href="/bil-u-spyni/" class="problem-card">
    <div>
      <h3>Біль у спині</h3>
      <p>Поперек, грудний та шийний відділи</p>
    </div>
    <span class="problem-arrow">↗</span>
  </a>

  <a href="/bil-u-shyi/" class="problem-card">
    <div>
      <h3>Біль у шиї</h3>
      <p>Скутість, дискомфорт, головний біль</p>
    </div>
    <span class="problem-arrow">↗</span>
  </a>

  <a href="/viddaye-v-ruku-chy-nohu/" class="problem-card">
    <div>
      <h3>Віддає в руку чи ногу</h3>
      <p>Оніміння, простріли, поколювання</p>
    </div>
    <span class="problem-arrow">↗</span>
  </a>

  <a href="/obmezhennya-ruhlyvosti/" class="problem-card">
    <div>
      <h3>Обмеження рухливості</h3>
      <p>Складно нахилятися, повертатися, ходити</p>
    </div>
    <span class="problem-arrow">↗</span>
  </a>
</div>
  </div>
</section>



<section class="about-preview" id="about">
  <div class="about-preview-container">

    <div class="about-preview-content">
      <div class="about-preview-eyebrow">ЗНАЙОМСТВО</div>

      <h2 class="about-preview-title">
        Лікар, який пояснює<br>
        і працює разом із вами.
      </h2>

      <p class="about-preview-description">
        Коротке представлення: освіта, досвід, підхід до роботи та принципи,
        якими керуюся під час консультації.
      </p>

      <a href="/pro-likarya/" class="about-preview-button">
        Більше про лікаря
      </a>
    </div>

      <a href="/pro-likarya/" class="about-preview-photo">
        <div class="about-preview-photo-label">
          <span>ФОТО ЛІКАРЯ</span>
          <span>портрет / робочий момент</span>
        </div>
      </a>

  </div>
</section>

<section class="methods-section" id="methods">
  <div class="methods-container">
    <p class="methods-eyebrow">ПІДХІД ДО РОБОТИ</p>

    <h2 class="methods-title">Методи — не меню процедур.</h2>

    <p class="methods-description">
      Метод обирається після оцінки стану та цілей людини.
    </p>

    <div class="methods-grid">
      <a href="/manualna-terapiya/" class="method-card">
        <span class="method-number">НАПРЯМ 01</span>
        <h3>Мануальна терапія</h3>
        <p>Робота з рухливістю та функцією</p>
        <span class="method-link">Дізнатися більше →</span>
      </a>

      <a href="/myakotkannynni-tehniky/" class="method-card">
        <span class="method-number">НАПРЯМ 02</span>
        <h3>М’якотканинні техніки</h3>
        <p>Робота з м’язами та напруженням</p>
        <span class="method-link">Дізнатися більше →</span>
      </a>

      <a href="/rekomendatsiyi-ta-vpravy/" class="method-card">
        <span class="method-number">НАПРЯМ 03</span>
        <h3>Рекомендації й вправи</h3>
        <p>Підтримка змін у повсякденні</p>
        <span class="method-link">Дізнатися більше →</span>
      </a>
    </div>
  </div>
</section>

<section class="process-section" id="how-it-works">
  <div class="process-container">
    <p class="process-eyebrow">ЯК ЦЕ ВІДБУВАЄТЬСЯ</p>

    <h2 class="process-title">
      <span class="process-title-desktop">
        Зрозумілий шлях від<br>
        першого звернення до плану дій.
      </span>
      <span class="process-title-mobile">Зрозумілий шлях</span>
    </h2>

    <div class="process-steps">
      <div class="process-step">
        <h3>01&nbsp; Знайомство</h3>
        <p>
          <span class="process-text-desktop">Обговорюємо скарги та історію.</span>
          <span class="process-text-mobile">Обговорюємо ваш запит.</span>
        </p>
      </div>

      <div class="process-step">
        <h3>02&nbsp; Оцінка</h3>
        <p>
          <span class="process-text-desktop">Перевіряємо рухи й важливі ознаки.</span>
          <span class="process-text-mobile">Перевіряємо важливі ознаки.</span>
        </p>
      </div>

      <div class="process-step">
        <h3>03&nbsp; План</h3>
        <p>
          <span class="process-text-desktop">Узгоджуємо доцільні наступні кроки.</span>
          <span class="process-text-mobile">Узгоджуємо наступні кроки.</span>
        </p>
      </div>
    </div>
  </div>
</section>

<section class="patient-info-section" id="for-patients">
  <div class="patient-info-container">
    <p class="patient-info-eyebrow">ДЛЯ ПАЦІЄНТІВ</p>

    <h2 class="patient-info-title">
      <span class="patient-info-title-desktop">
        Що варто знати перед прийомом
      </span>
      <span class="patient-info-title-mobile">Перед прийомом</span>
    </h2>

    <div class="patient-info-grid">
      <a href="/pershyi-vizyt/" class="patient-info-card">
        <span class="patient-info-text-desktop">
          Чого очікувати від першого візиту
        </span>
        <span class="patient-info-text-mobile">
          Чого очікувати від візиту
        </span>
        <span class="patient-info-arrow">↗</span>
      </a>

      <a href="/vidchuttya-pislya-protsedury/" class="patient-info-card">
        <span class="patient-info-text-desktop">
          Які відчуття можуть бути після процедури
        </span>
        <span class="patient-info-text-mobile">
          Відчуття після процедури
        </span>
        <span class="patient-info-arrow">↗</span>
      </a>

      <a href="/povtorna-konsultatsiya/" class="patient-info-card">
        <span class="patient-info-text-desktop">
          Коли потрібна повторна консультація
        </span>
        <span class="patient-info-text-mobile">
          Коли потрібна повторна консультація
        </span>
        <span class="patient-info-arrow">↗</span>
      </a>

      <a href="/kilkist-vizytiv/" class="patient-info-card">
        <span class="patient-info-text-desktop">
          Від чого залежить кількість візитів
        </span>
        <span class="patient-info-text-mobile">
          Кількість візитів
        </span>
        <span class="patient-info-arrow">↗</span>
      </a>
    </div>
  </div>
</section>

<section class="reviews-section" id="reviews">
  <div class="reviews-container">

    <p class="reviews-eyebrow">ВІДГУКИ</p>

    <h2 class="reviews-title">
      Досвід пацієнтів — важлива частина довіри.
    </h2>

    <p class="reviews-description">
      Короткі відгуки пацієнтів про досвід консультації та роботи.
    </p>

    <div class="reviews-grid">

      <div class="review-card">
        <p class="review-text">
          «Звернувся через біль у спині. Лікар уважно вислухав,
          пояснив можливі причини дискомфорту та розповів,
          як буде проходити робота.»
        </p>
        <span class="review-author">Пацієнт</span>
      </div>

      <div class="review-card">
        <p class="review-text">
          «Сподобався уважний підхід. Отримав відповіді на свої
          запитання та рекомендації щодо вправ і повсякденної
          активності.»
        </p>
        <span class="review-author">Пацієнтка</span>
      </div>

      <div class="review-card">
        <p class="review-text">
          «На консультації все було зрозуміло та без поспіху.
          Лікар пояснив, на що звернути увагу і які наступні
          кроки варто зробити.»
        </p>
        <span class="review-author">Пацієнт</span>
      </div>

    </div>

  </div>
</section>

<section class="materials-section" id="materials">
  <div class="materials-container">

    <p class="materials-eyebrow">КОРИСНІ МАТЕРІАЛИ</p>

    <h2 class="materials-title">
      Пояснюю складне просто.
    </h2>

    <div class="materials-grid">

      <a href="/yak-pidhotuvatysya-do-konsultatsiyi/" class="material-card">
        <div class="material-image"></div>
        <div class="material-content">
          <h3>Як підготуватися до консультації</h3>
          <span>Читати статтю →</span>
        </div>
      </a>

      <a href="/ruhlyvist-shyyi/" class="material-card">
        <div class="material-image"></div>
        <div class="material-content">
          <h3>Рухливість шиї: що варто знати</h3>
          <span>Читати статтю →</span>
        </div>
      </a>

      <a href="/bil-u-popereku/" class="material-card">
        <div class="material-image"></div>
        <div class="material-content">
          <h3>Біль у попереку: перші кроки</h3>
          <span>Читати статтю →</span>
        </div>
      </a>

    </div>

  </div>
</section>

<section class="contact-section" id="contacts">
  <div class="contact-container">

    <div class="contact-main">
      <p class="contact-eyebrow desktop-contact">
        ЗРОБІТЬ ПЕРШИЙ КРОК
      </p>

      <p class="contact-eyebrow mobile-contact">
        ПОТРІБНА КОНСУЛЬТАЦІЯ?
      </p>

      <h2 class="contact-title desktop-contact">
        Потрібна консультація?
      </h2>

      <h2 class="contact-title mobile-contact">
        Зв’яжіться зі мною
      </h2>

      <p class="contact-description">
        Зв’яжіться зі мною, щоб узгодити зручний час.
      </p>

      <a href="tel:+380666488763" class="contact-button">
        Записатися
      </a>
    </div>

    <div class="contact-details">
      <h3>Івано-Франківськ</h3>

      <p class="contact-address">
        вул. Незалежності, 38
      </p>

      <span class="contact-note">
        Вхід з двору • за попереднім записом
      </span>

      <a href="tel:+380666488763" class="contact-phone">
        066 64 88 763
      </a>

      <a
        href="https://t.me/DrPotocki"
        class="contact-telegram"
        target="_blank"
        rel="noopener noreferrer"
      >
        Написати нам у Telegram
      </a>

      <div class="contact-socials">
        <a href="https://www.facebook.com/dr.Alex.Potocki"
           target="_blank" rel="noopener noreferrer"
           aria-label="Facebook" title="Facebook">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.6-1.5h1.7V3.9c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3V10H7.3v3h2.8v8z"/>
          </svg>
        </a>

        <a href="https://www.instagram.com/dr.potocki/"
           target="_blank" rel="noopener noreferrer"
           aria-label="Instagram" title="Instagram">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <rect x="3" y="3" width="18" height="18" rx="5"/>
            <circle cx="12" cy="12" r="4"/>
            <circle cx="17.5" cy="6.8" r="1" class="social-dot"/>
          </svg>
        </a>

        <a href="https://www.tiktok.com/@dr.alex.potocki"
           target="_blank" rel="noopener noreferrer"
           aria-label="TikTok" title="TikTok">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M14 3v11.2a3.2 3.2 0 1 1-2.8-3.2V8.1a6.2 6.2 0 1 0 6 6.1V8.5a8.2 8.2 0 0 0 3.8 1V6.3A5.2 5.2 0 0 1 16 3z"/>
          </svg>
        </a>
      </div>
    </div>

    <div class="contact-extra">
      <button type="button" class="contact-video-button" id="open-video">
        <span class="video-play-icon">▶</span>
        Переглянути відеоінструкцію, як до нас дістатися
      </button>

      <div class="contact-map">
        <iframe
          src="https://www.google.com/maps?q=вул.%20Незалежності,%2038,%20Івано-Франківськ&output=embed"
          title="Карта проїзду до кабінету"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          allowfullscreen>
        </iframe>
      </div>
    </div>

  </div>
</section>

<!-- Вікно з відеоінструкцією -->
<div class="video-modal" id="video-modal" aria-hidden="true">
  <div class="video-modal-backdrop" id="close-video-backdrop"></div>

  <div class="video-modal-content" role="dialog"
       aria-modal="true" aria-label="Відеоінструкція">
    <button type="button" class="video-modal-close" id="close-video"
            aria-label="Закрити відео">
      &times;
    </button>

    <div class="video-frame">
      <iframe
        id="video-iframe"
        src=""
        title="Відеоінструкція, як дістатися до кабінету"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        allowfullscreen>
      </iframe>
    </div>
  </div>
</div>





</main>

${footerHTML}
`

const menuToggle = document.querySelector('.menu-toggle')
const navigation = document.querySelector('.main-navigation')

menuToggle.addEventListener('click', () => {
  const isOpen = menuToggle.getAttribute('aria-expanded') === 'true'

  menuToggle.setAttribute('aria-expanded', String(!isOpen))
  menuToggle.setAttribute(
    'aria-label',
    isOpen ? 'Відкрити меню' : 'Закрити меню'
  )

  navigation.classList.toggle('is-open', !isOpen)
})

navigation.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navigation.classList.remove('is-open')
    menuToggle.setAttribute('aria-expanded', 'false')
    menuToggle.setAttribute('aria-label', 'Відкрити меню')
  })
})

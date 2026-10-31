import '../style.css'
import { siteData } from '../data/siteData.js'
import { initMenu } from '../scripts/menu.js'
import { initVideoModal } from '../scripts/video.js'

// Загружаем общие компоненты сайта
async function loadComponent(path) {
  const response = await fetch(path)

  if (!response.ok) {
    throw new Error(`Не вдалося завантажити компонент: ${path}`)
  }

  return response.text()
}

const headerHTML = await loadComponent('/src/components/Header.html')
const footerHTML = await loadComponent('/src/components/Footer.html')

// Формируем страницу записи
document.querySelector('#app').innerHTML = `
  ${headerHTML}

  <main class="booking-page">

    <section class="booking-intro">
      <div class="booking-container">
        <span class="booking-eyebrow">КОНТАКТИ ТА ЗАПИС</span>

        <h1>Запис на прийом</h1>

        <p>
          Якщо вас турбує біль у спині, шиї або суглобах,
          зв'яжіться зі мною для уточнення деталей та запису на консультацію.
        </p>
      </div>
    </section>

    <section class="booking-content">
      <div class="booking-container">

        <div class="booking-grid">

          <div class="booking-info">

            <div class="booking-card">
              <h2>Контактна інформація</h2>

              <a
                class="booking-detail booking-detail-link"
                href="https://www.google.com/maps/search/?api=1&query=вул.+Незалежності,+38,+Івано-Франківськ"
                target="_blank"
                rel="noopener noreferrer"
                >
                <span class="booking-icon">⌖</span>
                <div>
                    <h3>Адреса кабінету</h3>
                    <p>
                    ${siteData.contact.address}<br>
                    ${siteData.contact.addressNote}
                    </p>
                </div>
             </a>

              <a
                class="booking-detail booking-detail-link"
                href="${siteData.contact.phoneLink}"
                >
                <span class="booking-icon">☎</span>
                <div>
                    <h3>Телефон</h3>
                    <p>${siteData.contact.phone}</p>
                </div>
            </a>

              <div class="booking-detail">
                <span class="booking-icon">◷</span>
                <div>
                  <h3>Графік роботи</h3>
                  <p>
                    ${siteData.contact.workingDays}: ${siteData.contact.workingHours}
                    </p>
                    <p>${siteData.contact.weekends}</p>
                </div>
              </div>
            </div>

            <div class="booking-card booking-social">
              <h2>Зв'яжіться зі мною</h2>

              <p>
                Оберіть зручний для вас спосіб зв'язку.
              </p>

              <div class="booking-social-links">
                <a href="${siteData.contact.telegram}" target="_blank" rel="noopener noreferrer">
                    Telegram
                </a>

                <a href="${siteData.contact.instagram}" target="_blank" rel="noopener noreferrer">
                    Instagram
                </a>

                <a href="${siteData.contact.tiktok}" target="_blank" rel="noopener noreferrer">
                    TikTok
                </a>
              </div>
            </div>

          </div>

          <div class="booking-map-card">
                <button
                    type="button"
                    class="booking-video-button"
                    id="open-video"
                >
                    <span class="booking-video-icon">▶</span>
                    <span>
                    <strong>Відеоінструкція</strong>
                    <small>Як дістатися до кабінету</small>
                    </span>
                </button>

             <h2>Як мене знайти</h2>

            <p>
              Кабінет знаходиться на вулиці Незалежності, 38.
              Вхід — від гот. "Надія", крізь арку, у двір та на ліво.
            </p>

            <div class="booking-map">
              <iframe
                src="${siteData.contact.mapEmbed}"
                title="Карта розташування кабінету"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                allowfullscreen>
              </iframe>
            </div>

            <a
              class="booking-map-link"
              href="${siteData.contact.mapLink}"
              target="_blank"
              rel="noopener noreferrer">
              Відкрити маршрут у Google Maps →
            </a>
          </div>

        </div>

      </div>
    </section>

  </main>

  ${footerHTML}

<!-- Відеоінструкція -->
<div class="video-modal" id="video-modal" aria-hidden="true">
  <div class="video-modal-backdrop" id="close-video-backdrop"></div>

  <div
    class="video-modal-content"
    role="dialog"
    aria-modal="true"
    aria-label="Відеоінструкція"
  >
    <button
      type="button"
      class="video-modal-close"
      id="close-video"
      aria-label="Закрити відео"
    >
      &times;
    </button>

    <div class="video-frame">
      <video
        id="location-video"
        controls
        playsinline
        preload="metadata"
        aria-label="Відеоінструкція, як дістатися до кабінету"
      >
        <source src="/video/location.mp4" type="video/mp4">
        Ваш браузер не підтримує відтворення відео.
      </video>
    </div>
  </div>
</div>
`

initMenu()

initVideoModal()


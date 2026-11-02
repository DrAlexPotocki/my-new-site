import { siteData } from '../data/siteData.js'

export async function loadArticleCTA() {
  const container = document.querySelector('#article-cta')

  if (!container) return

  try {
    const response = await fetch('/src/components/ArticleCTA.html')

    if (!response.ok) {
      throw new Error('Не вдалося завантажити блок контактів')
    }

    let html = await response.text()

    html = html
      .replaceAll('{{PHONE}}', siteData.contact.phone)
      .replaceAll('{{PHONE_LINK}}', siteData.contact.phoneLink)

    container.innerHTML = html
  } catch (error) {
    console.error('Помилка завантаження контактного блоку:', error)
  }
}
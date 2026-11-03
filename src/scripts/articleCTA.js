import { siteData } from '../data/siteData.js'
import { articlesData } from '../data/articlesData.js'

export async function loadArticleCTA() {
  const container = document.querySelector('#article-cta')

  if (container) {
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

  loadRelatedArticles()
}

function loadRelatedArticles() {
  const articleContent = document.querySelector('.article-content')

  if (!articleContent) return

  // Не додаємо блок повторно, якщо функцію викликали ще раз
  if (articleContent.querySelector('.article-related')) return

  const currentArticle = articlesData.find(
    (article) => article.url === window.location.pathname
  )

  if (!currentArticle || !currentArticle.relatedArticles?.length) return

  const relatedArticles = currentArticle.relatedArticles
    .map((id) => articlesData.find((article) => article.id === id))
    .filter(Boolean)

  if (!relatedArticles.length) return

  const section = document.createElement('section')
  section.className = 'article-related'

  section.innerHTML = `
    <h2>Читайте також</h2>

    <div class="article-related-list">
      ${relatedArticles
        .map(
          (article) => `
            <a class="article-related-card" href="${article.url}">
              <span class="article-related-category">
                ${article.category || "Здоров'я хребта"}
              </span>

              <span class="article-related-title">
                ${article.title}
              </span>

              <span class="article-related-description">
                ${article.description}
              </span>

              <span class="article-related-link">
                Читати статтю →
              </span>
            </a>
          `
        )
        .join('')}
    </div>
  `

  articleContent.appendChild(section)
}
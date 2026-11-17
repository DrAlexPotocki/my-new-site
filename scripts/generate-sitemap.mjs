import { readdir, writeFile } from 'node:fs/promises'
import path from 'node:path'

const SITE_URL = 'https://potocki.if.ua'
const DIST_DIR = path.resolve('dist')

// Страницы, которые не должны попадать в карту сайта
const EXCLUDED_PAGES = new Set([
  '404.html',
])

async function generateSitemap() {
  const files = await readdir(DIST_DIR, { withFileTypes: true })

  const pages = files
    .filter((file) => {
      return (
        file.isFile() &&
        file.name.endsWith('.html') &&
        !EXCLUDED_PAGES.has(file.name)
      )
    })
    .map((file) => file.name)
    .sort((a, b) => {
      if (a === 'index.html') return -1
      if (b === 'index.html') return 1
      return a.localeCompare(b)
    })

  const urls = pages.map((page) => {
    const address =
      page === 'index.html'
        ? `${SITE_URL}/`
        : `${SITE_URL}/${encodeURIComponent(page)}`

    return `  <url>\n    <loc>${address}</loc>\n  </url>`
  })

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>
`

  await writeFile(
    path.join(DIST_DIR, 'sitemap.xml'),
    sitemap,
    'utf8'
  )

  console.log(`Карта сайта создана: ${pages.length} страниц`)
}

generateSitemap().catch((error) => {
  console.error('Ошибка создания sitemap.xml:', error)
  process.exit(1)
})
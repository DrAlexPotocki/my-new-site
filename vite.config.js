import { defineConfig } from 'vite'
import { resolve, dirname } from 'node:path'
import { readdirSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import copyFetchComponents from './vite-plugin-copy-fetch-components.js'

const rootDir = dirname(fileURLToPath(import.meta.url))

// Автоматически находим все HTML-файлы в корне проекта
const htmlFiles = readdirSync(rootDir).filter((file) =>
  file.endsWith('.html')
)

// Формируем список страниц для production-сборки
const input = Object.fromEntries(
  htmlFiles.map((file) => [
    file.replace(/\.html$/, ''),
    resolve(rootDir, file),
  ])
)

export default defineConfig({
  plugins: [
    copyFetchComponents(),
  ],

  build: {
    rollupOptions: {
      input,
    },
  },
})
import { readFile, mkdir, writeFile, readdir } from 'node:fs/promises'
import { resolve, relative, dirname, extname } from 'node:path'

export default function copyFetchComponents() {
  let root
  let outDir

  return {
    name: 'vite-plugin-copy-fetch-components',

    configResolved(config) {
      root = config.root
      outDir = config.build.outDir
        ? resolve(root, config.build.outDir)
        : resolve(root, 'dist')
    },

    async writeBundle() {
      const sourceDir = resolve(root, 'src/components')
      const filesToCopy = []

      async function scan(directory) {
        const entries = await readdir(directory, {
          withFileTypes: true,
        })

        for (const entry of entries) {
          const fullPath = resolve(directory, entry.name)

          if (entry.isDirectory()) {
            await scan(fullPath)
          } else if (extname(entry.name) === '.html') {
            filesToCopy.push(fullPath)
          }
        }
      }

      await scan(sourceDir)

      for (const source of filesToCopy) {
        const relativePath = relative(sourceDir, source)
        const destination = resolve(
          outDir,
          'src/components',
          relativePath
        )

        const content = await readFile(source, 'utf8')

        await mkdir(dirname(destination), {
          recursive: true,
        })

        await writeFile(destination, content, 'utf8')

        console.log(
          `[fetch-components] Copied: ${relativePath}`
        )
      }
    },
  }
}
/**
 * Conversion WebP — Cadeaux Douceurs
 * ─────────────────────────────────────────────────────────────────────────────
 * Convertit toutes les images JPG/PNG des dossiers photo en WebP.
 * Les originaux sont conservés. Le composant OptimizedImage charge le WebP
 * automatiquement via <picture> avec fallback JPG.
 *
 * Prérequis : npm install -D sharp  (déjà fait)
 * Lancement : npm run webp
 */

import { readdir, access } from 'node:fs/promises'
import { join, extname, basename } from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const __dirname  = fileURLToPath(new URL('.', import.meta.url))
const PUBLIC_DIR = join(__dirname, '..', 'public')
const QUALITY    = 82   // bon compromis qualité/poids (SSIM ≈ 0.98)
const MAX_WIDTH  = 1400 // redimensionne uniquement si plus large

// Dossiers à convertir
const FOLDERS = [
  join(PUBLIC_DIR, 'photo', 'broderie'),
  join(PUBLIC_DIR, 'photo', 'sublimation'),
]

async function convertFolder(dir) {
  let files
  try {
    files = await readdir(dir)
  } catch {
    console.warn(`  ⚠  Dossier ignoré (introuvable) : ${dir}`)
    return { converted: 0, skipped: 0 }
  }

  const images = files.filter((f) => /\.(jpg|jpeg|png)$/i.test(f))
  let converted = 0
  let skipped   = 0

  for (const filename of images) {
    const srcPath  = join(dir, filename)
    const destName = basename(filename, extname(filename)) + '.webp'
    const destPath = join(dir, destName)

    // Sauter si le WebP existe déjà
    try {
      await access(destPath)
      process.stdout.write(`  ⏭  ${destName} (déjà converti)\n`)
      skipped++
      continue
    } catch { /* pas encore converti */ }

    try {
      await sharp(srcPath)
        .resize({ width: MAX_WIDTH, withoutEnlargement: true })
        .webp({ quality: QUALITY, effort: 5 })
        .toFile(destPath)

      process.stdout.write(`  ✅ ${filename} → ${destName}\n`)
      converted++
    } catch (err) {
      process.stdout.write(`  ❌ ${filename} : ${err.message}\n`)
    }
  }

  return { converted, skipped }
}

async function main() {
  let totalConverted = 0
  let totalSkipped   = 0

  for (const folder of FOLDERS) {
    const label = folder.split(/[/\\]/).slice(-2).join('/')
    console.log(`\n📁 ${label}`)
    const { converted, skipped } = await convertFolder(folder)
    totalConverted += converted
    totalSkipped   += skipped
  }

  console.log(`\n✨ Terminé — ${totalConverted} converti(s), ${totalSkipped} ignoré(s).`)
  console.log('Le composant OptimizedImage charge les WebP via <picture> automatiquement.')
}

main()

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const projectRoot = path.resolve(__dirname, '..')
const adminDistDir = path.join(projectRoot, 'brandmindz_admin', 'dist')
const targetPublicAdminDir = path.join(projectRoot, 'public', 'admin')

function copyRecursiveSync(src, dest) {
  const exists = fs.existsSync(src)
  const stats = exists && fs.statSync(src)
  const isDirectory = exists && stats.isDirectory()

  if (isDirectory) {
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest, { recursive: true })
    }
    fs.readdirSync(src).forEach((childItemName) => {
      copyRecursiveSync(
        path.join(src, childItemName),
        path.join(dest, childItemName)
      )
    })
  } else {
    fs.copyFileSync(src, dest)
  }
}

console.log('[copy-admin-dist] Copying built admin dist to public/admin...')

if (!fs.existsSync(adminDistDir)) {
  console.error('[copy-admin-dist] Error: brandmindz_admin/dist directory does not exist. Please run npm --prefix brandmindz_admin run build first.')
  process.exit(1)
}

// Clean and recreate target public/admin directory
if (fs.existsSync(targetPublicAdminDir)) {
  fs.rmSync(targetPublicAdminDir, { recursive: true, force: true })
}
fs.mkdirSync(targetPublicAdminDir, { recursive: true })

copyRecursiveSync(adminDistDir, targetPublicAdminDir)
console.log('[copy-admin-dist] Successfully copied brandmindz_admin/dist to public/admin.')

import { spawn } from 'node:child_process'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const candidates = [
  path.resolve(__dirname, '../brandmindz_admin/brandmindz_admin_API'),
  path.resolve(__dirname, '../../brandmindz_admin_API'),
  path.resolve(__dirname, '../brandmindz_admin_API'),
]

let apiDir = candidates.find((dir) => fs.existsSync(path.join(dir, 'App.js')) || fs.existsSync(path.join(dir, 'package.json')))

if (!apiDir) {
  console.error('[run-api] Error: brandmindz_admin_API directory not found.')
  process.exit(1)
}

console.log(`[run-api] Starting API from ${apiDir}...`)

const npmCli = process.env.npm_execpath || path.join(
  path.dirname(process.execPath),
  'node_modules',
  'npm',
  'bin',
  'npm-cli.js'
)

const child = spawn(process.execPath, [npmCli, 'start'], {
  cwd: apiDir,
  stdio: 'inherit',
  shell: false,
})

child.on('exit', (code) => {
  process.exit(code || 0)
})

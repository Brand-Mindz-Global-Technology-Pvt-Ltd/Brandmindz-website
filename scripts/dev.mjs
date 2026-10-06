import { spawn } from 'node:child_process'
import path from 'node:path'

const npmCli = process.env.npm_execpath || path.join(
  path.dirname(process.execPath),
  'node_modules',
  'npm',
  'bin',
  'npm-cli.js',
)

const runNpm = (script) => spawn(
  process.execPath,
  [npmCli, 'run', script],
  { stdio: 'inherit', shell: false },
)

const processes = [
  runNpm('dev:site'),
  runNpm('dev:api'),
]

let shuttingDown = false
const shutdown = (code = 0) => {
  if (shuttingDown) return
  shuttingDown = true
  for (const child of processes) {
    if (!child.killed) child.kill()
  }
  process.exit(code)
}

for (const child of processes) {
  child.on('exit', (code) => {
    if (!shuttingDown && code !== 0) shutdown(code || 1)
  })
}

process.on('SIGINT', () => shutdown(0))
process.on('SIGTERM', () => shutdown(0))

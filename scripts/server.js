import { build } from './build.js'
import { writeFileSync } from 'fs'

build({
  platform: 'node',
  target: ['node16'],
  format: 'cjs',
  entryPoints: ['game/server/index.ts'],
  outfile: 'dist/server.js',
  external: [],
})

// Used to prevent yarn from running the script
writeFileSync(
  '.yarn.installed',
  new Date().toLocaleString('en-AU', { timeZone: 'UTC', timeStyle: 'long', dateStyle: 'full' })
)

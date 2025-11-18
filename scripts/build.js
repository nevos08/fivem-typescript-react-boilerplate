//@ts-check

import { createBuilder, createFxmanifest, getFiles } from '@communityox/fx-utils';
import { exec, exists } from './utils.js';

const watch = process.argv.includes('--watch');
const web = await exists('./web');
const dropLabels = ['$BROWSER'];

if (!watch) {
  dropLabels.push('$DEV');
}

createBuilder(
  watch,
  {
    keepNames: true,
    legalComments: 'inline',
    bundle: true,
    treeShaking: true,
  },
  [
    {
      name: 'server',
      options: {
        platform: 'node',
        target: 'node22',
        format: 'cjs',
        dropLabels: [...dropLabels, '$CLIENT'],
      },
    },
    {
      name: 'client',
      options: {
        platform: 'browser',
        target: ['es2021'],
        format: 'iife',
        dropLabels: [...dropLabels, '$SERVER'],
      },
    },
  ],
  async (outfiles) => {
    const files = await getFiles('web/dist', 'static');
    await createFxmanifest({
      client_scripts: [outfiles.client],
      server_scripts: [outfiles.server],
      files: [...files],
      dependencies: ['/server:13068', '/onesync'],
      metadata: {
        lua54: 'yes',
        node_version: '22',
        ui_page: web && watch ? 'http://localhost:5173' : 'web/dist/index.html',
      },
    });

    if (web && !watch) await exec('cd ./web && pnpm build');
  }
);

if (web && watch) {
  await exec('cd ./web && pnpm dev');
}

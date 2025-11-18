import { spawn } from 'node:child_process';
import { stat } from 'node:fs/promises';

/**
 * Check if a filepath is valid.
 * @param path {string}
 */
export async function exists(path) {
  try {
    await stat(path);
    return true;
  } catch (err) {}

  return false;
}

/**
 * Spawn a child process and executes the command asynchronously.
 * @param command {string}
 */
export function exec(command) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, { stdio: 'inherit', shell: true });

    child.on('exit', (code, signal) => {
      if (code === 0) {
        resolve({ code, signal });
      } else {
        reject(new Error(`Command '${command}' exited with code ${code} and signal ${signal}`));
      }
    });
  });
}

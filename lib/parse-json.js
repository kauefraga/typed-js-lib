import { readFile } from 'fs/promises';

/**
 * @param {string} file
*/
export function parseJson(file) {
  const json = readFile(file, { encoding: 'utf-8' })
    .then((raw) => JSON.parse(raw));

  return json;
}

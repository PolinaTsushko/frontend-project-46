import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
// import {expect, jest, test} from '@jest/globals';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const getPathFromFixtures = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

const filepathJson1 = getPathFromFixtures('file1.json');
const filepathJson2 = getPathFromFixtures('file2.json');

const filepathYml1 = getPathFromFixtures('file1.yml');
const filepathYml2 = getPathFromFixtures('file2.yml');

const flat = `{
  - follow: false
    host: hexlet.io
  - proxy: 123.234.53.22
  - timeout: 50
  + timeout: 20
  + verbose: true
}`;

test('genDiff', () => {
  expect(genDiff(filepathJson1, filepathJson2)).toEqual(flat);
  expect(genDiff(filepathYml1, filepathYml2)).toEqual(flat);
});

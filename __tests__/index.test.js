import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import genDiff from '../src/index.js';


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const getPathFromFixtures = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

const filepath1 = getPathFromFixtures('file1.json');
const filepath2 = getPathFromFixtures('file2.json');


const flat = `{
 - follow: false
   host: hexlet.io
 - proxy: 123.234.53.22
 - timeout: 50
 + timeout: 20
 + verbose: true
}`;


test('genDiff', () => {
  expect(genDiff(filepath1, filepath2)).toEqual(flat);
  // expect(genDiff('file1.json', 'file2.json')).toEqual(flat);
  // expect(genDiff('../__fixtures__/file1.yml', '../__fixtures__/file2.yml')).toEqual(flat);
});

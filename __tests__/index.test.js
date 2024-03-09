import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import { readFileSync } from 'fs';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const getPathFromFixtures = (filePath) => path.join(__dirname, '..', '__fixtures__', filePath);
const readFixture = (filePath) => readFileSync(getPathFromFixtures(filePath), 'utf8');

const flatJson = readFixture('flatjson.txt');
const flatYml = readFixture('flatyml.txt');

const filepathJson1 = getPathFromFixtures('file1.json');
const filepathJson2 = getPathFromFixtures('file2.json');

const filepathYml1 = getPathFromFixtures('file1.yml');
const filepathYml2 = getPathFromFixtures('file2.yml');

test('genDiff', () => {
  expect(genDiff(filepathJson1, filepathJson2)).toEqual(flatJson);
  expect(genDiff(filepathYml1, filepathYml2)).toEqual(flatYml);
});
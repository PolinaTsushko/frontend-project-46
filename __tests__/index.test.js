import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import { readFileSync } from 'fs';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const getPathFromFixtures = (filePath) => path.join(__dirname, '..', '__fixtures__', filePath);
const readFixture = (filePath) => readFileSync(getPathFromFixtures(filePath), 'utf8');

test('genDiff json stylish', () => {
  const filepath1 = getPathFromFixtures('file1.json');
  const filepath2 = getPathFromFixtures('file2.json');
  const result = readFixture('stylish.txt');
  expect(genDiff(filepath1, filepath2, 'stylish')).toEqual(result);
});

test('genDiff json plain', () => {
  const filepath1 = getPathFromFixtures('file1.json');
  const filepath2 = getPathFromFixtures('file2.json');
  const result = readFixture('plain.txt');
  expect(genDiff(filepath1, filepath2, 'plain')).toEqual(result);
});

test('genDiff yml stylish', () => {
  const filepath1 = getPathFromFixtures('file1.yml');
  const filepath2 = getPathFromFixtures('file2.yml');
  const result = readFixture('stylish.txt');
  expect(genDiff(filepath1, filepath2, 'stylish')).toEqual(result);
});

test('genDiff yml plain', () => {
  const filepath1 = getPathFromFixtures('file1.yml');
  const filepath2 = getPathFromFixtures('file2.yml');
  const result = readFixture('plain.txt');
  expect(genDiff(filepath1, filepath2, 'plain')).toEqual(result);
});

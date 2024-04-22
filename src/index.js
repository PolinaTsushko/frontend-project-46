import * as path from 'node:path';
import { readFileSync } from 'fs';
import findDiff from './findDiff.js';
import parsers from './parsers.js';
import formatter from './formatters/index.js';

const buildPass = (filepath) => path.resolve(process.cwd(), filepath);
const getType = (fileName) => path.extname(fileName).slice(1);
const getFile = (fileName) => parsers(readFileSync(buildPass(fileName), 'utf8'), getType(fileName));

const genDiff = (filepath1, filepath2, formatName = 'stylish') => {
  const object1 = getFile(filepath1);
  const object2 = getFile(filepath2);
  return formatter(findDiff(object1, object2), formatName);
};

export default genDiff;

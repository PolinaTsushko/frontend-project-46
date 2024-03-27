import * as path from 'node:path';
import findDiff from '../src/findDiff.js';
import parsers from '../src/parsers.js';
import formatter from '../src/formatters/index.js';

const getPath = (filepath) => parsers(path.resolve(process.cwd(), filepath));

const genDiff = (filepath1, filepath2, formatName = 'stylish') => {
  const object1 = getPath(filepath1);
  const object2 = getPath(filepath2);

  return formatter(findDiff(object1, object2), formatName);
};

export default genDiff;

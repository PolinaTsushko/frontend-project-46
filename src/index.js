import * as path from 'node:path';
import stringify from './stylish.js';
import findDiff from './findDiff.js';
import parsers from './parsers.js';

const getPath = (filepath) => parsers(path.resolve(process.cwd(), filepath));

const genDiff = (filepath1, filepath2) => {
  const object1 = getPath(filepath1);
  const object2 = getPath(filepath2);

  return stringify(findDiff(object1, object2));
};

export default genDiff;

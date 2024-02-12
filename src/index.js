import * as fs from 'node:fs';
import * as path from 'node:path';

const parseJsone = (argument) => {
  const result = JSON.parse(fs.readFileSync(path.resolve(argument), 'utf8'));

  return result;
};

export default parseJsone;

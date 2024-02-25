import * as fs from 'node:fs';
import * as path from 'node:path';
import _ from 'lodash';

const parseJsone = (argument) => {
  const result = JSON.parse(fs.readFileSync(path.resolve(argument), 'utf8'));

  return result;
};

const genDiff = (filepath1, filepath2) => {

  const object1 = parseJsone(filepath1);
  const object2 = parseJsone(filepath2);

  const firstArgumentKeys = Object.keys(object1);
  const secondArgumentKeys = Object.keys(object2);
  const unionKeys = _.union(firstArgumentKeys, secondArgumentKeys);

  const added = unionKeys
    .filter((key) => !Object.hasOwn(object1, key))
    .map((key) => [key, { sign: '+', value: object2[key] }]);

  const deleted = unionKeys
    .filter((key) => !Object.hasOwn(object2, key))
    .map((key) => [key, { sign: '-', value: object1[key] }]);

  const unchanged = unionKeys
    .filter((key) => Object.hasOwn(object2, key) && object1[key] === object2[key])
    .map((key) => [key, { sign: ' ', value: object1[key] }]);

  const changed = firstArgumentKeys
    .filter((key) => Object.hasOwn(object2, key) && object1[key] !== object2[key])
    .map((key) => [key, { sign1: '-', value1: object1[key], sign2: '+', value2: object2[key]}]);

  const entries = [...added, ...deleted, ...changed, ...unchanged];
  const sortedByEntries = _.sortBy((entries));
  const result = Object.fromEntries(sortedByEntries);

  return result;
};

export default genDiff;
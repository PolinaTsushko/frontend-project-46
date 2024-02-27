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
    .map((key) => [key, { sign: 'added', value: object2[key] }]);

  const deleted = unionKeys
    .filter((key) => !Object.hasOwn(object2, key))
    .map((key) => [key, { sign: 'deleted', value: object1[key] }]);

  const unchanged = unionKeys
    .filter((key) => Object.hasOwn(object2, key) && object1[key] === object2[key])
    .map((key) => [key, { sign: 'unchanged', value: object1[key] }]);

  const changed = firstArgumentKeys
    .filter((key) => Object.hasOwn(object2, key) && object1[key] !== object2[key])
    .map((key) => [key, { sign: 'changed', value1: object1[key], value2: object2[key] }]);

  const entries = [...added, ...deleted, ...changed, ...unchanged];
  const sortedByEntries = _.sortBy((entries));
  const result = Object.fromEntries(sortedByEntries);

  const stringify = (value, replacer = ' ', spacesCount = 1) => {
    const iter = (currentValue, depth) => {
      if (!_.isObject(currentValue)) {
        return `${currentValue}`;
      }
      const indentSize = depth * spacesCount;
      const currentIndent = replacer.repeat(indentSize);
      const bracketIndent = replacer.repeat(indentSize - spacesCount);
      const lines = Object
        .entries(currentValue)
        .map(([key, val]) => {
          switch (val.sign) {
            case 'added':
              return `${currentIndent}+ ${key}: ${iter(val.value, depth + 1)}`;
            case 'deleted':
              return `${currentIndent}- ${key}: ${iter(val.value, depth + 1)}`;
            case 'unchanged':
              return `${currentIndent}  ${key}: ${iter(val.value, depth + 1)}`;
            case 'changed':
              return `${currentIndent}- ${key}: ${iter(val.value1, depth + 1)}\n${currentIndent}+ ${key}: ${iter(val.value2, depth + 1)}`;
            default:
              throw new Error(`Unexpected ${val.sign}`);
          }
        });
      return [
        '{',
        ...lines,
        `${bracketIndent}}`,
      ].join('\n');
    };
    return iter(value, 1);
  };

  return stringify(result);
};

export default genDiff;

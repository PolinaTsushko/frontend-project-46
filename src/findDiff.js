import _ from 'lodash';

const findDiff = (object1, object2) => {
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

  const hasChildren = unionKeys
    .filter((key) => _.isObject(object1[key]) && _.isObject(object2[key]))
    .map((key) => [key, { sign: 'hasChildren', value: findDiff(object1[key], object2[key]) }]);

  const entries = [...added, ...deleted, ...unchanged, ...changed, ...hasChildren];
  const sortedByEntries = _.sortBy(entries);
  const result = Object.fromEntries(sortedByEntries);

  return result;
};

export default findDiff;

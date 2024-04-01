import _ from 'lodash';

const stringify = (value) => {
  if (_.isPlainObject(value)) {
    return '[complex value]'
  }
  if (typeof value === 'string') {
    return `'${value}'`
  }
  return `${value}`;
};

const plain = (plainValue) => {
  const iter = (currentValue, depth = '') => {
    const lines = Object
      .entries(currentValue)
      .map(([key, val]) => {
        const plainKey = _.trimStart(`${depth}.${key}`, '.');
        switch (val.sign) {
          case 'added':
            return `Property '${plainKey}' was added with value: ${stringify(val.value)}`;
          case 'deleted':
            return `Property '${plainKey}' was removed`;
          case 'changed':
            return `Property '${plainKey}' was updated. From ${stringify(val.value1)} to ${stringify(val.value2)}`;
          case 'hasChildren':
            return `${iter(val.value, plainKey)}`;
          default:
            return [];
        }
      }).join('\n')
    return lines;
  };
  return iter(plainValue);
};

export default plain;


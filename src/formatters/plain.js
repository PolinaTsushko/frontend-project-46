import _ from 'lodash';

const stringify = (value) => {
  if (_.isPlainObject(value)) {
    return '[complex value]'
  }
  return `'${value}'`;
};

const plain = (plainValue) => {
  const iter = (currentValue, depth) => {
    const lines = Object
      .entries(currentValue)
      .map(([key, val]) => {
        switch (val.sign) {
          case 'added':
            return `Property '${key}' was added with value: ${stringify(val.value)}`;
          case 'deleted':
            return `Property '${key}' was removed`;
          case 'changed':
            return `Property '${key}' was updated. From ${stringify(val.value1)} to ${stringify(val.value2)}`;
          case 'hasChildren':
            return `${iter(val.value, key)}`;
          default:
            return [];
        }
      }).join('\n')
    return lines;
  };
  return iter(plainValue, '');
};

export default plain;


import _ from 'lodash';

const stringify1 = (value) => {
  const iter = (currentValue, depth) => {
    if (!_.isObject(currentValue)) {
      return '[complex value]';
    } 

    if (typeof currentValue === 'string') {
      return `${currentValue}`;
    }

    const lines = Object
      .entries(currentValue)
      .map(([key, val]) => {
        switch (val.sign) {
          case 'added':
            return `Property ${key} was added with value: ${iter(val.value)}`;
          case 'deleted':
            return `Property ${key} was removed`;
          case 'changed':
            return `Property ${key} was updated. From ${iter(val.value1)} to ${iter(val.value2)}`;
          case 'hasChildren':
            return `${iter(val.value, key)}`;
          default:
            return [];
        }
      }).join('\n');
    return lines;
  };
  return iter(value, '');
};

export default stringify1;

import _ from 'lodash';

const stringify1 = (value) => {
  const iter = (currentValue, depth) => {
    if (!_.isObject(currentValue)) {
      return '[complex value]';
    }

    if (typeof value === 'string') {
      return `${currentValue}`

    } 

  const lines = Object
    .entries(currentValue)
    .map(([key, val]) => {
      switch (val.sign) {
        case 'added':
          return `Property ${key} was added with value: ${stringify1(val.value)}`;
        case 'deleted':
          return `Property ${key} was removed`;
        case 'changed':
          return `Property ${key} was updated. From ${stringify1(val.value1)} to ${stringify1(val.value2)}`;
        case 'hasChildren':
          return `${iter(val.value, key)}`;
        default:
          return [];
      }
    });
  return [
    '{',
    ...lines,
  ].join('\n');
};
return iter(value, 1);
};



export default stringify1;

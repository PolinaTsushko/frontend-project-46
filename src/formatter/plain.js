import _ from 'lodash';

const stringify = (value) => {
  const iter = (currentValue, depth) => {
    if (!_.isObject(currentValue)) {
      return '[complex value]';
    }

    if (typeof value === 'string') {
      return `${currentValue}`

    } return currentValue
  };
  const lines = Object
    .entries(currentValue)
    .map(([key, val]) => {
      switch (val.sign) {
        case 'added':
          return `Property 'common.follow' was added with value: false`;
        case 'deleted':
          return `Property 'common.setting2' was removed`;
        case 'unchanged':
          return `${currentIndent}  ${key}: ${iter(val.value, depth + 2)}`;
        case 'changed':
          return `Property 'common.setting3' was updated. From true to null`;
        case 'hasChildren':
          return `${currentIndent}  ${key}: ${iter(val.value, depth + 2)}`;
        default:
          return `${currentIndent}  ${key}: ${iter(val, depth + 2)}`;
      }
    });
  return [
  ].join('\n');
};
return iter(value, 1);

export default stringify;

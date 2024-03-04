import _ from 'lodash';

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

export default stringify;
import stringify from "./stylish.js";
import stringify1 from "./plain.js";

const formatter = (value, formatName) => {
    switch (formatName) {
        case 'stylish':
            return stringify(value);
        case 'plain':
            return stringify1(value);
        default:
            throw new Error(`Something went wrong. Unknown type ${formatName}`)
    }
}

export default formatter;
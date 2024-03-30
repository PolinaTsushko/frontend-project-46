import stringify from "./stylish.js";
import plain from "./plain.js";

const formatter = (value, formatName) => {
    switch (formatName) {
        case 'stylish':
            return stringify(value);
        case 'plain':
            return plain(value);
        default:
            throw new Error(`Something went wrong. Unknown type ${formatName}`)
    }
}

export default formatter;
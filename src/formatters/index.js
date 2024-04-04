import stringify from "./stylish.js";
import plain from "./plain.js";
import json from "../json.js";

const formatter = (value, formatName) => {
    switch (formatName) {
        case 'stylish':
            return stringify(value);
        case 'plain':
            return plain(value);
        case 'json':
            return json(value);
        default:
            throw new Error(`Something went wrong. Unknown type ${formatName}`)
    }
}

export default formatter;
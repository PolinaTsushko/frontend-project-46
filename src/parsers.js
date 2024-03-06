import yaml from 'js-yaml';
import fs from 'fs';

const getFile = (filepath) => fs.readFileSync(filepath, 'utf-8');

const parsers = (filepath, format) => {
  if (format === 'json') {
    return JSON.parse(getFile(filepath));
  } return yaml.load(getFile(filepath));
};

export default parsers;

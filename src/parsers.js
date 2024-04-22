import yaml from 'js-yaml';

const parsers = (filepath, formatName) => {
  switch (formatName) {
    case 'json':
      return JSON.parse(filepath);
    case 'yml':
      return yaml.load(filepath);
    default:
      throw new Error(`Invalid format - ${formatName}`);
  }
};

export default parsers;

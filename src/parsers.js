import yaml from 'js-yaml';

export const parseJsone = (filepath) => JSON.parse(filepath);

export const parseYml = (filepath) => yaml.load(filepath);

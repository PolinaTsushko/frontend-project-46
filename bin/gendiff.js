#!/usr/bin/env node

import { Command } from 'commander';
import parseJsone from '../src/index';

const program = new Command();

program
  .description('Compares two configuration files and shows a difference.')
  .version('0.0.1', '-V, --version', 'output the version number')
  .option('-f, --format [type]', 'output format')
  .helpOption('-h, --help', 'output usage information')
  .arguments('<filepath1> <filepath2>')
  .action((filepath1, filepath2) => {
    const argument1 = parseJsone(filepath1);
    const argument2 = parseJsone(filepath2);
    console.log(argument1, argument2);
  });

program.parse();

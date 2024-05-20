### Hexlet tests and linter status:
[![Actions Status](https://github.com/PolinaTsushko/frontend-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/PolinaTsushko/frontend-project-46/actions)

[![Maintainability](https://api.codeclimate.com/v1/badges/6bad39f309d92e9ba8e7/maintainability)](https://codeclimate.com/github/PolinaTsushko/frontend-project-46/maintainability)

[![Test Coverage](https://api.codeclimate.com/v1/badges/6bad39f309d92e9ba8e7/test_coverage)](https://codeclimate.com/github/PolinaTsushko/frontend-project-46/test_coverage)


## Description

**GenDiff** - is a command-line tool for comparing and then displaying the difference between two JSON or YML files.

## Installation

**Install Node.js**

Clone repository: **git clone https://github.com/PolinaTsushko/frontend-project-46.git**

Install local folders **npm link**

Install all dependencies: **npm install**

## Usage 

There are 3 styles to choose from for displaying the difference between two files: stylish, plain, json

gendiff -f [type] file_path_1 file_path_2

Options:
-f, --format [type]: output format (available options: stylish, plain, json).
file_path_1: the path to the first file.
file_path_2: the path to the second file.

## Asciinema demonstration

json files [ stylish format ]

[![asciicast](https://asciinema.org/a/C5bLI7odLlch5cPNsZcZPOxmE.svg)](https://asciinema.org/a/C5bLI7odLlch5cPNsZcZPOxmE)

yaml files [ stylish format ]

[![asciicast](https://asciinema.org/a/n3EORd2HaYYinty1GfolAJhXq.svg)](https://asciinema.org/a/n3EORd2HaYYinty1GfolAJhXq)

json files [ plain format ]

[![asciicast](https://asciinema.org/a/bHy3t2ky4YBnKLHnKLPyxYFqc.svg)](https://asciinema.org/a/bHy3t2ky4YBnKLHnKLPyxYFqc)

json files [ json format ]

[![asciicast](https://asciinema.org/a/0KcKwBl2KB2uWrkYMKB1J2cN5.svg)](https://asciinema.org/a/0KcKwBl2KB2uWrkYMKB1J2cN5)
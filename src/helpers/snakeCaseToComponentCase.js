const { camelCase, upperFirst } = require('lodash');

const snakeCaseToComponentCase = snakeCase => upperFirst(camelCase(snakeCase));

module.exports = snakeCaseToComponentCase;

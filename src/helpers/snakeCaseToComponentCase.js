import { camelCase, upperFirst } from 'lodash';

export const snakeCaseToComponentCase = snakeCase => upperFirst(camelCase(snakeCase));

export default snakeCaseToComponentCase;

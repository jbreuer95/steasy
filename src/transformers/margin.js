import generator from '../generator';
import config from '../configHandler';

const values = generator.generate('m', 'margin', config.theme.margin, [
  ['x', 'marginHorizontal'],
  ['y', 'marginVertical'],
  ['t', 'marginTop'],
  ['r', 'marginRight'],
  ['b', 'marginBottom'],
  ['l', 'marginLeft'],
  ['s', 'marginStart'],
  ['e', 'marginEnd'],
], '')

console.log(values)
export default values;

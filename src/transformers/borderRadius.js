import generator from '../generator';
import config from '../configHandler';

export default generator.generate('rounded', 'borderRadius', config.theme.borderRadius, [
    ['t', ['borderTopLeftRadius', 'borderTopRightRadius']],
    ['r', ['borderTopRightRadius', 'borderBottomRightRadius']],
    ['b', ['borderBottomLeftRadius', 'borderBottomRightRadius']],
    ['l', ['borderTopLeftRadius', 'borderBottomLeftRadius']],
    ['tl', 'borderTopLeftRadius'],
    ['tr', 'borderTopRightRadius'],
    ['br', 'borderBottomRightRadius'],
    ['bl', 'borderBottomLeftRadius'],
    ['e', ['borderTopEndRadius', 'borderBottomEndRadius']],
    ['s', ['borderTopStartRadius', 'borderBottomStartRadius']],
    ['ts', 'borderTopStartRadius'],
    ['te', 'borderTopEndRadius'],
    ['be', 'borderBottomEndRadius'],
    ['bs', 'borderBottomStartRadius'],
]);

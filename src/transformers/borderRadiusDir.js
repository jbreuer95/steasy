import generator from '../generator';
import config from '../configHandler';

export default generator.generate('rounded-dir', 'borderRadius', config.theme.borderRadius, [
    ['e', ['borderTopEndRadius', 'borderBottomEndRadius']],
    ['s', ['borderTopStartRadius', 'borderBottomStartRadius']],
    ['ts', 'borderTopStartRadius'],
    ['te', 'borderTopEndRadius'],
    ['be', 'borderBottomEndRadius'],
    ['bs', 'borderBottomStartRadius'],
]);

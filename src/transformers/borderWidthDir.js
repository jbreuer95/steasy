import generator from '../generator';
import config from '../configHandler';

export default generator.generate('border-dir', 'borderWidth', config.theme.borderWidth, [
    ['x', ['borderEndWidth', 'borderStartWidth']],
    ['e', 'borderEndWidth'],
    ['s', 'borderStartWidth'],
]);

import generator from '../generator';
import config from '../configHandler';

export default generator.generate('inset', ['top', 'bottom', 'left', 'right'], config.theme.inset, [
    ['x', ['left', 'right']],
    ['y', ['top', 'bottom']],
]);

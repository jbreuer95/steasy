import generator from '../generator';
import config from '../configHandler';

export default generator.generate('inset-dir', ['top', 'bottom', 'start', 'end'], config.theme.inset, [
    ['x', ['start', 'end']],
]);

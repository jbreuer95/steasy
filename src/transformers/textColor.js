import generator from '../generator';
import config from '../configHandler';

export default generator.generate('text', 'color', config.theme.colors);

import generator from '../generator';
import config from '../configHandler';

export default generator.generate('bg', 'backgroundColor', config.theme.colors);

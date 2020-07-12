import generator from '../generator';

export default generator.generate('items', 'alignItems', [
    ['start', 'flex-start'],
    ['end', 'flex-end'],
    'center',
    'stretch',
    'baseline',
]);

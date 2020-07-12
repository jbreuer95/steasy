let file = require('./config.js');

// try {
//     file = require('../../../steasy.config.js');
// } catch (e) {}

const theme = file.theme;

for (const [name, value] of Object.entries(theme)) {
  if (typeof value === 'function') {
    theme[name] = value(theme)
  }
}

export default file;

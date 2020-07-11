'use strict';
const full = require('./src/full.json')

const hook = (initialProps) =>{
  const props = { ...initialProps };
  const styles = [];
  for (const [name, value] of Object.entries(props)) {
      if (full.hasOwnProperty(name)) {
        if (value === true) {
          styles.push(full[name]);
        }
        delete props[name];
      }
  }
  if ('style' in props) {
    const value = props.style;
    if (Array.isArray(value)) {
      styles.push(...value);
    } else {
      styles.push(value);
    }
    delete props.style;
  }
  return { styles, props };
}

module.exports = hook;
module.exports.default = hook;

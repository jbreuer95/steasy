'use strict';
const base = require('./base.json')

const hook = (initialProps) =>{
  const props = { ...initialProps };
  const styles = [];
  for (const [name, value] of Object.entries(props)) {
      if (base.hasOwnProperty(name)) {
        if (value === true) {
          styles.push(base[name]);
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

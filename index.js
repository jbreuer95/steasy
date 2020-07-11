'use strict';
const hook = (initialProps) =>{
  let steasy = require('../../steasy.json');

  const props = { ...initialProps };
  const styles = [];
  for (const [name, value] of Object.entries(props)) {
      if (steasy.hasOwnProperty(name)) {
        if (value === true) {
          styles.push(steasy[name]);
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

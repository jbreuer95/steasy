export default {
  generate(name, key, values, variation = []) {
    let styles = {};
    let value = '';
    let styleName = '';
    let valueName = '';
    let keyName = '';
    let keys = '';
    let keyStyleName = '';
    if (name) {
      name += '-';
    }
    if (Array.isArray(values)) {
      for (const value of values) {
        if (typeof value === 'string') {
          keyStyleName = `${name}${value}`
          styles[keyStyleName] = { [key]: value }
        } else if (Array.isArray(value)) {
          if (value.length === 2) {
            keyStyleName = `${name}${value[0]}`
            styles[keyStyleName] = { [key]: value[1] }
          }
        }
      }
    } else {
      for (const [subName, value] of Object.entries(values)) {
        if (typeof value === 'object' &&!Array.isArray(value)) {
          for (const [deepName, deepvalue] of Object.entries(value)) {
            keyStyleName = `${name}${subName}-${deepName}`
            styles[keyStyleName] = { [key]: deepvalue }
          }
        } else if (Array.isArray(value)) {
          console.log('Array?')
        } else {
          keyStyleName = `${name}${subName}`
          styles[keyStyleName] = { [key]: value }
        }
      }
    }
    return styles
  }
}

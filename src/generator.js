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
    return styles
  }
}

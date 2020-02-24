module.exports.addColors = (all, transform) => {
  const add = (colors, prefix = null) => {
    for (const [name, value] of Object.entries(colors)) {
      if (typeof value === 'string') {
        all[`bg-${prefix || ''}${name}`] = { 'backgroundColor': value }
        all[`text-${prefix || ''}${name}`] = { 'color': value }
      } else if (typeof value === 'object') {
        add(value, name + '-')
      }
    }
  }
  add(transform);
  return all
}
module.exports.addSpacing = (all, transform) => {
  const margins = {
    'm': 'margin',
    'my': 'marginTop',
    'mx': 'marginRight',
    'mt': 'marginTop',
    'mr': 'marginRight',
    'mb': 'marginBottom',
    'ml': 'marginLeft'
  };
  const paddings = {
    'p': 'padding',
    'py': 'paddingTop',
    'px': 'paddingRight',
    'pt': 'paddingTop',
    'pr': 'paddingRight',
    'pb': 'paddingBottom',
    'pl': 'paddingLeft'
  };
  for (const [name, value] of Object.entries(transform)) {
    for (const [n, v] of Object.entries(margins)) {
      all[`${n}-${name}`] = { [v]: value }
    }
    for (const [n, v] of Object.entries(paddings)) {
      all[`${n}-${name}`] = { [v]: value }
    }
  }
  for (const [n, v] of Object.entries(margins)) {
    all[`${n}-auto`] = { [v]: 'auto' }
  }
  for (const [n, v] of Object.entries(paddings)) {
    all[`${n}-auto`] = { [v]: 'auto' }
  }
  return all
}


module.exports.addColors = (all, transform) => {
  const add = (colors, prefix = null) => {
    for (const [name, value] of Object.entries(colors)) {
      if (typeof value === 'string') {
        all[`bg-${prefix || ''}${name}`] = { 'backgroundColor': value }
        all[`text-${prefix || ''}${name}`] = { 'color': value }
        all[`border-${prefix || ''}${name}`] = { 'borderColor': value }
        all[`border-t-${prefix || ''}${name}`] = { 'borderTopColor': value }
        all[`border-r-${prefix || ''}${name}`] = { 'borderRightColor': value }
        all[`border-b-${prefix || ''}${name}`] = { 'borderBottomColor': value }
        all[`border-l-${prefix || ''}${name}`] = { 'borderLeftColor': value }
        all[`border-e-${prefix || ''}${name}`] = { 'borderEndColor': value }
        all[`border-s-${prefix || ''}${name}`] = { 'borderStartColor': value }
        all[`overlay-${prefix || ''}${name}`] = { 'overlayColor': value }
      } else if (typeof value === 'object') {
        add(value, name + '-')
      }
    }
  }
  add(transform);
  return all
}
module.exports.addOpacity = (all, transform) => {
  for (const [name, value] of Object.entries(transform)) {
    all[`opacity-${name}`] = { 'opacity': value }
  }
  return all
}
module.exports.addSpacing = (all, transform) => {
  const margins = {
    'm': 'margin',
    'my': 'marginVertical',
    'mx': 'marginHorizontal',
    'mt': 'marginTop',
    'mr': 'marginRight',
    'mb': 'marginBottom',
    'ml': 'marginLeft',
    'me': 'marginEnd',
    'ms': 'marginStart'
  };
  const paddings = {
    'p': 'padding',
    'py': 'paddingVertical',
    'px': 'paddingHorizontal',
    'pt': 'paddingTop',
    'pr': 'paddingRight',
    'pb': 'paddingBottom',
    'pl': 'paddingLeft',
    'pe': 'paddingEnd',
    'ps': 'paddingStart'
  };
  const positions = {
    'top': 'top',
    'right': 'right',
    'bottom': 'bottom',
    'left': 'left',
    'end': 'end',
    'start': 'start',
    'inset': ['top', 'bottom', 'right', 'left'],
    'inset-x': ['top', 'bottom'],
    'inset-y': ['right', 'left'],
  };
  const spacing = {
    'w': 'width',
    'h': 'height',
    'min-h': 'minHeight',
    'max-h': 'maxHeight',
    'min-w': 'minWidth',
    'max-w': 'maxWidth',
  };
  const add = (name, value, set) => {
    for (const [n, v] of Object.entries(set)) {
      if (typeof v === 'string') {
        all[`${n}-${name}`] = { [v]: value }
      } else if (Array.isArray(v)) {
        const values = {}
        for (const sub_v of v) {
          values[sub_v] = value
        }
        all[`${n}-${name}`] = values
      }
    }
  }
  for (const [name, value] of Object.entries(transform)) {
    add(name, value, margins);
    add(name, value, paddings);
    add(name, value, positions);
    add(name, value, spacing);
  }
  return all
}


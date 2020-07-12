import config from './configHandler';

let colors = {};

const generateColors = (colors) => {
  let colorList = {},
      color,
      currentColor,
      colorKey,
      colorValue,
      colorName,
      currentColorKeys;

  for (color in colors) {
      colorName = color;

      currentColor = colors[colorName];

      if (typeof currentColor !== 'object') {
          colorValue = currentColor;

          colorList[colorName] = colorValue;
      }

      if (typeof currentColor === 'object') {
          currentColorKeys = Object.getOwnPropertyNames(currentColor);

          currentColorKeys.map(key => {
              colorValue = currentColor[key];

              colorKey = `${colorName}-${key}`;

              colorList[colorKey] = colorValue;
          });
      }
  }

  return colorList;
}

const themeColors = generateColors(config.theme.colors);

Object.assign(colors, themeColors);

export default colors;

export default {
  generate(name, key, values, variation = []) {
      let
          i = 0,
          j = 0,
          styles = {},
          value = '',
          styleName = '',
          valueName = '',
          keyName = '',
          keys = '',
          keyStyleName = '';

      const
          styleValues = this.parseThemeValues(values),
          valuesLength = styleValues.length,
          variationLength = variation.length;

          // console.log(values , styleValues)


      for (; i < valuesLength; ++i) {
          value = this.getValue(styleValues[i]);
          valueName = this.getValueName(styleValues[i]);
          keyName = this.getKeyName(name, valueName);

          styleName = this.translateKeys(keyName);
          styles[styleName] = this.keyHandler(key, value);
      }

      if (variationLength) {
          j = 0;
          value = '';
          styleName = '';
          valueName = '';
          keyName = '';
          keyStyleName = '';

          for (; j < variationLength; ++j) {
              i = 0;
              keyName = `${name}-${variation[j][0]}`;
              keys = variation[j][1];

              for (; i < valuesLength; ++i) {
                  value = this.getValue(styleValues[i]);
                  valueName = this.getValueName(styleValues[i]);
                  keyStyleName = this.getKeyName(keyName, valueName);

                  styleName = this.translateKeys(keyStyleName);
                  styles[styleName] = this.keyHandler(keys, value);
              }
          }
      }

      return styles;
  },

  getValue(value) {
      let valueToReturn = value;

      if (typeof value === 'object') {
          valueToReturn = value[1];
      }

      if (typeof valueToReturn === 'object') {
          valueToReturn = valueToReturn[0];
      }

      return valueToReturn;
  },

  getValueName(value) {
      if (typeof value === 'object') {
          return value[0];
      }

      return value;
  },

  getKeyName(name, valueName) {
      let keyName = valueName,
          prefix = name;

      if (keyName.substring(0, 1) === '-') {
          prefix = `-${name}`;
          keyName = keyName.substring(1);
      }

      if (prefix !== '') {
          keyName = `${prefix}-${keyName}`;
      }

      return keyName;
  },

  keyHandler(keys, value) {
      let i = 0, tempObject = {};
      const keysLength = keys.length;

      if (typeof keys === 'object') {
          for (; i < keysLength; ++i) {
              tempObject[keys[i]] = value;
          }

          return tempObject;
      }

      tempObject[keys] = value;

      return tempObject;
  },

  translateKeys(name, prefix = '') {
      let translatedKey = name;

      if (translatedKey.search('default') !== -1) {
          translatedKey = `${prefix}${translatedKey.replace('-default', '')}`;
      }

      if (translatedKey.search(/\//) !== -1) {
          translatedKey = `${prefix}${translatedKey.replace('/', '_')}`;
      }

      return translatedKey;
  },

  parseThemeValues(values) {
      if (typeof values === 'object' && !Array.isArray(values)) {
          return this.toArray(values);
      }

      return values;
  },

  toArray(object) {
      return Object.keys(object).map(value => {
          return [value, object[value]];
      });
  },
};

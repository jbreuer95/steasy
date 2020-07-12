import transformers from './src/transformers/index'


export default (initialProps) => {
  const props = { ...initialProps };
  const styles = [];
  for (const [name, value] of Object.entries(props)) {
    if (transformers.hasOwnProperty(name)) {
      if (value === true) {
        styles.push(transformers[name]);
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

import React from 'react';
import { Text as DefaultText } from 'react-native';
import steasy from 'steasy';

export default function Text(p) {
  const { styles, props } = steasy(p);
  return (
    <DefaultText style={styles} {...props} >
      {props.children}
    </DefaultText>
  );
}

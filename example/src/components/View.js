import React from 'react';
import { View as DefaultView } from 'react-native';
import steasy from 'steasy';

export default function View(p) {
  const { styles, props } = steasy(p);
  return (
    <DefaultView style={styles} {...props} >
      {props.children}
    </DefaultView>
  );
}

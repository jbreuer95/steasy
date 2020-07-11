import React, { Profiler } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text as BaseText } from 'react-native';
import { View, Text } from './src/components';

const App = () => {
  function onRenderCallback(
    id,
    phase,
    actualDuration,
    baseDuration,
    startTime,
    commitTime,
    interactions
  ) {
    console.log(`The component`, id, `, The phase`, phase, `, Time taken for the update`, actualDuration, baseDuration, startTime, commitTime, interactions);
  }
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Profiler id="base-text" onRender={onRenderCallback}>
          <BaseText style={s.base}>Hello World</BaseText>
        </Profiler>
        <Profiler id="steasy-text" onRender={onRenderCallback}>
          <Text text-red-500 opacity-50 uppercase p-1>Hello World</Text>
        </Profiler>
      </SafeAreaView>
    </>
  );
};

const s = StyleSheet.create({
  base: {
    color:"#f56565",
    opacity: 0.5,
    textTransform: 'uppercase',
    padding: 1
  },
});

export default App;

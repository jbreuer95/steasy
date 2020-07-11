import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { View, Text } from './src/components';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View flex-row justify-between p-16>
          <View mr-64>
            <Text pr-64 text-red-500 opacity-25>Hello World</Text>
          </View>
          <Text>Hello World</Text>
        </View>
      </SafeAreaView>
    </>
  );
};

const s = StyleSheet.create({
  title: {
    // borderStyle: 'none',
  },
});

export default App;

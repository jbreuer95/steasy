import React from 'react';
import { SafeAreaView, Text, StatusBar } from 'react-native';
import { View } from './src/components';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View flex-row justify-around>
          <Text>Hello World</Text>
          <Text>Hello World</Text>
        </View>
      </SafeAreaView>
    </>
  );
};
export default App;

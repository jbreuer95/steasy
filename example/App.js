import React from 'react';
import { SafeAreaView, Text, StatusBar } from 'react-native';
import { View } from './src/components';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View flex-row bg-red-500>
          <View pr-64>
            <Text>Hello World</Text>
          </View>
          <Text>Hello World</Text>
        </View>
      </SafeAreaView>
    </>
  );
};
export default App;

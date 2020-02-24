import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { View, Text } from './src/components';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View flex-row>
          <View mr-64>
            <Text pr-64 text-red-500>Hello World</Text>
          </View>
          <Text>Hello World</Text>
        </View>
      </SafeAreaView>
    </>
  );
};
export default App;

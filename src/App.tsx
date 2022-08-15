import React from 'react';
import { StyleSheet, SafeAreaView  } from 'react-native';
import { HolisticProgram } from './screens/HolisticProgram.screens';
import { SafeAreaProvider } from 'react-native-safe-area-context';
// import { Programs } from './screens/Programs.screens';

export const App: React.FC = () => {

  return (
    <SafeAreaProvider>
    <SafeAreaView style={{ flex: 1 }} forceInset={{ top: 'always' }}>
    <HolisticProgram />
    {/* <Programs /> */}
  </SafeAreaView>
  </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  mainContainer:{
    flex: 1,
    backgroundColor: '#fff'
  }
})
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Programs } from './screens/Programs.screens';

export const App: React.FC = () => {

  return (
  <View style={styles.mainContainer}>
    <Programs />
  </View>
  );
};

const styles = StyleSheet.create({
  mainContainer:{
    flex: 1,
    backgroundColor: '#fff'
  }
})
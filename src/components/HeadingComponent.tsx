import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type HeadingComponentProps = {
  heading: string;
};

export const HeadingComponent: React.FC<HeadingComponentProps> = ({
  heading,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>{heading}</Text>
      <View style={styles.dashedLine} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
    flexDirection: 'row',
  },
  headingText: {
    fontSize: 16,
    color: '#0bbdbd',
    borderColor: '#0bbdbd',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderWidth: 1,
    borderRadius: 20,
  },
  dashedLine: {
    height: '50%',
    width: '75%',
    borderStyle: 'dashed',
    borderColor: '#e4e4e4',
    borderBottomWidth: 1,
  },
});

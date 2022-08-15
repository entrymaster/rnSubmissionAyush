import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type DurationTabProps = {
  duration: string;
  setDuration: React.Dispatch<React.SetStateAction<string>>;
};

export const DurationTab: React.FC<DurationTabProps> = ({
  duration,
  setDuration,
}) => {
  return (
    <View style={styles.tabContainer}>
      <Text
        onPress={() => setDuration('Monthly')}
        style={[
          styles.durationTab,
          {
            borderBottomWidth: duration === 'Monthly' ? 4 : 1,
            borderBottomColor: duration === 'Monthly' ? '#3464fc' : '#000',
            color: duration === 'Monthly' ? '#3464fc' : '#000',
          },
        ]}>
        Monthly
      </Text>
      <Text
        onPress={() => setDuration('Quaterly')}
        style={[
          styles.durationTab,
          {
            borderBottomWidth: duration === 'Quaterly' ? 4 : 1,
            borderBottomColor: duration === 'Quaterly' ? '#3464fc' : '#000',
            color: duration === 'Quaterly' ? '#3464fc' : '#000',
          },
        ]}>
        Quaterly
      </Text>
      <Text
        onPress={() => setDuration('Half Yearly')}
        style={[
          styles.durationTab,
          {
            borderBottomWidth: duration === 'Half Yearly' ? 4 : 1,
            borderBottomColor: duration === 'Half Yearly' ? '#3464fc' : '#000',
            color: duration === 'Half Yearly' ? '#3464fc' : '#000',
          },
        ]}>
        Half Yearly
      </Text>
      <Text
        onPress={() => setDuration('Yearly')}
        style={[
          styles.durationTab,
          {
            borderBottomWidth: duration === 'Yearly' ? 4 : 1,
            borderBottomColor: duration === 'Yearly' ? '#3464fc' : '#000',
            color: duration === 'Yearly' ? '#3464fc' : '#000',
          },
        ]}>
        Yearly
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    width: `${100 / 0.9}%`,
  },
  durationTab: {
    width: '25%',
    textAlign: 'center',
    padding: 10,
    fontWeight: '600',
  },
});

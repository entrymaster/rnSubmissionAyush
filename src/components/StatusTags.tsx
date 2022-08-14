import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

type StatusTagsProps = {
  icon: NodeRequire;
  text: string;
  state: boolean;
};

export const StatusTags: React.FC<StatusTagsProps> = ({
  icon,
  text,
  state,
}) => {
  return (
    <View>
      <View style={styles.container}>
        <Image source={icon} style={{ width: 20, height: 20 }} />
        <View
          style={[
            styles.circle,
            { borderColor: state ? '#68cc64' : '#c95347' },
          ]}>
          <View
            style={[
              styles.checkedCircle,
              { backgroundColor: state ? '#68cc64' : '#c95347' },
            ]}></View>
        </View>
      </View>
      <Text style={styles.tagText}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    margin: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    //   margin: 10,
    elevation: 3,
  },
  circle: {
    height: 12,
    width: 12,
    position: 'absolute',
    right: -1,
    bottom: -1,
    borderRadius: 6,
    borderWidth: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkedCircle: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  tagText: {
    fontSize: 9,
    textAlign: 'center',
  },
});

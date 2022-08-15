import React from 'react';
import { StyleSheet, View, Image, Text, Animated } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const programBasic = [
  {
    key: 'TYPE',
    keyColor: '#64c464',
    value: 'BODY WEIGHT',
    color: '#dfebb8',
  },
  {
    key: 'LEVEL',
    keyColor: '#a37772',
    value: 'INTERMEDIATE',
    color: '#b8d6e3',
  },
  {
    key: 'INTENSITY',
    keyColor: '#a37772',
    value: 'DIFFICULT',
    color: '#f3c6c2',
  },
  {
    key: 'KCAL/DAY',
    keyColor: '#616054',
    value: '1500',
    color: '#ffd940',
  },
];

type TopBannerProps = {
  animatedValue: Animated.Value;
};

const HEADER_HEIGHT = 250;

export const TopBanner: React.FC<TopBannerProps> = ({ animatedValue }) => {
  const insets = useSafeAreaInsets();

  const headerHeight = animatedValue.interpolate({
    inputRange: [0, HEADER_HEIGHT + insets.top],
    outputRange: [HEADER_HEIGHT + insets.top, insets.top],
    extrapolate: 'clamp',
  });

  return (
    <Animated.View style={[styles.container, { height: headerHeight }]}>
      <Image
        source={require('../assets/treadmill.jpg')}
        style={styles.coverImage}
      />
      <View style={styles.bottomContainer}>
        {programBasic.map((item, index) => (
          <View
            key={index}
            style={[styles.itemContainer, { backgroundColor: item.color }]}>
            <Text
              style={{ fontSize: 11, fontWeight: '600', color: item.keyColor }}>
              {item.key}
            </Text>
            <Text style={styles.valueText}>{item.value}</Text>
          </View>
        ))}
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 250,
    width: '90%',
    alignSelf: 'center',
    position: 'absolute',
    top: 50,
    zIndex: 10,
  },
  coverImage: {
    width: '100%',
    height: '78%',
  },
  bottomContainer: {
    height: '22%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '25%',
  },
  valueText: {
    fontSize: 10.5,
    fontWeight: '600',
    color: '#686b6e',
  },
});

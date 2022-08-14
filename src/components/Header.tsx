import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { theme } from '../theme';
import LeftIcon from '../assets/left.svg';

const Items = ['Tracker', 'Workouts', 'Programs', 'Teachers', 'Brands'];

export const Header: React.FC = () => {
  const [selectedTab, setSelectedTab] = React.useState('Programs');

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <TouchableOpacity style={styles.leftBtn}>
          <LeftIcon
            height={20}
            width={20}
            color={theme.header.color.fontColor}
          />
        </TouchableOpacity>
        <Text style={styles.topBarText}>Movement</Text>
      </View>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        style={styles.headerTab}
        horizontal={true}>
        {Items.map((item, index) => (
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => setSelectedTab(item)}
            style={{ width: 100 }}
            key={index}>
            <Text style={styles.headerTabTile}>{item}</Text>
            {item === selectedTab && (
              <View style={styles.headerTabTileBottom} />
            )}
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: '18%',
    backgroundColor: theme.header.color.background,
    paddingTop: 10,
  },
  topBar: {
    marginHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  leftBtn: {
    position: 'absolute',
    left: 0,
  },
  topBarText: {
    color: theme.header.color.fontColor,
    fontSize: 20,
  },
  headerTab: {
    position: 'absolute',
    bottom: 10,
  },
  headerTabTile: {
    color: theme.header.color.fontColor,
    fontSize: 17,
    textAlign: 'center',
  },
  headerTabTileBottom: {
    alignSelf: 'center',
    width: 50,
    marginBottom: 20,
    paddingTop: 7,
    borderBottomColor: theme.header.color.fontColor,
    borderBottomWidth: 2,
  },
});

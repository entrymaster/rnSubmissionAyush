import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { theme } from '../theme';
import GoalIcon from '../assets/GoalIcon.svg';
import ChatIcon from '../assets/chat.svg';
import StarIcon from '../assets/star.svg';
import HomeIcon from '../assets/home.svg';
import ProfileIcon from '../assets/profile.svg';

type BottomTabProps = {
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
};

export const BottomTab: React.FC<BottomTabProps> = ({
  activeTab,
  setActiveTab,
}) => {
  
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => setActiveTab('home')}
        style={styles.tabContainer}>
        <HomeIcon
          height={theme.tab.iconSize}
          width={theme.tab.iconSize}
          fill={
            activeTab === 'home'
              ? theme.tab.color.active
              : theme.tab.color.inActive
          }
        />
        <Text
          style={[
            styles.tabText,
            {
              color:
                activeTab === 'home'
                  ? theme.tab.color.active
                  : theme.tab.color.inActive,
            },
          ]}>
          HOME
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setActiveTab('journey')}
        style={styles.tabContainer}>
        <GoalIcon
          height={theme.tab.iconSize}
          width={theme.tab.iconSize}
          fill={
            activeTab === 'journey'
              ? theme.tab.color.active
              : theme.tab.color.inActive
          }
        />
        <Text
          style={[
            styles.tabText,
            {
              color:
                activeTab === 'journey'
                  ? theme.tab.color.active
                  : theme.tab.color.inActive,
            },
          ]}>
          JOURNEY
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setActiveTab('profile')}
        style={styles.tabContainer}>
        <ProfileIcon
          height={theme.tab.iconSize}
          width={theme.tab.iconSize}
          fill={
            activeTab === 'profile'
              ? theme.tab.color.active
              : theme.tab.color.inActive
          }
        />
        <Text
          style={[
            styles.tabText,
            {
              color:
                activeTab === 'profile'
                  ? theme.tab.color.active
                  : theme.tab.color.inActive,
            },
          ]}>
          PROFILE
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setActiveTab('fav')}
        style={styles.tabContainer}>
        <StarIcon
          height={theme.tab.iconSize}
          width={theme.tab.iconSize}
          fill={
            activeTab === 'fav'
              ? theme.tab.color.active
              : theme.tab.color.inActive
          }
        />
        <Text
          style={[
            styles.tabText,
            {
              color:
                activeTab === 'fav'
                  ? theme.tab.color.active
                  : theme.tab.color.inActive,
            },
          ]}>
          FAVOURITES
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setActiveTab('chat')}
        style={styles.tabContainer}>
        <ChatIcon
          height={theme.tab.iconSize}
          width={theme.tab.iconSize}
          fill={
            activeTab === 'chat'
              ? theme.tab.color.active
              : theme.tab.color.inActive
          }
        />
        <Text
          style={[
            styles.tabText,
            {
              color:
                activeTab === 'chat'
                  ? theme.tab.color.active
                  : theme.tab.color.inActive,
            },
          ]}>
          CHAT
        </Text>
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height: 65,
    elevation: 15,
    shadowColor: '#000',
    shadowOpacity: 1,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    position: 'absolute',
    bottom: 0,
  },
  tabContainer: {
    alignItems: 'center',
    width:60,
  },
  tabText: {
    paddingTop: 5,
    fontSize: 10,
  },
});

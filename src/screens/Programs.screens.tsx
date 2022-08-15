import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Activities } from '../components/Activities';
import { BottomTab } from '../components/BottomTab';
import { Header } from '../components/Header';
import { ProgramsTile } from '../components/ProgramsTile';
import { theme } from '../theme';

const programList = [
  {
    heading: 'Holistic Journey Program',
    level: 'Beginner',
    user: 'Arjun Nair',
  },
  {
    heading: 'Custom Programme',
    level: 'Intermediate',
    user: 'Username',
  },
  {
    heading: 'Custom Programme',
    level: 'Advanced',
    user: 'Username',
  },
];

export const Programs: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState('home');
  const [selectedActivity, setSelectedActivity] = React.useState('Yoga');

  return (
    <View style={styles.mainContainer}>
      <Header />
      <ScrollView contentContainerStyle={styles.contentScroll}>
        <Activities
          selectedActivity={selectedActivity}
          setSelectedActivity={setSelectedActivity}
        />
        {programList.map((item, index) => (
          <ProgramsTile
            key={index}
            heading={item.heading}
            level={item.level}
            user={item.user}
          />
        ))}
      </ScrollView>
      <BottomTab activeTab={activeTab} setActiveTab={setActiveTab} />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: theme.primary.backgroundColor,
  },
  contentScroll:{
    paddingBottom: 65
  }
});

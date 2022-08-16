import React from 'react';
import { View, StyleSheet, ScrollView, ActivityIndicator, Text } from 'react-native';
import { gql, useQuery } from '@apollo/client';
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

const PACKAGES_QUERY = gql`
  query GetPackages($filter: FitnesspackageFiltersInput) {
    results: fitnesspackages(filters: $filter) {
      items: data {
        id
        attributes {
          packagename
          level
          ptonline
          ptoffline
          grouponline
          groupoffline
          recordedclasses
        }
      }
    }
  }
`;

export const Programs: React.FC = () => {
  const { data, loading } = useQuery(PACKAGES_QUERY);


  const [activeTab, setActiveTab] = React.useState('home');
  const [selectedActivity, setSelectedActivity] = React.useState('Yoga');

  return (
    <View style={styles.mainContainer}>
      <Header />
      {loading ? (
        <ActivityIndicator
          style={styles.mainContainer}
          size="large"
          color="#00aced"
        />
      ) : data === undefined ? (
        <View style={styles.emptyDataText}>
          <Text style={{ color: '#ca5b51' }}>No Data Found !</Text>
        </View>
      ) : (
        <ScrollView contentContainerStyle={styles.contentScroll}>
          <Activities
            selectedActivity={selectedActivity}
            setSelectedActivity={setSelectedActivity}
          />
          {data.results.items?.map((item: Object, index: number) => (
            <ProgramsTile
              key={index}
              heading={item.attributes.packagename}
              level={item.attributes.level}
              ptonline={item.attributes.ptonline || 0}
              ptoffline={item.attributes.ptoffline || 0}
              grouponline={item.attributes.grouponline || 0}
              groupoffline={item.attributes.groupoffline || 0}
              recordedclasses={item.attributes.recordedclasses || 0}
              user={'Ayush'}
            />
          ))}
        </ScrollView>
      )}

      <BottomTab activeTab={activeTab} setActiveTab={setActiveTab} />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: theme.primary.backgroundColor,
  },
  contentScroll: {
    paddingBottom: 65,
  },
  emptyDataText: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
},
});

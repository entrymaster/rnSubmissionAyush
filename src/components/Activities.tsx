import React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Text,
} from 'react-native';
import { theme } from '../theme';

type ActivitiesProps = {
  selectedActivity: string;
  setSelectedActivity: React.Dispatch<React.SetStateAction<string>>;
};

const activities = ['Yoga', 'Zumba', 'Martial Arts', 'Running', 'Fitness'];

export const Activities: React.FC<ActivitiesProps> = ({
  selectedActivity,
  setSelectedActivity,
}) => {
  return (
    <View style={styles.container}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        style={styles.itemContainer}
        horizontal={true}>
        {activities.map((item, index) => (
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => setSelectedActivity(item)}
            style={styles.activityContainer}
            key={index}>
            <View
              style={[
                styles.roundView,
                {
                  backgroundColor:
                    item === selectedActivity
                      ? theme.activity.color.active
                      : theme.activity.color.inActive,
                },
              ]}
            />
            <Text
              style={[
                styles.activity,
                {
                  color:
                    item === selectedActivity
                      ? theme.activity.color.active
                      : theme.activity.color.inActive,
                },
              ]}>
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.primary.backgroundColor,
  },
  itemContainer: {
    padding: 10,
  },
  activityContainer: {
    width: 90,
    alignItems: 'center',
  },
  activity: {
    fontSize: 14,
    // textAlign:"center"
  },
  roundView: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    marginVertical: 10,
  },
});

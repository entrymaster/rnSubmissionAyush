import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import { StatusTags } from './StatusTags';

const programData = [
  {
    icon: require('../assets/group2.png'),
    text: '15 PT',
    state: false,
  },
  {
    icon: require('../assets/group2.png'),
    text: '15 PT',
    state: true,
  },
  {
    icon: require('../assets/group3.png'),
    text: '5 Group',
    state: false,
  },
  {
    icon: require('../assets/group3.png'),
    text: '5 Group',
    state: true,
  },
  {
    icon: require('../assets/monitor.png'),
    text: '5 Recorded',
    state: true,
  },
];

type ProgramTileProps = {
  heading: string;
  level: string;
  user: string;
}

export const ProgramsTile: React.FC<ProgramTileProps> = ({
  heading,
  level,
  user,
}) => {

  const tagColorSwitch = () => {

    switch (level) {
      case "Beginner":
        return "#0bbdbd"
      case "Intermediate":
        return "#cba737";
      case "Advanced":
        return "#ce5662";
    }
  }

  return (
    <View style={styles.container}>
      <Text style={[styles.topTag, { backgroundColor: tagColorSwitch() }]}>
        {level}
      </Text>
      <View style={styles.topContainer}>
        <Image style={styles.tileImage} source={require('../assets/OIP.jpg')} />
        <View style={styles.textContainer}>
          <Text style={styles.tileHeading}>{heading}</Text>
          <Text style={styles.tileDesc}>
            Lorem Ipsum Simple dummy{'\n'}content
          </Text>
          <View style={styles.tagContainer}>
            <Text style={styles.tagText}>Zumba</Text>
            <View style={styles.imageContainer}>
              <Text style={styles.imageText}>
                Created By{'\n'}
                {user}
              </Text>
              <Image
                style={styles.profileImage}
                source={require('../assets/OIP.jpg')}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.tags}>
          {programData.map((item, index) => (
            <StatusTags
              key={index}
              icon={item.icon}
              text={item.text}
              state={item.state}
            />
          ))}
        </View>
        <View style={styles.amountContainer}>
          <Text style={styles.amountText}>₹ 10000</Text>
          <Text style={styles.amountDescText}>per month</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 10,
    margin: 20,
    borderRadius: 10,
  },
  topContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderStyle: 'dashed',
    borderColor: '#cccccc',
  },
  topTag: {
    color: '#fff',
    fontSize: 11,
    alignSelf: 'center',
    position: 'absolute',
    right: 0,
    width:100,
    textAlign:'center',
    borderBottomLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingVertical: 3,
  },
  tileImage: {
    width: 85,
    height: 100,
    borderRadius: 5,
    elevation: 15,
  },
  profileImage: {
    width: 34,
    height: 34,
    borderRadius: 34 / 2,
  },
  textContainer: {
    width: '74%',
    paddingLeft: 20,
    paddingTop: 10,
    paddingBottom: 5,
  },
  tileHeading: {
    fontSize: 17,
    fontWeight: '600',
  },
  tileDesc: {
    fontSize: 13,
  },
  tags:{
    flexDirection: 'row'
  },
  tagContainer: {
    paddingTop: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tagText: {
    borderRadius: 15,
    alignSelf: 'center',
    paddingHorizontal: 9,
    paddingVertical: 2,
    backgroundColor: '#f2e890',
    fontSize: 12.5,
  },
  imageContainer: {
    flexDirection: 'row',
  },
  imageText: {
    color: '#cccccc',
    fontSize: 11,
  },
  amountContainer: {
    flexDirection: 'column',
    alignSelf: 'center',
  },
  amountText: {
    color: '#8abd6b',
    fontSize: 20,
  },
  amountDescText: {
    color: '#bcbcbc',
    fontWeight: '600',
    fontSize: 11,
    textAlign: 'right',
    paddingRight: 2,
  },
  bottomContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});

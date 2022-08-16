import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  Animated,
  ScrollView,
} from 'react-native';
import { theme } from '../theme';
import LeftIcon from '../assets/left.svg';
import { TopBanner } from '../components/TopBanner';
import { BottomTab } from '../components/BottomTab';
import { StatusTags } from '../components/StatusTags';
import LocationPin from '../assets/location.svg';
import StoveIcon from '../assets/stove.svg';
import PanIcon from '../assets/pan.svg';
import KnifeIcon from '../assets/knife.svg';
import PotIcon from '../assets/pot.svg';
import { DurationTab } from '../components/DurationTab';
import { ProgramsTile } from '../components/ProgramsTile';
import { HeadingComponent } from '../components/HeadingComponent';
import { useNavigation } from '@react-navigation/native';
import { programData, howDoesData } from '../data'

export const HolisticProgram: React.FC = () => {
  const navigation = useNavigation();

  const [activeTab, setActiveTab] = React.useState('home');
  const [duration, setDuration] = React.useState('Yearly');
  const offset = React.useRef(new Animated.Value(0)).current;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.topBar}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.leftBtn}>
            <LeftIcon
              height={20}
              width={20}
              color={theme.header.color.fontColor}
            />
          </TouchableOpacity>
          <Text style={styles.topBarText}>Holistic Journey Program</Text>
        </View>
      </View>

      <TopBanner animatedValue={offset} />

      <ScrollView
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: offset } } }],
          { useNativeDriver: false },
        )}
        contentContainerStyle={styles.contentScroll}>
        <View style={{ marginTop: 180, width: '90%', alignSelf: 'center' }}>
          <View style={styles.bottomContainer}>
            <View style={styles.tags}>
              {programData.map((item, index) => (
                <StatusTags
                  key={index}
                  icon={item.icon}
                  value={item.text}
                  state={item.state}
                />
              ))}
            </View>
            <View style={styles.imageContainer}>
              <Text style={styles.imageText}>
                Created By{'\n'}
                <Text style={styles.creatorName}>{'Arjun Nair'}</Text>
              </Text>
              <Image
                style={styles.profileImage}
                source={require('../assets/OIP.jpg')}
              />
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              paddingVertical: 15,
              paddingHorizontal: 10,
            }}>
            <LocationPin height={30} width={30} />
            <View style={{ flexDirection: 'column', justifyContent: 'center' }}>
              <Text style={{ fontSize: 12, color: '#b4b4b4' }}>
                1st Floor, Madanagopal Street, Abhiramapuram{'\n'}Chennai-600018
              </Text>
            </View>
          </View>
          <DurationTab duration={duration} setDuration={setDuration} />
        </View>
        <ProgramsTile
          ptonline={15}
          ptoffline={15}
          grouponline={5}
          groupoffline={5}
          recordedclasses={5}
          heading={'Custom Programme'}
          level={'Beginner'}
          user={'Username'}
        />
        <View style={{ width: '90%', alignSelf: 'center' }}>
          <HeadingComponent heading="ABOUT" />
          <Text style={styles.textArea}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum.
          </Text>
          <HeadingComponent heading="EQUIPMENTS" />
          <View style={styles.equipmentIconContainer}>
            <View>
              <StoveIcon height={33} width={33} fill={'#949494'} />
              <Text style={styles.equipmentIconText}>Stove</Text>
            </View>
            <View>
              <PanIcon height={33} width={33} fill={'#949494'} />
              <Text style={styles.equipmentIconText}>Pan</Text>
            </View>
            <View>
              <KnifeIcon height={33} width={33} fill={'#949494'} />
              <Text style={styles.equipmentIconText}>Knife</Text>
            </View>
            <View>
              <PotIcon height={33} width={33} fill={'#949494'} />
              <Text style={styles.equipmentIconText}>Pot</Text>
            </View>
          </View>
          <HeadingComponent heading="BENEFITS" />
          <Text style={styles.textArea}>
            Lorem ipsum dolor sit amet, consetetur{'\n\n'}Lorem ipsum dolor sit
            amet, consetetur sadipscing elitr,{'\n\n'}Lorem ipsum dolor sit
            amet, consetetursadipscing elitr, sed diam nonumy eirmod tempor
            invidunt ut labore et
          </Text>
          <HeadingComponent heading="HOW DOES IT WORK?" />
          <View style={{ paddingLeft: 10 }}>
            {howDoesData.map((item, index) => (
              <View key={index} style={styles.bulletPointContainer}>
                <View style={styles.circle} />
                <Text style={styles.bulletPointText}>{item.value}</Text>
              </View>
            ))}
          </View>
          <HeadingComponent heading="MUSCLE GROUPS" />
          <Image
            source={require('../assets/muscles.jpg')}
            style={styles.muscleImage}
          />
          <TouchableOpacity style={styles.subscribeBtn}>
            <Text style={styles.subscribeBtnText}>Subscribe</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <BottomTab activeTab={activeTab} setActiveTab={setActiveTab} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentScroll: {
    paddingBottom: 65,
  },
  header: {
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
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  tags: {
    flexDirection: 'row',
  },
  imageContainer: {
    flexDirection: 'row',
  },
  imageText: {
    color: '#cccccc',
    fontSize: 11,
  },
  creatorName: {
    color: '#a09c9a',
    fontSize: 11,
  },
  profileImage: {
    width: 34,
    height: 34,
    borderRadius: 34 / 2,
  },
  equipmentIconContainer: {
    paddingLeft: 10,
    paddingBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '70%',
  },
  equipmentIconText: {
    color: '#555555',
    textAlign: 'center',
    fontSize: 12,
    fontWeight: '500',
  },
  textArea: {
    color: '#5c5c5c',
    fontSize: 13.5,
    paddingBottom: 15,
    paddingLeft: 10,
  },
  circle: {
    width: 9,
    height: 9,
    backgroundColor: '#a05a91',
    borderRadius: 4.5,
    marginTop: 6,
  },
  bulletPointContainer: {
    flexDirection: 'row',
    paddingVertical: 10,
  },
  bulletPointText: {
    color: '#5c5c5c',
    fontSize: 13.5,
    paddingLeft: 10,
  },
  muscleImage: {
    height: 420,
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  subscribeBtn: {
    margin: 15,
    borderRadius: 10,
    paddingVertical: 10,
    backgroundColor: '#9c548c',
  },
  subscribeBtnText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 17,
  },
});

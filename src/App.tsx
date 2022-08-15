import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaView } from 'react-native';
import { HolisticProgram } from './screens/HolisticProgram.screens';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Programs } from './screens/Programs.screens';

const Stack = createStackNavigator();

export const App: React.FC = () => {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1 }} forceInset={{ top: 'always' }}>
          <Stack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName="Programs">
            <Stack.Screen name="Programs" component={Programs} />
            <Stack.Screen name="HolisticProgram" component={HolisticProgram} />
          </Stack.Navigator>
        </SafeAreaView>
      </SafeAreaProvider>
    </NavigationContainer>
  );
};


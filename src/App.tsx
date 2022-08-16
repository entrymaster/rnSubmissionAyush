import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaView } from 'react-native';
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  HttpLink,
} from '@apollo/client';
import { HolisticProgram } from './screens/HolisticProgram.screens';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Programs } from './screens/Programs.screens';

const Stack = createStackNavigator();

const link = new HttpLink({ uri: 'https://apidev4.sapien.systems/graphql' });

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

export const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <SafeAreaProvider>
          <SafeAreaView style={{ flex: 1 }} forceInset={{ top: 'always' }}>
            <Stack.Navigator
              screenOptions={{ headerShown: false }}
              initialRouteName="Programs">
              <Stack.Screen name="Programs" component={Programs} />
              <Stack.Screen
                name="HolisticProgram"
                component={HolisticProgram}
              />
            </Stack.Navigator>
          </SafeAreaView>
        </SafeAreaProvider>
      </NavigationContainer>
    </ApolloProvider>
  );
};

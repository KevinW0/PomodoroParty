import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TestScreen from './components/MainView';
import { Provider } from 'react-native-paper';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native'


const Tab = createMaterialBottomTabNavigator();

const TestScreen2 = () => (
  <View>
    <Text>
      Testing2
      </Text>
  </View>


)


export default function App() {
  return (
    <NavigationContainer>
      <Provider>
        <Tab.Navigator>
          <Tab.Screen name="Lobby" component={TestScreen} />
          <Tab.Screen name="Timer" component={TestScreen2} />
        </Tab.Navigator>
        <StatusBar style="auto" />
      </Provider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

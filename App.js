import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TestScreen from './components/MainView';
import { Provider } from 'react-native-paper';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native'
import {Context} from './context';
import Timerscreen from './components/TimerView';


const Tab = createMaterialBottomTabNavigator();

const TestScreen2 = () =>{

  const [code, setCode] = React.useContext(Context);



return (
  
  <View>
    <Text>
      {code}
      </Text>
  </View>


)}


export default function App() {
  const [code, setCode] = React.useState("TestCode");
  return (
    <NavigationContainer>
      <Provider>
        <Context.Provider value= {[code, setCode]}>
        <Tab.Navigator>
          <Tab.Screen name="Lobby" component={TestScreen} />
          <Tab.Screen name="Timer" component={Timerscreen} />
        </Tab.Navigator>
        <StatusBar style="auto" />
        </Context.Provider>
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

import React from 'react';
import {
  Text,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './Screens/Home';
import Settings from './Screens/Settingss';
import Users from './Screens/Users';

const Stack = createStackNavigator();

const App = () => {
 return(
  <NavigationContainer>
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name="Home" component={Home}/>
      <Stack.Screen name="Settings" component={Settings}/>
      <Stack.Screen name="Users" component={Users}/>
    </Stack.Navigator>
  </NavigationContainer>
 )
};

export default App;

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Splash, Login, Session4, Detail1, Detail2, Detail3, Add, Detail} from './pages';

const App = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator 
        screenOptions={{
          headerShown: false
        }} 
        initialRouteName="Landing">
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Session4" component={Session4} />
        <Stack.Screen name="Detail1" component={Detail1} />
        <Stack.Screen name="Detail2" component={Detail2} />
        <Stack.Screen name="Detail3" component={Detail3} />
        <Stack.Screen name="Add" component={Add} />
        <Stack.Screen name="Detail" component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

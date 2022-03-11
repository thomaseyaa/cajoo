import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Screens
import Landing from '../features/onboarding/landing/landing.screen';
import Login from '../features/onboarding/login/login.screen';
import LoginPhone from '../features/onboarding/login/loginPhone.screen';
import ConfirmPhone from '../features/onboarding/login/confirmPhone.screen';

// Rooter
const Stack = createNativeStackNavigator();
const rooter = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="landing" component={Landing} />
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="loginPhone" component={LoginPhone} />
        <Stack.Screen name="confirmPhone" component={ConfirmPhone} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default rooter;

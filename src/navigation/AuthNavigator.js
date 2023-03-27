import React from 'react';
import SignInWelcomeScreen from '../screens/authScreens/SignInWelcomeScreen';
import SignInScreen from '../screens/authScreens/SignInScreen';
import {TransitionPresets, createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import RootClientTabs from './ClientTabs';

const AuthStack = createStackNavigator();
function AuthNavigator() {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="SignInWelcomeScreen"
        component={SignInWelcomeScreen}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />
      <AuthStack.Screen
        name="SignInScreen"
        component={SignInScreen}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />
      <AuthStack.Screen
        name="RootClientTabs"
        component={RootClientTabs}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />
    </AuthStack.Navigator>
  );
}

export default AuthNavigator;

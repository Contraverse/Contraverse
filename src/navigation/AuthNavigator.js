import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { LoginScreen, SignupScreen, SplashScreen } from '../screens';

export default createStackNavigator({
    Splash: SplashScreen,
    Login: LoginScreen,
    Signup: SignupScreen
})
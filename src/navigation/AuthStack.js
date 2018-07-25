import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { LoginScreen, SignupScreen, SplashScreen, ImagePicker, AdditionalInfo } from '../screens';

export default createStackNavigator({
    Splash: SplashScreen,
    Login: LoginScreen,
    Signup: SignupScreen,
    AdditionalInfo,
    ImagePicker
}, {
    headerMode: 'none',
    navigationOptions: {
        headerVisible: false,
    }
});
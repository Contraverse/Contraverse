import React from 'react';
import { createDrawerNavigator } from 'react-navigation';
import MainTabNavigator from '../MainTabNavigator';

export default createDrawerNavigator({
    Tabs: MainTabNavigator
})
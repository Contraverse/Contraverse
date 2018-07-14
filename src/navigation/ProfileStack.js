import React from 'react';
import {Platform} from "react-native";
import { ProfileScreen } from "../screens";
import { createStackNavigator } from 'react-navigation';
import TabBarIcon from '../components/TabBarIcon';

const ProfileStack = createStackNavigator({
    Settings: ProfileScreen,
});

ProfileStack.navigationOptions = {
    tabBarLabel: 'Profile',
    tabBarIcon: ({focused}) => (
        <TabBarIcon
            focused={focused}
            name={Platform.OS === 'ios' ? `ios-options${focused ? '' : '-outline'}` : 'md-options'}
        />
    ),
};

export default ProfileStack;
import React from 'react';
import {Platform} from "react-native";
import TabBarIcon from '../components/TabBarIcon';
import { createStackNavigator } from 'react-navigation';
import { DebateList, Chatroom, OpeningScreen } from '../screens';

const DebateStack = createStackNavigator({
    DebateList,
    OpeningScreen,
    Chatroom
});

DebateStack.navigationOptions = {
    tabBarLabel: 'Debates',
    tabBarIcon: ({focused}) => (
        <TabBarIcon
            focused={focused}
            name={Platform.OS === 'ios' ? `ios-link${focused ? '' : '-outline'}` : 'md-link'}
        />
    ),
};

export default DebateStack;
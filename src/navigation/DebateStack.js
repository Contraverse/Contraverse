import React from 'react';
import {Platform} from "react-native";
import TabBarIcon from '../components/TabBarIcon';
import { createStackNavigator } from 'react-navigation';
import { DebateList, Chatroom } from '../screens';

const DebateStack = createStackNavigator({
    DebateList: DebateList,
    Chatroom: Chatroom
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
import React from 'react';
import {Platform} from "react-native";
import TabBarIcon from '../../components/TabBarIcon';
import { createStackNavigator } from 'react-navigation';
import { Chatroom, OpeningScreen } from '../../screens';
import MessagesNavigator from './MessagesNavigator';

const DebateStack = createStackNavigator({
    MessagesNavigator,
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
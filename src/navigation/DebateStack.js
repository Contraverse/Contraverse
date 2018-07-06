import React from 'react';
import {Platform} from "react-native";
import TabBarIcon from '../components/TabBarIcon';
import { createStackNavigator, createMaterialTopTabNavigator } from 'react-navigation';
import { DebateList, SpectateList, Chatroom, OpeningScreen } from '../screens';


const MessagesNavigator = createMaterialTopTabNavigator({
    DebateList,
    SpectateList
})

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
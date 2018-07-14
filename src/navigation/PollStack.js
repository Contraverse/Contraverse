import React from 'react';
import {Platform} from "react-native";
import TabBarIcon from '../components/TabBarIcon';
import { createStackNavigator } from 'react-navigation';
import {PollScreen, QuestionScreen, ResultScreen} from "../screens";

const PollStack = createStackNavigator({
    Polls: PollScreen,
    Question: QuestionScreen,
    Results: ResultScreen
});

PollStack.navigationOptions = {
    tabBarLabel: 'Polls',
    tabBarIcon: ({focused}) => (
        <TabBarIcon
            focused={focused}
            name={
                Platform.OS === 'ios'
                    ? `ios-information-circle${focused ? '' : '-outline'}`
                    : 'md-information-circle'
            }
        />
    ),
};

export default PollStack;
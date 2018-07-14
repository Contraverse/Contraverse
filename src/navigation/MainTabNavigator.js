import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';


import PollStack from './PollStack';
import DebateStack from './DebateStack';
import ProfileStack from './ProfileStack';


export default createBottomTabNavigator({
    PollStack,
    DebateStack,
    ProfileStack,
});

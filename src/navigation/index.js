import React from 'react';
import {createSwitchNavigator} from 'react-navigation';

import DrawerNavigator from './DrawerNavigator';
import AuthStack from './AuthStack';

export default createSwitchNavigator({
    Auth: AuthStack,
    Main: DrawerNavigator,
});
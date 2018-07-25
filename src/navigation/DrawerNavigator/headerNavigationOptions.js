import React from 'react';
import { Text } from 'react-native';


const MenuButton = ({ navigation }) => (
    <Text
        onPress={() => navigation.openDrawer()}
    >
        Menu
    </Text>
)

export default ({ navigation }) => ({
    title: 'Controverse',
    headerLeft: <MenuButton navigation={navigation} />,
    headerVisible: false
})
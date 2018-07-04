import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
import styles from './styles';

const URI = 'https://firebasestorage.googleapis.com/v0/b/controverse-f770c.appspot.com/o/UserIcons%2Fembassy.png?alt=media&token=5a5c899f-dbd4-43cb-9dbb-ec58a66b5979';

class ProfileScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image
                    style={styles.icon}
                    source={{ uri: URI }}
                />
                <Text>Hello World</Text>
            </View>
        )
    }
}

export default ProfileScreen;
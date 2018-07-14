import React from 'react';
import { TouchableWithoutFeedback, View, Text } from 'react-native';
import styles from './styles';

const DebateCard = ({ lastMessage, onPress }) => {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.container}>
                <Text>{lastMessage}</Text>
            </View>
        </TouchableWithoutFeedback>
    );
};


export default DebateCard;
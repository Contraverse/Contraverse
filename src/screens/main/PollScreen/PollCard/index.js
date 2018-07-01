import React from 'react';
import { TouchableWithoutFeedback, View, Text } from 'react-native';
import styles from './styles';

export default PollCard = ({ question, onPress }) => {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.container}>
                <Text style={styles.text}>
                    {question}
                </Text>
            </View>
        </TouchableWithoutFeedback>
    );
}


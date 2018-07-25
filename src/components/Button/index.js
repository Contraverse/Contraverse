import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './styles';

const Button = ({ title, onPress, style, textStyle }) => {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.container, style]}>
            <Text style={[styles.text, textStyle]}>
                {title}
            </Text>
        </TouchableOpacity>
    );
}

export default Button;
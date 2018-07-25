import React from 'react';
import { View, TextInput } from 'react-native';
import { styles, inputTextColor } from "./styles";


const Input = ({ value, onChangeText, placeholder, secureTextEntry }) => {
    return (
       <View style={styles.container}>
           <TextInput
               style={styles.input}
               placeholderTextColor={inputTextColor}
               secureTextEntry={secureTextEntry}
               placeholder={placeholder}
               onChangeText={onChangeText}
               value={value}
               autoCorrect={false}
               autoCapitalize='none'
           />
       </View>
    )
};

export default Input;
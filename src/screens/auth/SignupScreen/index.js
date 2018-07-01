import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';
import { Input } from '../../../components';
import * as actions from './actions';
import styles from './styles';

class SignupScreen extends Component {
    onPress = () => {
        this.props.signup();
    }

    render() {
        return (
            <View>
                <Text>Login</Text>
                <Input
                    placeholder='Username'
                />
                <Input
                    secureTextEntry
                    placeholder='Password'
                />
                <Button
                    title='Login'
                    onPress={this.onPress}
                />
            </View>
        );
    }
}

export default connect(null, actions)(SignupScreen);
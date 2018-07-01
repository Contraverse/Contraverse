import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';
import { Input } from '../../../components';
import * as actions from './actions';
import styles from './styles';

class LoginScreen extends Component {
    constructor() {
        super();
        this.state = { email: '', password: ''};
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.user)
            this.props.navigation.navigate('Main');
    }

    updateForm(key, value) {
        this.setState({ [key]: value });
    }

    onPress = () => {
        const { email, password } = this.state;
        this.props.login(email, password);
    }

    renderButton() {
        if(!this.props.loading) {
            return (
                <Button
                    title='Login'
                    onPress={this.onPress}
                />
            );
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>
                    Login
                </Text>
                <Input
                    placeholder='Email'
                    onChangeText={text => this.updateForm('email', text)}
                    value={this.state.email}
                />
                <Input
                    secureTextEntry
                    placeholder='Password'
                    onChangeText={text => this.updateForm('password', text)}
                    value={this.state.password}
                />
                {this.renderButton()}
            </View>
        );
    }
}

const mapStateToProps = ({ auth }) => {
    return auth;
}

export default connect(mapStateToProps, actions)(LoginScreen);
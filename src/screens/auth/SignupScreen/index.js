import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';
import { Input } from '../../../components';
import * as actions from './actions';
import styles from './styles';

class SignupScreen extends Component {
    constructor() {
        super();
        this.state = { username: '', email: '', password: ''};
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.user)
            this.props.navigation.navigate('Main');
    }

    updateForm(key, value) {
        this.setState({ [key]: value });
    }

    onPress = () => {
        const { email, password, username } = this.state;
        this.props.signup(email, password, username);
    }

    renderButton() {
        if(!this.props.loading) {
            return (
                <Button
                    title='Sign Up'
                    onPress={this.onPress}
                />
            );
        }
    }

    render() {
        const { username, email, password } = this.state;
        return (
            <View style={styles.container}>
                <Text style={styles.title}>
                    Sign Up
                </Text>
                <Input
                    placeholder='Username'
                    onChangeText={text => this.updateForm('username', text)}
                    value={username}
                />
                <Input
                    placeholder='Email'
                    onChangeText={text => this.updateForm('email', text)}
                    value={email}
                />
                <Input
                    secureTextEntry
                    placeholder='Password'
                    onChangeText={text => this.updateForm('password', text)}
                    value={password}
                />
                {this.renderButton()}
                <Text>{JSON.stringify(this.props.error)}</Text>
            </View>
        );
    }
}

const mapStateToProps = ({ auth }) => auth;

export default connect(mapStateToProps, actions)(SignupScreen);
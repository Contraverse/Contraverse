import React, { Component } from 'react';
import { View, Text, Button, Image } from 'react-native';
import { connect } from 'react-redux';
import { Input } from '../../../components';
import { signup } from '../../../actions/auth/authActions';
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

    onImagePickerPress = () => {
        this.props.navigation.navigate('ImagePicker')
    }

    onSubmit = () => {
        const { email, password, username } = this.state;
        const { imageURI } = this.props;
        this.props.signup(email, password, username, imageURI);
    }

    renderImage() {
        const uri = this.props.imageURI;
        if(uri) {
            return (
                <Image
                    style={styles.image}
                    source={{ uri }}
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
                <View style={styles.imagePickerContainer}>
                    {this.renderImage()}
                    <Button
                        title='Select Avatar'
                        onPress={this.onImagePickerPress}
                    />
                </View>
                <Button
                    title='Sign Up'
                    onPress={this.onSubmit}
                />
                <Text>{JSON.stringify(this.props.error)}</Text>
            </View>
        );
    }
}

const mapStateToProps = ({ auth }) => auth;

export default connect(mapStateToProps, { signup })(SignupScreen);
import React, { Component } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { GoogleSigninButton } from 'react-native-google-signin';
import { connect } from 'react-redux';
import { Button, Input } from '../../../components';
import * as actions from '../../../actions/auth/authActions';
import styles from './styles';

class LoginScreen extends Component {
    onPress = () => {
        const { intervalID, email, password, navigation, login } = this.props;
        login(intervalID, email, password, navigation );
    };

    onSignupPress = () => {
        this.props.navigation.navigate('Signup');
    };

    onGooglePress = () => {
        const { intervalID, navigation, googleAuth } = this.props;
        googleAuth(intervalID, navigation);
    };

    render() {
        const { email, password, updateForm } = this.props;
        return (
            <View style={styles.container}>
                <Text style={styles.header}>
                    Controverse
                </Text>
                <View style={styles.content}>
                    <Text style={styles.title}>
                        Login
                    </Text>
                    <Input
                        placeholder='Email'
                        onChangeText={text => updateForm('email', text)}
                        value={email}
                    />
                    <Input
                        secureTextEntry
                        placeholder='Password'
                        onChangeText={text => updateForm('password', text)}
                        value={password}
                    />
                    <Button
                        style={styles.loginButton}
                        title='Login'
                        onPress={this.onPress}
                    />
                    <View style={styles.centeredContent}>
                        <Text style={styles.forgotPassword}>
                            Forgot Password
                        </Text>
                        <View
                            style={styles.divider}
                        />
                        <GoogleSigninButton
                            style={{ width: 190, height: 48 }}
                            size={GoogleSigninButton.Size.Wide}
                            color={GoogleSigninButton.Color.Light}
                            onPress={this.onGooglePress}
                        />
                      <Text>{this.props.error.message}</Text>
                    </View>
                </View>
                <View style={styles.footer}>
                    <Text style={styles.footerText}>
                        Not a member?
                    </Text>
                    <TouchableOpacity onPress={this.onSignupPress}>
                        <Text style={styles.signupButton}>
                            Sign Up
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const mapStateToProps = ({ auth, splash }) => {
    return { ...auth, ...splash };
};

export default connect(mapStateToProps, actions)(LoginScreen);
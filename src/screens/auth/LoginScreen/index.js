import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { GoogleSigninButton, GoogleSignin } from 'react-native-google-signin';
import { connect } from 'react-redux';
import { Input } from '../../../components';
import * as actions from '../../../actions/auth/authActions';
import styles from './styles';

class LoginScreen extends Component {
    onPress = () => {
        const { intervalID, email, password, navigation, login } = this.props;
        login(intervalID, email, password, navigation );
    }

    onGooglePress = () =>{
        const { intervalID, navigation, googleAuth } = this.props;
        googleAuth(intervalID, navigation);
    }

    render() {
        const { email, password, updateForm } = this.props;
        return (
            <View style={styles.container}>
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
                    title='Login'
                    onPress={this.onPress}
                />
                <GoogleSigninButton
                    style={{ width: 200, height: 48 }}
                    size={GoogleSigninButton.Size.Wide}
                    color={GoogleSigninButton.Color.Dark}
                    onPress={this.onGooglePress}
                />
                <Text>{JSON.stringify(this.props.error)}</Text>
            </View>
        );
    }
}

const mapStateToProps = ({ auth, splash }) => {
    return { ...auth, ...splash };
};

export default connect(mapStateToProps, actions)(LoginScreen);
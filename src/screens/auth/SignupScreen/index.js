import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { Button, Input } from '../../../components';
import * as actions from '../../../actions/auth/authActions';
import styles from './styles';

class SignupScreen extends Component {
    onLoginPress = () => {
        this.props.navigation.pop();
    }

    onSubmit = () => {
        const { email, password, username, intervalID, imageURI, gender, navigation, signup } = this.props;
        const user = { avatar: imageURI, gender, username };
        signup(intervalID, email, password, user, navigation);
    }

    render() {
        const { username, email, password, updateForm } = this.props;
        return (
            <View style={styles.container}>
                <Text style={styles.header}>
                    Controverse
                </Text>
                <View style={styles.content}>
                    <Text style={styles.title}>
                        Signup
                    </Text>
                    <Input
                        placeholder='Username'
                        onChangeText={text => updateForm('username', text)}
                        value={username}
                    />
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
                        style={styles.submitButton}
                        title='Register'
                        onPress={this.onSubmit}
                    />
                    <Text>{this.props.error}</Text>
                </View>
                <View style={styles.footer}>
                    <Text style={styles.footerText}>
                        Already a member?
                    </Text>
                    <TouchableOpacity onPress={this.onLoginPress}>
                        <Text style={styles.loginButton}>
                            Login
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const mapStateToProps = ({ auth, splash }) => {
    return { ...auth, ...splash };
}

export default connect(mapStateToProps, actions)(SignupScreen);
import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';
import { Input } from '../../../components';
import * as actions from '../../../actions/auth/authActions';
import styles from './styles';

class LoginScreen extends Component {
    onPress = () => {
        const { intervalID, email, password, navigation, login } = this.props;
        login(intervalID, email, password, navigation );
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
                <Text>{JSON.stringify(this.props.error)}</Text>
            </View>
        );
    }
}

const mapStateToProps = ({ auth, splash }) => {
    return { ...auth, ...splash };
};

export default connect(mapStateToProps, actions)(LoginScreen);
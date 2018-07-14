import React, { Component } from 'react';
import { View, Text, Button, Image, PickerIOS } from 'react-native';
import { connect } from 'react-redux';
import { Input } from '../../../components';
import * as actions from '../../../actions/auth/authActions';
import styles from './styles';
import {GoogleSigninButton} from "react-native-google-signin";

class SignupScreen extends Component {
    onImagePickerPress = () => {
        this.props.navigation.navigate('ImagePicker')
    }

    onGooglePress = () =>{
        const { intervalID, navigation, googleAuth } = this.props;
        googleAuth(intervalID, navigation);
    }

    onSubmit = () => {
        const { email, password, username, intervalID, imageURI, gender, navigation, signup } = this.props;
        const user = { avatar: imageURI, gender, username };
        signup(intervalID, email, password, user, navigation);
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
        const { username, email, password, updateForm, gender } = this.props;
        return (
            <View style={styles.container}>
                <Text style={styles.title}>
                    Sign Up
                </Text>
                <GoogleSigninButton
                    style={{ width: 200, height: 48 }}
                    size={GoogleSigninButton.Size.Wide}
                    color={GoogleSigninButton.Color.Dark}
                    onPress={this.onGooglePress}
                />
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
                <View style={styles.imagePickerContainer}>
                    {this.renderImage()}
                    <Button
                        title='Select Avatar'
                        onPress={this.onImagePickerPress}
                    />
                </View>
                <View style={styles.picker}>
                    <PickerIOS
                        selectedValue={gender}
                        style={{flex: 1}}
                        onValueChange={value => updateForm('gender', value)}
                    >
                        <PickerIOS.Item label='Male' value='male' />
                        <PickerIOS.Item label='Female' value='female' />
                    </PickerIOS>
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

const mapStateToProps = ({ auth, splash }) => {
    return { ...auth, ...splash };
}

export default connect(mapStateToProps, actions)(SignupScreen);
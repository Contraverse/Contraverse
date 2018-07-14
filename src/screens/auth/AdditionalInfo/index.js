import React, { Component } from 'react';
import { View, Text, Button, Image, PickerIOS } from 'react-native';
import { connect } from 'react-redux';
import { Input } from '../../../components';
import * as actions from '../../../actions/auth/authActions';
import styles from './styles';

class AdditionalInfoScreen extends Component {
    onImagePickerPress = () => {
        this.props.navigation.navigate('ImagePicker')
    }

    onSubmit = () => {
        const { username, imageURI, gender, addAdditionalInfo, navigation } = this.props;
        const user = { avatar: imageURI, gender, username };
        addAdditionalInfo(user, navigation);
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
        const { username, updateForm, gender } = this.props;
        return (
            <View style={styles.container}>
                <Text style={styles.title}>
                    Add Additional Info
                </Text>
                <Input
                    placeholder='Username'
                    onChangeText={text => updateForm('username', text)}
                    value={username}
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
                    title='Submit'
                    onPress={this.onSubmit}
                />
            </View>
        );
    }
}

const mapStateToProps = ({ auth, splash }) => {
    return { ...auth, ...splash };
}

export default connect(mapStateToProps, actions)(AdditionalInfoScreen);
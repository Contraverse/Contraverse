import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
import { connect } from 'react-redux';
import styles from './styles';
import * as actions from '../../../actions/profile/profileActions';

class ProfileScreen extends Component {
    componentWillMount() {
        const { userID, fetchUserData } = this.props;
        fetchUserData(userID);
    }

    renderLoading() {
        return <View />;
    }

    renderMain() {
        const { imageURI, username } = this.props;
        return (
            <View style={styles.container}>
                <Image
                    style={styles.icon}
                    source={{ uri: imageURI }}
                />
                <Text>{username}</Text>
            </View>
        );
    }

    render() {
        if(this.props.imageURI) {
            return this.renderMain();
        }
        return this.renderLoading();
    }
}

mapStateToProps = ({ profile, auth }) => {
    return { ...profile, userID: auth.user.uid };
}

export default connect(mapStateToProps, actions)(ProfileScreen);
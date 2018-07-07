import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
import { connect } from 'react-redux';
import styles from './styles';
import * as actions from '../../../actions/profile/profileActions';

class ProfileScreen extends Component {
    renderLoading() {
        return <View />;
    }

    renderMain() {
        const { avatar, username } = this.props.user;
        return (
            <View style={styles.container}>
                <Image
                    style={styles.icon}
                    source={{ uri: avatar }}
                />
                <Text>{username}</Text>
            </View>
        );
    }

    render() {
        if(this.props.user) {
            return this.renderMain();
        }
        return this.renderLoading();
    }
}

mapStateToProps = ({ auth }) => {
    return { user: auth.user };
}

export default connect(mapStateToProps, actions)(ProfileScreen);
import React, {Component} from 'react';
import {Image, Text, View} from 'react-native';
import {connect} from 'react-redux';
import styles from './styles';
import * as actions from '../../../actions/profile/profileActions';
import LoadingScreen from '../../LoadingScreen'

class ProfileScreen extends Component {
  renderMain() {
    const {avatar, username} = this.props.user;
    return (
      <View style={styles.container}>
        <Image
          style={styles.icon}
          source={{uri: avatar}}
        />
        <Text>{username}</Text>
      </View>
    );
  }

  render() {
    if (this.props.user) {
      return this.renderMain();
    }
    return <LoadingScreen />;
  }
}

mapStateToProps = ({auth}) => {
  return {user: auth.user};
}

export default connect(mapStateToProps, actions)(ProfileScreen);
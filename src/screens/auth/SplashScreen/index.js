import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import styles from './styles';

class SplashScreen extends Component {
    onLoginPress = () => {
        this.props.navigation.navigate('Login');
    }

    onSignupPress = () => {
        this.props.navigation.navigate('Signup')
    }

    render() {
        return (
          <View style={styles.container}>
              <Text style={styles.title}>
                  Welcome to Contraverse!
              </Text>
              <Button
                  title='Login'
                  onPress={this.onLoginPress}
              />
              <Button
                  title='Sign Up'
                  onPress={this.onSignupPress}
              />
          </View>
        );
    }
}

export default SplashScreen;
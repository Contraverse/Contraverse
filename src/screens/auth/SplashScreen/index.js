import React, { Component } from 'react';
import { View, ScrollView, Image, Text, Button, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import styles from './styles';
import { setIntervalID } from "../../../actions/auth/splashActions";

const screenWidth = Dimensions.get('window').width;


const BACKGROUND_IMAGES = [
    require('../../../../assets/images/background/capitol.jpeg'),
    require('../../../../assets/images/background/supremeCourt.jpeg'),
    require('../../../../assets/images/background/whitehouse.jpg'),
]

class SplashScreen extends Component {
    componentDidMount() {
        let scrollValue = 0;
        const intervalID = setInterval(function() {
            if(scrollValue === screenWidth * (BACKGROUND_IMAGES.length - 1))
                scrollValue = 0;
            else
                scrollValue += screenWidth;
           _scrollView.scrollTo({x: scrollValue})
        }, 3000);
        this.props.setIntervalID(intervalID);
    }

    onLoginPress = () => {
        this.props.navigation.navigate('Login');
    }

    onSignupPress = () => {
        this.props.navigation.navigate('Signup')
    }

    renderImages() {
        return BACKGROUND_IMAGES.map((image, index) => {
            return (
                <Image
                    style={styles.backgroundImage}
                    source={image}
                    key={index}
                />
            );
        })
    }

    render() {
        return (
          <View style={styles.container}>
              <ScrollView
                  style={styles.background}
                  ref={(scrollView) => { _scrollView = scrollView; }}
                  horizontal={true} pagingEnabled={true}
              >
                  {this.renderImages()}
              </ScrollView>
              <View style={styles.content}>
                  <Text style={styles.title}>
                      Welcome to Controverse!
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
          </View>
        );
    }
}

export default connect(null, { setIntervalID })(SplashScreen);
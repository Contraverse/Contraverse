import React, { Component } from 'react';
import { View, ScrollView, Image, Text, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import styles from './styles';
import { Button } from '../../../components'
import * as actions from "../../../actions/auth/splashActions";

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

    onButtonPress = () => {
        this.props.navigation.navigate('Login');
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
                  <Text style={styles.subtitle}>
                      A place to share and build opinions
                  </Text>
              </View>
              <View style={styles.footer}>
                  <Button
                      style={styles.button}
                      textStyle={styles.buttonText}
                      title='GET STARTED'
                      onPress={this.onButtonPress}
                  />
              </View>
          </View>
        );
    }
}

export default connect(null, actions)(SplashScreen);
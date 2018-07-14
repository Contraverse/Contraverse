import React, { Component } from 'react';
import { Image, View, TouchableOpacity } from 'react-native';
import Grid from 'react-native-grid-component';
import { connect } from 'react-redux';
import styles from './styles';
import * as actions from '../../../actions/auth/imagePickerActions';

class ImagePicker extends Component {
    componentWillMount() {
        this.props.fetchImages();
    }

    onPress = (uri) => {
        const { selectImage, navigation } = this.props;
        selectImage(uri, navigation);
    }

    renderImage = (uri, index) => {
        return (
            <TouchableOpacity onPress={() => this.onPress(uri)} key={index}>
                <Image
                    source={{ uri }}
                    style={styles.icon}
                />
            </TouchableOpacity>
        )
    }


    renderPlaceholder = (index) => (
        <View
            style={styles.icon}
            key={index}
        />
    )

    renderLoading() {
        return <View />;
    }

    renderMain() {
        return (
            <Grid
                style={styles.container}
                renderItem={this.renderImage}
                renderPlaceholder={this.renderPlaceholder}
                data={this.props.images}
                itemsPerRow={3}
            />
        );
    }

    render() {
        if(this.props.images) {
            return this.renderMain();
        }
        return this.renderLoading();
    }
}

const mapStateToProps = ({ imagePicker }) => imagePicker;

export default connect(mapStateToProps, actions)(ImagePicker)
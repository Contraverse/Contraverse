import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export default {
    maxWidth: width,
    maxHeight: height,
    isSmallDevice :width < 375,
};

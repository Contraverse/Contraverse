import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export default {
    maxWidth: width,
    maxHeight: height,
    isSmallDevice: width < 375,

    header: {
        fontSize: 24,
        marginTop: 25
    },
    footer: {
        height: 72,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    }
};

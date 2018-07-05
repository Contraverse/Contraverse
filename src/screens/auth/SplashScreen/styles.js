import { StyleSheet } from 'react-native';
import commonStyles from '../../../styles/common';


export default StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent'
    },
    title: {
        fontSize: 20
    },
    background: {
        position: 'absolute',
        width: commonStyles.maxWidth,
        height: commonStyles.maxHeight,
        top: 0,
        left: 0
    },
    backgroundImage: {
        flex: 1,
        width: commonStyles.maxWidth,
        height: commonStyles.maxHeight,
    }
})
import { StyleSheet } from 'react-native';
import { commonStyles } from '../../../styles';


export default StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor: 'transparent',
        paddingBottom: 32
    },
    title: {
        fontSize: 44,
        color: '#FFFFFF'
    },
    subtitle: {
        color: '#FFFFFF',
        fontSize: 16,
        marginVertical: 16
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
    },
    footer: commonStyles.footer,
    button: {
        height: 72
    },
    buttonText: {
        fontSize: 20
    }
})
import { StyleSheet } from 'react-native';

const inputTextColor = '#a3a3a3';
const styles = StyleSheet.create({
    container: {
        height: 64,
        width: '100%',
        marginBottom: 12,
        backgroundColor: '#808080',
        borderRadius: 2,
        opacity: 50
    },
    input: {
        // container
        flex: 1,

        // text
        marginLeft: 16,
        fontSize: 16,
        color: inputTextColor,
    },
});

export {
    inputTextColor, styles
}
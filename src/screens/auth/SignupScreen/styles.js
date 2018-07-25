import { StyleSheet } from 'react-native';
import {commonStyles, colors} from "../../../styles";

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    header: commonStyles.header,
    content: {
        flex: 1,
        width: '80%',
        justifyContent: 'center'
    },
    centeredContent: {
        alignItems: 'center'
    },
    title: {
        fontSize: 32,
        color: '#FFF',
        marginBottom: 24
    },
    submitButton: {
        height: 48,
        marginTop: 18,
        marginBottom: 16
    },
    forgotPassword: {
        color: '#b5b5b5',
        marginBottom: 36
    },
    divider: {
        backgroundColor: '#a3a3a3',
        width: '100%',
        height: StyleSheet.hairlineWidth,
        marginBottom: 24
    },
    footer: {
        ...commonStyles.footer,
        backgroundColor: '#000',
    },
    footerText: {
        color: '#fff',
        fontSize: 18,
        marginRight: 16
    },
    loginButton: {
        color: colors.primary,
        fontSize: 18
    }
})
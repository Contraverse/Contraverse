import React, { Component } from 'react';
import { View, Button } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import { connect } from 'react-redux';
import LoadingScreen from '../../LoadingScreen';
import * as actions from '../../../actions/debates/chatroomActions';

class Chatroom extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerRight: (
                <Button
                    title={'Details'}
                    onPress={() => navigation.navigate('ChatDetails')}
                />
            )
        }
    }

    componentWillMount() {
        const { chatID, initChatroom } = this.props;
        initChatroom(chatID);
    }

    onDetailsPress = () => {
        this.props.navigation.navigate('ChatDetails');
    }

    getChatProps() {
        const { messages, userID, chatID, sendMessages, spectate } = this.props;
        const props = {
            messages,
            user: {
                _id: userID
            },
            onSend: messages => sendMessages(chatID, messages)
        };
        if(spectate) {
            props.renderInputToolbar = () => <View />;
        }
        return props;
    }

    renderMain() {
        return (
            <GiftedChat
                { ...this.getChatProps() }
            />
        );
    }

    renderLoading() {
        return <View />;
    }

    render() {
        if(this.props.messages) {
            return this.renderMain();
        }
        return <LoadingScreen />;
    }
}

mapStateToProps = ({ chatroom, auth }) => {
    return { ...chatroom, userID: auth.user.uid};
}

export default connect(mapStateToProps, actions)(Chatroom);
import React, { Component } from 'react';
import { View } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import { connect } from 'react-redux';
import * as actions from '../../../actions/debates/chatroomActions';

class Chatroom extends Component {
    componentWillMount() {
        const { chatID, initChatroom } = this.props;
        initChatroom(chatID);
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
        return this.renderLoading();
    }
}

mapStateToProps = ({ chatroom, auth }) => {
    return { ...chatroom, userID: auth.user.uid};
}

export default connect(mapStateToProps, actions)(Chatroom);
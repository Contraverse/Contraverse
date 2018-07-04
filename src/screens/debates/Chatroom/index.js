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

    renderMain() {
        const { messages, userID, chatID, sendMessages } = this.props;
        return (
            <GiftedChat
                messages={messages}
                user={{
                    _id: userID
                }}
                onSend={messages => sendMessages(chatID, messages)}
            />
        );
    }

    renderLoading() {
        return <View />;
    }

    render() {
        const { messages, users } = this.props;
        if(messages && users) {
            return this.renderMain();
        }
        return this.renderLoading();
    }
}

mapStateToProps = ({ chatroom, auth }) => {
    return { ...chatroom, userID: auth.user.uid};
}

export default connect(mapStateToProps, actions)(Chatroom);
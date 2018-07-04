import React, { Component } from 'react';
import { GiftedChat } from 'react-native-gifted-chat';
import { connect } from 'react-redux';
import * as actions from '../../../actions/debates/chatroomActions';

class Chatroom extends Component {
    componentWillMount() {
        const { chatID, fetchMessages } = this.props;
        fetchMessages(chatID);
    }

    componentDidMount() {
        const { chatID, initMessageListener } = this.props;
        initMessageListener(chatID);
    }

    render() {
        const { messages, userID, chatID, sendMessages } = this.props;
        return (
            <GiftedChat
                messages={messages}
                user={{
                    _id: userID
                }}
                onSend={messages => sendMessages(chatID, messages)}
            />
        )
    }
}

mapStateToProps = ({ chatroom, auth }) => {
    return { ...chatroom, userID: auth.user.user.uid};
}

export default connect(mapStateToProps, actions)(Chatroom);
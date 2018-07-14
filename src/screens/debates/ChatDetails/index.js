import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Button } from 'react-native';
import * as actions from '../../../actions/debates/chatDetailsActions';

class ChatDetails extends Component {
    onLeaveConversation = () => {
        const { user, chatID, leaveConversation, navigation } = this.props;
        leaveConversation(user.uid, chatID, navigation);
    }

    render() {
        return (
          <View>
              <Button
                  title='Leave Conversation'
                  onPress={this.onLeaveConversation}
              />
          </View>
        );
    }
}

const mapStateToProps = ({ auth, chatroom }) => {
    return { user: auth.user, chatID: chatroom.chatID };
}

export default connect(mapStateToProps, actions)(ChatDetails);
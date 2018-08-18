import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../../../actions/polls/resultActions';
import styles from './styles';

class ResultScreen extends Component {
  findDebate = () => {
    const { category, poll, findDebate, navigation } = this.props;
    return findDebate(poll.id, category, navigation);
  };
  findSpectate = () => {
    const { poll, navigation, findSpectate } = this.props;
    return findSpectate(poll.id, navigation);
  };

  componentWillMount() {
    this.props.fetchResults(this.props.poll.id);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>
          Results
        </Text>
        <Button
          title='Debate'
          onPress={this.findDebate}
        />
        <Button
          title='Spectate'
          onPress={this.findSpectate}
        />
        <Text>{JSON.stringify(this.props.results)}</Text>
      </View>
    );
  }
}

const mapStateToProps = ({ polls, results }) => {
  const poll = polls.currentPoll;
  return { ...results, poll };
};

export default connect(mapStateToProps, actions)(ResultScreen);
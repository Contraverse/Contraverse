import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../../../actions/polls/questionActions';
import styles from './styles';

class QuestionScreen extends Component {
  onSelect = (index) => {
    this.props.selectAnswer(index);
  };

  onSubmit = () => {
    if (this.props.selectedAnswer !== null) {
      const { submit, poll, navigation } = this.props;
      submit(poll.id, this.props.selectedAnswer, navigation);
    }
    else {
      alert("Check to see if you have answered all the questions");
    }
  };

  renderAnswerChoices() {
    return this.props.poll.answers.map((answer, index) => {
      return (
        <Button
          title={answer}
          onPress={() => this.onSelect(index)}
        />
      )
    })
  }

  render() {
    const { poll } = this.props;
    return (
      <View style={styles.container}>
        <Text>
          {poll.question}
        </Text>
        {this.renderAnswerChoices()}
        <Button
          title='Submit'
          onPress={this.onSubmit}
        />
      </View>
    );
  }
}

const mapStateToProps = ({ polls, questions }) => {
  return { ...questions, poll: polls.currentPoll };
};

export default connect(mapStateToProps, actions)(QuestionScreen);
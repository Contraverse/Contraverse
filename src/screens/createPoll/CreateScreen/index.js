import React, { Component } from 'react';
import { Button, TextInput, View } from 'react-native';
import { connect } from 'react-redux';
import LoadingScreen from '../../../screens/LoadingScreen'
import * as actions from '../../../actions/createPoll/createPollActions';
import styles from './styles';

class CreateScreen extends Component {
  onSubmit = () => {
    const { answers, question, createPoll, navigation } = this.props;
    createPoll(question, answers, navigation);
  };

  componentWillMount() {
    this.props.initAnswers(2);
  }

  render() {
    const { answers, question, updateQuestion, updateAnswer } = this.props;
    if (!answers)
      return <LoadingScreen/>;
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder='Question'
          value={question}
          onChangeText={text => updateQuestion(text)}
        />
        <TextInput
          style={styles.input}
          placeholder='Option 1'
          value={answers[0]}
          onChangeText={text => updateAnswer(0, text)}
        />
        <TextInput
          style={styles.input}
          placeholder='Option 2'
          value={answers[1]}
          onChangeText={text => updateAnswer(1, text)}
        />
        <Button
          style={styles.submit}
          title='Submit'
          onPress={this.onSubmit}
        />
      </View>
    )
  }
}

const mapStateToProps = ({ createPoll }) => createPoll;

export default connect(mapStateToProps, actions)(CreateScreen);
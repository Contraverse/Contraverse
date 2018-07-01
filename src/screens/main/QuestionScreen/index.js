import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import { connect } from 'react-redux';
import * as actions from './actions';

class QuestionScreen extends Component {
    componentWillMount() {
        this.props.fetchAnswers(this.props.currentPoll.questionID);
    }

    selectAnswer = (index) => {
        const pollID = this.props.currentPoll.questionID;
        this.props.selectAnswer(pollID, index);
        return this.props.navigation.navigate('Results');
    }

    renderAnswerChoices() {
        return this.props.answers.map((answer, index) => {
            return (
                <Button
                    title={answer.name}
                    key={index}
                    onPress={() => this.selectAnswer(index)}
                />
            );
        })
    }

    render() {
        return (
            <View>
                <Text>
                    {this.props.currentPoll.question}
                </Text>
                {this.renderAnswerChoices()}
            </View>
        );
    }
}

//TODO: Prop Types

const mapStateToProps = ({ question, polls }) => {
    return { ...question, currentPoll: polls.currentPoll };
}

export default connect(mapStateToProps, actions)(QuestionScreen);
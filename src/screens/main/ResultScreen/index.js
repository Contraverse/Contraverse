import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';
import * as actions from './actions';
import styles from './styles';

class ResultScreen extends Component {
    componentWillMount() {
        this.props.fetchResults(this.props.pollID);
    }
    render() {
        return (
            <View style={[styles.container, { backgroundColor: this.props.backgroundColor }]}>
                <Text>
                    Results
                </Text>
                <Text>
                    {JSON.stringify(this.props.results)}
                </Text>
                <Button
                    title='Debate'
                />
                <Button
                    title='Spectate'
                />
            </View>
        );
    }
}
const mapStateToProps = ({ polls, question, results }) => {
    const pollID = polls.currentPoll.questionID;
    const backgroundColor = question.answers[question.selectedAnswer].color;
    return { ...results, pollID, backgroundColor };
}

export default connect(mapStateToProps, actions)(ResultScreen);
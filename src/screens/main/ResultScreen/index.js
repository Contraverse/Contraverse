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
            <View style={[styles.container]}>
                <Text>
                    Results
                </Text>
                <Text>
                    You are {this.props.category.name}
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
    const poll = polls.polls[polls.currentPoll];
    const category = poll.categories[question.categoryID];
    return { ...results, category };
}

export default connect(mapStateToProps, actions)(ResultScreen);
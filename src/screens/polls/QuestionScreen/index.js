import React, { Component } from 'react';
import { View, FlatList, Button, Text } from 'react-native';
import QuestionCard from './QuestionCard';
import { connect } from 'react-redux';
import * as actions from '../../../actions/polls/questionActions';
import styles from './styles';

class QuestionScreen extends Component {
    componentWillMount() {
        const { fetchQuestions, poll} = this.props;
        if(poll)
            fetchQuestions(poll.id);
    }

    componentDidMount() {
        this.scores = new Array(this.props.questions.length);
    }

    onSelect = (index, score) => {
        this.scores[index] = score;
    }

    onSubmit = () => {
        if(this.scores.includes(undefined))
            alert("Check to see if you have answered all the questions");
        else {
            const { submit, poll, navigation } = this.props;
            submit(poll.id, poll.categories, this.scores, navigation);
        }
    }

    renderQuestion = ({ item, index }) => {
        return (
            <QuestionCard
                { ...item }
                onSelect={score => this.onSelect(index, score)}
            />
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.props.questions}
                    keyExtractor={item => item.id}
                    renderItem={this.renderQuestion}
                />
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
}

export default connect(mapStateToProps, actions)(QuestionScreen);
import React, { Component } from 'react';
import { View, FlatList, Button, Text } from 'react-native';
import QuestionCard from './QuestionCard';
import { connect } from 'react-redux';
import * as actions from './actions';
import styles from './styles';

class QuestionScreen extends Component {
    componentWillMount() {
        this.props.fetchQuestions(this.props.pollID);
    }

    componentDidMount() {
        this.scores = new Array(this.props.questions.length);
    }

    componentWillReceiveProps(newProps) {
        if(newProps.categoryID !== null)
            this.props.navigation.navigate('Results');
    }

    onSelect = (index, score) => {
        this.scores[index] = score;
    }

    onSubmit = () => {
        if(this.scores.includes(undefined))
            alert("Check to see if you have answered all the questions");
        else {
            const { submit, pollCategories, pollID } = this.props;
            submit(pollID, pollCategories, this.scores);
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

const mapStateToProps = ({ question, polls }) => {
    const poll = polls.polls[polls.currentPoll];

    const pollTitle = poll.title;
    const pollID = poll.id;
    const pollCategories = poll.categories;

    return { ...question, pollTitle, pollID, pollCategories };
}

export default connect(mapStateToProps, actions)(QuestionScreen);
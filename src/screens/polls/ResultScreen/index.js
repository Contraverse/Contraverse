import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../../../actions/polls/resultActions';
import styles from './styles';

class ResultScreen extends Component {
    componentWillMount() {
        this.props.fetchResults(this.props.poll.id);
    }

    findDebate = () => {
        const { category, poll, findDebate, navigation } = this.props;
        return findDebate(poll.id, category.name, navigation);
    }

    findSpectate = () => {
        alert('Spectate')
    }

    renderLoading() {
        return <View />;
    }

    renderMain() {
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
                    onPress={this.findDebate}
                />
                <Button
                    title='Spectate'
                    onPress={this.findSpectate}
                />
            </View>
        );
    }
    render() {
        if(this.props.category)
            return this.renderMain();
        return this.renderLoading();
    }
}

const mapStateToProps = ({ polls, results }) => {
    const poll = polls.currentPoll;
    return { ...results, poll };
}

export default connect(mapStateToProps, actions)(ResultScreen);
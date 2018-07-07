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
        const { poll, navigation, findSpectate } = this.props;
        return findSpectate(poll.id, navigation);
    }

    renderLoading() {
        return <View />;
    }

    renderResults() {
        // if(!this.props.results)
        //     return this.renderLoading();
        // const { results } = this.props;
        // const randomColor = () => ('#' + (Math.random() * 0xFFFFFF << 0).toString(16) + '000000').slice(0, 7);
        // const data = results.totalVotes.counts
        //     .filter(value => value > 0)
        //     .map((votes, index) => ({
        //         value: votes,
        //         svg: {
        //             fill: randomColor()
        //         },
        //         key: index
        //     }));
        // console.log(data);
        // return <PieChart data={data} style={{ height: 200 }} />
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
                {this.renderResults()}
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
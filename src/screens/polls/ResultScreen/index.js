import React, {Component} from 'react';
import {Button, Text, View} from 'react-native';
import {connect} from 'react-redux';
import {PieChart} from 'react-native-svg-charts';
import * as actions from '../../../actions/polls/resultActions';
import styles from './styles';

class ResultScreen extends Component {
    componentWillMount() {
        this.props.fetchResults(this.props.poll.id);
    }

    findDebate = () => {
        const {category, poll, findDebate, navigation} = this.props;
        return findDebate(poll.id, category.name, navigation);
    }

    findSpectate = () => {
        const {poll, navigation, findSpectate} = this.props;
        return findSpectate(poll.id, navigation);
    }

    renderLoading() {
        return <View/>;
    }

    renderResults() {
        if (!this.props.results)
            return this.renderLoading();
        const {results, poll} = this.props;
        const totalData = formatData(results.totalVotes.counts, poll.categories);
        const maleData = formatData(results.genderVotes.male, poll.categories);
        const femaleData = formatData(results.genderVotes.female, poll.categories);
        return (
            <View style={styles.charts}>
                <View style={styles.chartSection}>
                    <PieChart
                        data={totalData}
                        style={styles.chart}
                    />
                </View>
                <View style={styles.chartSection}>
                    <PieChart
                        data={maleData}
                        style={styles.chart}
                    />
                    <PieChart
                        data={femaleData}
                        style={styles.chart}
                    />
                </View>
            </View>
        );
    }


    renderMain() {
        return (
            <View style={styles.container}>
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
                {this.renderResults()}
            </View>
        );
    }

    render() {
        if(this.props.category)
            return this.renderMain();
        return this.renderLoading();
    }
}

function formatData(data, categories) {
    return data.filter(value => value > 0)
        .map((votes, index) => ({
            value: votes,
            svg: {
                fill: categories[index].color
            },
            key: index
        }));
}

const mapStateToProps = ({ polls, results }) => {
    const poll = polls.currentPoll;
    return { ...results, poll };
}

export default connect(mapStateToProps, actions)(ResultScreen);
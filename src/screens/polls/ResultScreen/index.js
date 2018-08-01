import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { PieChart } from 'react-native-svg-charts';
import LoadingScreen from '../../LoadingScreen';
import * as actions from '../../../actions/polls/resultActions';
import styles from './styles';

COLORS = ['#ff0000', '#ff0000'];

class ResultScreen extends Component {
    componentWillMount() {
        this.props.fetchResults(this.props.poll.id);
    }

    findDebate = () => {
        const {category, poll, findDebate, navigation} = this.props;
        return findDebate(poll.id, category.name, navigation);
    };

    findSpectate = () => {
        const {poll, navigation, findSpectate} = this.props;
        return findSpectate(poll.id, navigation);
    };

    renderResults() {
        if (!this.props.results)
            return <LoadingScreen />;
      const { results } = this.props;
      const totalData = formatData(results.totalVotes.counts);
      const maleData = formatData(results.genderVotes.male);
      const femaleData = formatData(results.genderVotes.female);
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


  render() {
        return (
            <View style={styles.container}>
                <Text>
                    Results
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
}

function formatData(data) {
    return data.filter(value => value > 0)
        .map((votes, index) => ({
            value: votes,
            svg: {
              fill: COLORS[index]
            },
            key: index
        }));
}

const mapStateToProps = ({ polls, results }) => {
    const poll = polls.currentPoll;
    return { ...results, poll };
};

export default connect(mapStateToProps, actions)(ResultScreen);
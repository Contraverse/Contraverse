import React, { Component } from 'react';
import { View, FlatList, Text } from 'react-native';
import { connect } from 'react-redux';
import PollCard from './PollCard';
import * as actions from '../../../actions/polls/pollActions';
import styles from './styles';

class PollScreen extends Component {
    componentWillMount() {
        this.props.fetchPolls(20);
    }

    selectPoll = (poll) => {
        const { selectPoll, navigation } = this.props;
        selectPoll(poll, navigation);
    }

    renderPoll = ({ item }) => {
        return (
           <PollCard
               title={item.title}
               onPress={() => this.selectPoll(item)}
           />
        )
    }

    renderLoading() {
        return (
            <View style={styles.container}>
                <Text>Loading</Text>
            </View>
        )
    }

    renderMain() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.props.polls}
                    keyExtractor={item => item.id}
                    renderItem={this.renderPoll}
                />
            </View>
        );
    }

    render() {
        if(this.props.loading) {
            return this.renderLoading();
        }
        return this.renderMain();
    }
}

const mapStateToProps = ({ polls }) => polls;

export default connect(mapStateToProps, actions)(PollScreen);
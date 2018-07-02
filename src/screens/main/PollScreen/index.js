import React, { Component } from 'react';
import { View, FlatList, Text } from 'react-native';
import { connect } from 'react-redux';
import PollCard from './PollCard';
import * as actions from './actions';
import styles from './styles';

class PollScreen extends Component {
    componentWillMount() {
        this.props.fetchPolls(20);
    }

    selectPoll = (index) => {
        this.props.selectPoll(index);
        return this.props.navigation.navigate('Question');
    }

    renderPoll = ({ item, index }) => {
        const { title } = item;
        return (
           <PollCard
               title={title}
               onPress={() => this.selectPoll(index)}
           />
        )
    }

    render() {
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
}

const mapStateToProps = ({ polls }) => {
    return polls;
}

export default connect(mapStateToProps, actions)(PollScreen);
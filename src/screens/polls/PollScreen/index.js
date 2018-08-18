import React, { Component } from 'react';
import { FlatList, Text, View } from 'react-native';
import { connect } from 'react-redux';
import PollCard from './PollCard';
import LoadingScreen from '../../LoadingScreen';
import * as actions from '../../../actions/polls/pollActions';
import styles from './styles';

class PollScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerRight: (
      <Text onPress={() => navigation.navigate('CreatePoll')}>
        Add
      </Text>
    )
  });

  renderPoll = ({item}) => {
    return (
      <PollCard
        title={item.question}
        onPress={() => this.selectPoll(item)}
      />
    )
  };

  selectPoll = (poll) => {
    const { selectPoll, navigation } = this.props;
    selectPoll(poll, navigation);
  };

  componentWillMount() {
    this.props.fetchPolls();
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
    if (this.props.loading) {
      return <LoadingScreen />
    }
    return this.renderMain();
  }
}

const mapStateToProps = ({polls}) => polls;

export default connect(mapStateToProps, actions)(PollScreen);
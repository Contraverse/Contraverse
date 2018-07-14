import React, { Component } from 'react';
import { View, FlatList, Text } from 'react-native';
import { connect } from 'react-redux';
import DebateCard from './DebateCard';
import * as actions from '../../../actions/debates/debateListActions';
import styles from './styles';


class DebateList extends Component {
    componentWillMount() {
        this.props.fetchDebates();
    }

    selectDebate(id) {
        const { selectDebate, navigation } = this.props;
        selectDebate(id, navigation);
    }

    renderItem = ({ item }) => {
        return (
            <DebateCard
                {...item}
                onPress = {() => this.selectDebate(item.id)}
            />
        );
    }
    render() {
        return (
          <View style={styles.container}>
              <FlatList
                  data={this.props.debates}
                  renderItem={this.renderItem}
                  keyExtractor={item => item.id}
              />
          </View>
        );
    }
}

const mapStateToProps = ({ debateList }) => debateList;

export default connect(mapStateToProps, actions)(DebateList);
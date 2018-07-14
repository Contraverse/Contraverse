import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import { connect } from 'react-redux';
import SpectateCard from './SpectateCard';
import * as actions from '../../../actions/debates/spectateListActions';
import styles from './styles';


class SpectateList extends Component {
    componentWillMount() {
        this.props.fetchSpectates();
    }

    selectDebate(id) {
        const { selectDebate, navigation } = this.props;
        selectDebate(id, navigation);
    }

    renderItem = ({ item }) => {
        return (
            <SpectateCard
                {...item}
                onPress = {() => this.selectDebate(item.id)}
            />
        );
    }
    render() {
        return (
          <View style={styles.container}>
              <FlatList
                  data={this.props.spectates}
                  renderItem={this.renderItem}
                  keyExtractor={item => item.id}
              />
          </View>
        );
    }
}

const mapStateToProps = ({ spectateList }) => spectateList;

export default connect(mapStateToProps, actions)(SpectateList);
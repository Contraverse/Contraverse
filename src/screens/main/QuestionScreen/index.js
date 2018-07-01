import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import { connect } from 'react-redux';
import * as actions from './actions';

class QuestionScreen extends Component {
    constructor(props) {
        super();
        const { navigation } = props;
        this.question = navigation.getParam('question');
        this.id = navigation.getParam('id');
    }

    componentWillMount() {
        this.props.fetchAnswers(this.id);
    }

    renderAnswerChoices() {
        return this.props.answers.map(answer => {
            return <Button title={answer} key={answer}/>
        })
    }

    render() {
        return (
            <View>
                <Text>
                    {this.question}
                </Text>
                {this.renderAnswerChoices()}
            </View>
        );
    }
}

//TODO: Prop Types

const mapStateToProps = ({ question }) => question;

export default connect(mapStateToProps, actions)(QuestionScreen);
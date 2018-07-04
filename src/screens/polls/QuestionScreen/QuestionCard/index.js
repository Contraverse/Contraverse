import React from 'react';
import { View, Text, Button } from 'react-native';
import styles from './styles';

const renderAnswerChoices = (answers, onSelect) => {
    return answers.map(answer => {
        return (
          <Button
              title={answer.text}
              key={answer.text}
              onPress={() => onSelect(answer.score)}
          />
        );
    })
}

export default QuestionCard = ({ question, answers, onSelect }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                {question}
            </Text>
            {renderAnswerChoices(answers, onSelect)}
        </View>
    );
}


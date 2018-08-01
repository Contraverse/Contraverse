import * as types from './types';

export function createPoll(question, answers, navigation) {
  return async () => {
    navigation.navigate('Polls');
  }
}

export function initAnswers(length) {
  return { type: types.INIT_ANSWERS, payload: length };
}

export function updateQuestion(question) {
  return { type: types.UPDATE_QUESTION, payload: question };
}

export function updateAnswer(index, answer) {
  return { type: types.UPDATE_ANSWER, payload: { index, answer } };
}
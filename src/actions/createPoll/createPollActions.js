import * as types from './types';
import { ROOT } from "../../../config/api";
import axios from "axios/index";

export function createPoll(question, answers, navigation) {
  return async () => {
    await axios.post(`${ROOT}/createPoll`, { question, answers });
    alert('Your poll has been set. Once our team verifies the poll, it will be posted.');
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
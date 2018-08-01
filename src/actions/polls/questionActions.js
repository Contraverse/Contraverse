import firebase from '@firebase/app';
import '@firebase/firestore';
import '@firebase/auth'
import axios from 'axios';
import * as types from './types';
import { ROOT } from '../../../config/api';

export const submit = (pollID, index, navigation) => {
  return dispatch => {
    const userID = firebase.auth().currentUser.uid;
    axios.post(`${ROOT}/castVote`, { userID, pollID, answer: index });
    dispatch({ type: types.CATEGORY_SET, payload: index });
    navigation.navigate('Results');
  }
};

export function selectAnswer(index) {
  return { type: types.ANSWER_SELECT, payload: index };
}


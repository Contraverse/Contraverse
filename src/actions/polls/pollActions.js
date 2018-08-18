import firebase from '@firebase/app';
import axios from 'axios';
import { ROOT } from '../../../config/api.json'
import '@firebase/auth';
import * as types from './types';

export const fetchPolls = () => {
  return async (dispatch) => {
    dispatch({ type: types.POLL_FETCH_REQUEST });
    try {
      const polls = await axios.get(`${ROOT}/polls`);
      console.log(polls);
      dispatch({ type: types.POLL_FETCH_SUCCESS, payload: polls.data });
    }
    catch (err) {
      dispatch({ type: types.POLL_FETCH_ERROR, payload: err });
    }
  }
};

export const selectPoll = (poll, navigation) => {
  return async dispatch => {
    const categoryID = await getPollResults(poll.id);
    dispatch({ type: types.POLL_SELECT, payload: poll });
    if (categoryID !== null) {
      dispatch({ type: types.CATEGORY_SET, payload: categoryID });
      navigation.navigate('Results');
    }
    else {
      navigation.navigate('Question');
    }
  }
};

const getPollResults = async (pollID) => {
  const userID = firebase.auth().currentUser.uid;
  const query = firebase.firestore().doc(`Profiles/${userID}/Polls/${pollID}`);
  const doc = await query.get();
  if (doc.exists)
    return doc.data().answer;
  return null;
};
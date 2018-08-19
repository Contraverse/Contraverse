import firebase from '@firebase/app';
import '@firebase/firestore';
import '@firebase/auth';
import axios from 'axios';
import { ROOT } from '../../../config/api';
import * as types from './types';


export const fetchResults = (pollID) => {
  const db = firebase.firestore();
  return async (dispatch) => {
    dispatch({ type: types.RESULTS_FETCH_REQUEST });
    const doc = await db.doc(`Results/${pollID}`).get();
    const { counts } = doc.data();
    console.log(counts);
    dispatch({ type: types.RESULTS_FETCH_SUCCESS, payload: counts });
  }
};

export function findDebate(pollID, category, navigation) {
  const userID = firebase.auth().currentUser.uid;
  return async (dispatch) => {
    dispatch({ type: types.FIND_DEBATE_REQUEST });
    console.log(category, pollID, userID);
    const { data, status } = await axios.post(`${ROOT}/findDebate`, { pollID, category, userID }); // data is opponent ID
    dispatch({ type: types.FIND_DEBATE_SUCCESS });
    if (status === 200)
      navigation.navigate('DebateList'); // TODO: Navigate to opening argument screen with the opponentID
    else
      alert("No match found. We'll notify you when we find you an opponent");
  }
}

export function findSpectate(pollID, navigation) {
  const userID = firebase.auth().currentUser.uid;
  return async (dispatch) => {
    dispatch({ type: types.FIND_SPECTATE_REQUEST });
    const { data, status } = await axios.post(`${ROOT}/findSpectate`, { pollID, userID });
    console.log(status);
    if (status === 200)
      navigation.navigate('SpectateList');
    else
      alert("No debate found. Come back later!");
  }
}

const getCollection = async (ref) => {
  const snapshot = await ref.get();
  const stats = {};
  snapshot.forEach(doc => {
    stats[doc.id] = doc.data()
  });
  return stats;
};

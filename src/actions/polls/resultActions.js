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
    const ref = db.collection(`Polls/${pollID}/Results`);
    const stats = await getCollection(ref);
    console.log(stats);
    dispatch({ type: types.RESULTS_FETCH_SUCCESS, payload: stats });
  }
};

export function findDebate(pollID, category, navigation) {
  const userID = firebase.auth().currentUser.uid;
  return async (dispatch) => {
    dispatch({ type: types.FIND_DEBATE_REQUEST });
    const { data } = await axios.post(`${ROOT}/findDebate`, { pollID, category, userID });
    dispatch({ type: types.FIND_DEBATE_SUCCESS });
    if (data.found)
      navigation.navigate('DebateList');
    else
      alert("No match found. We'll notify you when we find you an opponent");
  }
}

export function findSpectate(pollID, navigation) {
  const userID = firebase.auth().currentUser.uid;
  return async (dispatch) => {
    dispatch({ type: types.FIND_SPECTATE_REQUEST });
    const { data } = await axios.post(`${ROOT}/findSpectate`, { pollID, userID });
    if (data.found)
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

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
        dispatch({type: types.RESULTS_FETCH_SUCCESS, payload: stats });
    }
}

export const findDebate = (pollID, category, navigation) => {
    const userID = firebase.auth().currentUser.uid;
    return async (dispatch) => {
        dispatch({ type: types.FIND_DEBATE_REQUEST });
        const { data } = await axios.post(`${ROOT}/findDebate`, { pollID, category, userID });
        dispatch({ type: types.FIND_DEBATE_SUCCESS });
        if(data.found)
            navigation.navigate('DebateList');
        else
            alert("No match found. We'll notify you when we find you an opponent");
    }
}

const getCollection = async (ref) => {
    const snapshot = await ref.get();
    const stats = {};
    snapshot.forEach(doc => {
        stats[doc.id] = doc.data()
    });
    return stats;
}

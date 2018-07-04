import firebase from '@firebase/app';
import '@firebase/firestore';
import '@firebase/auth';
import * as types from './types';

export function fetchDebates() {
    return async (dispatch) => {
        dispatch({ type: types.DEBATES_FETCH_REQUEST });
        const query = getDebatesRef();
        const snapshot = await query.get();
        dispatchDebates(dispatch, snapshot);
    }
}

export function initDebateListener() {
    return async (dispatch) => {
        const query = getDebatesRef();
        query.onSnapshot(snapshot => dispatchDebates(dispatch, snapshot));
    }
}

export function selectDebate(id, navigation) {
    return dispatch => {
        dispatch({ type: types.SET_CHATROOM_ID, payload: id});
        navigation.navigate('Chatroom');
    }
}

function getDebatesRef() {
    const userID = firebase.auth().currentUser.uid;
    const db = firebase.firestore();
    return db.collection('Debates').where(`users.${userID}`, '==', true);
}

function dispatchDebates(dispatch, snapshot) {
    const debates = [];
    const userID = firebase.auth().currentUser.uid;
    snapshot.forEach(doc => {
        const { users, lastMessage } = doc.data();
        const id = doc.id;
        const opponent = Object.keys(users).find(uid => uid !== userID);
        debates.push({ id, opponent, lastMessage });
    });
    debates.sort(sortByDate);
    dispatch({ type: types.DEBATES_FETCH_SUCCESS, payload: debates });
}

function sortByDate (a, b) {
    return b.dateUpdated - a.dateUpdated;
}
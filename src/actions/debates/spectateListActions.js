import firebase from '@firebase/app';
import '@firebase/firestore';
import '@firebase/auth';
import * as types from './types';

export function fetchSpectates() {
    const db = firebase.firestore();
    return async (dispatch) => {
        const userID = firebase.auth().currentUser.uid;
        const query = db.collection(`Profiles/${userID}/Spectates`);
        query.onSnapshot(snapshot => dispatchSpectates(dispatch, snapshot));
        const snapshot = await query.get();
        return dispatchSpectates(dispatch, snapshot);
    }
}

export function selectDebate(id, navigation) {
    return dispatch => {
        dispatch({ type: types.SET_CHATROOM_ID, payload: { id, spectate: true }});
        navigation.navigate('Chatroom');
    }
}

async function dispatchSpectates(dispatch, snapshot) {
    const queries = [];
    const db = firebase.firestore();
    snapshot.forEach(async ({ id }) => {
        queries.push(db.doc(`Debates/${id}`).get());
    });
    const docs = await Promise.all(queries);
    const spectates = docs.map(doc => {
        const { lastMessage } = doc.data();
        const debateID = doc.id;
        return { id: debateID, lastMessage };
    })
    spectates.sort(sortByDate);
    console.log(spectates);
    dispatch({ type: types.SPECTATES_FETCH_SUCCESS, payload: spectates });
}

function sortByDate (a, b) {
    return a.dateUpdated - b.dateUpdated;
}
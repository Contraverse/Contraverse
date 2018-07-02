import firebase from '@firebase/app';
import '@firebase/firestore';
import * as types from './types';

const FIRESTORE_SETTINGS = {
    timestampsInSnapshots: true
}

export const fetchPolls = (size) => {
    const db = firebase.firestore();
    db.settings(FIRESTORE_SETTINGS);
    const questionRef = db.collection('Polls')
    return async (dispatch) => {
        dispatch({ type: types.POLL_FETCH_REQUEST });
        try {
            const query = questionRef.orderBy('dateCreated').limit(size);
            const snapshot = await query.get();

            const polls = [];
            snapshot.forEach(doc => {
                polls.push({ id: doc.id, ...doc.data() });
            });
            dispatch({ type: types.POLL_FETCH_SUCCESS, payload: polls });
        }
        catch(err) {
            dispatch({ type: types.POLL_FETCH_ERROR, payload: err });
        }
    }
}

export const selectPoll = index => {
    return { type: types.POLL_SELECT, payload: index };
}
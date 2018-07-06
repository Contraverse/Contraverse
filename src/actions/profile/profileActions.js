import firebase from '@firebase/app';
import '@firebase/firestore';
import * as types from './types';

export function fetchUserData(userID) {
    const db = firebase.firestore();
    return async (dispatch) => {
        const query = db.doc(`Profiles/${userID}`);
        const doc = await query.get();
        dispatch({ type: types.USER_DATA_FETCH_SUCCESS, payload: doc.data() })
    }
}
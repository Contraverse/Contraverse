import firebase from '@firebase/app';
import '@firebase/firestore';
import * as types from "./types";

export const fetchResults = (pollID) => {
    const db = firebase.firestore();
    return async (dispatch) => {
        dispatch({ type: types.RESULTS_FETCH_REQUEST });
        try {
            const query = db.collection('Stats').doc(pollID);
            const doc = await query.get();
            console.log(doc.data());
            dispatch({ type: types.RESULTS_FETCH_SUCCESS, payload: doc.data() });
        }
        catch(err) {
            dispatch({ type: types.RESULTS_FETCH_ERROR, payload: err });
        }
    }
}
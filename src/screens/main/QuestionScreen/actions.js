import firebase from '@firebase/app';
import '@firebase/firestore';
import * as types from './types';


export const fetchAnswers = (questionID) => {
    const db = firebase.firestore();
    return async (dispatch) => {
        dispatch({ type: types.ANSWERS_FETCH_REQUEST });
        try {
            const query = db.collection('Answers').doc(questionID);
            const doc = await query.get();
            dispatch({ type: types.ANSWERS_FETCH_SUCCESS, payload: doc.data().answers });
        }
        catch(err) {
            dispatch({ type: types.ANSWERS_FETCH_ERROR, payload: err });
        }
    }
}
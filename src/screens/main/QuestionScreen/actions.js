import firebase from '@firebase/app';
import '@firebase/firestore';
import '@firebase/auth'
import axios from 'axios';
import * as types from './types';
import { ROOT } from '../../../../config/api'


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

export const selectAnswer = (pollID, answerIndex) => {
    return dispatch => {
        const userID = firebase.auth().currentUser.uid;
        axios.post(`${ROOT}/castVote`, { userID, pollID, answerIndex })
            .then(console.log);
        dispatch({ type: types.ANSWER_SELECT, payload: answerIndex });
    }
}
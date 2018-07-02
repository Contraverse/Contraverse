import firebase from '@firebase/app';
import '@firebase/firestore';
import '@firebase/auth'
import axios from 'axios';
import * as types from './types';
import { ROOT } from '../../../../config/api'


export const fetchQuestions = (pollID) => {
    const db = firebase.firestore();
    return async (dispatch) => {
        dispatch({ type: types.ANSWERS_FETCH_REQUEST });
        try {
            const query = db.collection('Polls').doc(pollID).collection('Questions');
            const snapshot = await query.get();

            const questions = [];
            snapshot.forEach(doc => questions.push({ id: doc.id, ...doc.data() }));

            dispatch({ type: types.ANSWERS_FETCH_SUCCESS, payload: questions });
        }
        catch(err) {
            dispatch({ type: types.ANSWERS_FETCH_ERROR, payload: err });
        }
    }
}

export const submit = (pollID, categories, scores) => {
    console.log(scores);
    return dispatch => {
        const totalScore = scores.reduce((a, b) => a + b, 0);
        let categoryID;
        if(totalScore > 0)
            categoryID = 0;
        else
            categoryID = 1;
        console.log(totalScore, categoryID);
        dispatch({ type: types.CATEGORY_SET, payload: categoryID })
        // const userID = firebase.auth().currentUser.uid;
    }
}
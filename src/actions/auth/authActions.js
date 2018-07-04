import firebase from '@firebase/app';
import '@firebase/auth';
import '@firebase/firestore';
import * as types from './types';

export const login = (email, password) => {
    return async (dispatch) => {
        dispatch({type: types.AUTH_REQUEST });
        try {
            const user = await firebase.auth().signInWithEmailAndPassword(email, password);
            dispatch({ type: types.AUTH_SUCCESS, payload: user.user });
        }
        catch(err) {
            dispatch({ type: types.AUTH_ERROR, payload: err });
        }
    }
}

export const signup = (email, password, displayName, photoURL) => {
    const auth = firebase.auth();
    return async (dispatch) => {
        dispatch({type: types.AUTH_REQUEST });
        try {
            await auth.createUserWithEmailAndPassword(email, password);
            const user  = auth.currentUser;
            addUserData(user.uid, displayName, photoURL)
            dispatch({ type: types.AUTH_SUCCESS, payload: user });
        }
        catch(err) {
            console.log(err);
            dispatch({ type: types.AUTH_ERROR, payload: err });
        }
    }
}

function addUserData(userID, username, avatar) {
    const db = firebase.firestore();
    return db.doc(`Profiles/${userID}`).set({
        username,
        avatar
    })
}
import firebase from '@firebase/app';
import '@firebase/auth';
import '@firebase/firestore';
import * as types from './types';

export function updateForm(key, value) {
    return { type: types.UPDATE_FORM, payload: { key, value }};
}

export function login(intervalID, email, password, navigation) {
    return async (dispatch) => {
        dispatch({type: types.AUTH_REQUEST });
        try {
            const user = await firebase.auth().signInWithEmailAndPassword(email, password);
            clearInterval(intervalID);
            dispatch({ type: types.AUTH_SUCCESS, payload: user.user });
            navigation.navigate('Main');
        }
        catch(err) {
            dispatch({ type: types.AUTH_ERROR, payload: err });
        }
    }
}

export function signup(intervalID, email, password, displayName, photoURL) {
    const auth = firebase.auth();
    return async (dispatch) => {
        dispatch({type: types.AUTH_REQUEST });
        try {
            await auth.createUserWithEmailAndPassword(email, password);
            const user  = auth.currentUser;
            addUserData(user.uid, displayName, photoURL)
            clearInterval(intervalID);
            dispatch({ type: types.AUTH_SUCCESS, payload: user });
            navigation.navigate('Main');
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
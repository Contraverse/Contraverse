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
            const auth = await firebase.auth().signInWithEmailAndPassword(email, password);
            clearInterval(intervalID);
            navigation.navigate('Main');
            const user = await getUserData(auth.user.uid);
            user.uid = auth.user.uid;
            dispatch({ type: types.AUTH_SUCCESS, payload: user });
            console.log(user);
        }
        catch(err) {
            console.log(err);
            dispatch({ type: types.AUTH_ERROR, payload: err });
        }
    }
}

export function signup(intervalID, email, password, user, navigation) {
    const auth = firebase.auth();
    return async (dispatch) => {
        dispatch({type: types.AUTH_REQUEST });
        try {
            await auth.createUserWithEmailAndPassword(email, password);
            clearInterval(intervalID);
            addUserData(auth.currentUser.uid, user);
            user.uid = auth.currentUser.uid;
            dispatch({ type: types.AUTH_SUCCESS, payload: user});
            navigation.navigate('Main');
        }
        catch(err) {
            console.log(err);
            dispatch({ type: types.AUTH_ERROR, payload: err });
        }
    }
}

function addUserData(userID, { username, avatar, gender }) {
    const db = firebase.firestore();
    return db.doc(`Profiles/${userID}`).set({
        username,
        avatar,
        gender
    })
}

async function getUserData(userID) {
    const db = firebase.firestore();
    const doc = await db.doc(`Profiles/${userID}`).get();
    return doc.data();
}
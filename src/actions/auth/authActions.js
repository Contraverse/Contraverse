import firebase from '@firebase/app';
import '@firebase/auth';
import '@firebase/firestore';
import { GoogleSignin } from 'react-native-google-signin';
import * as types from './types';
import { settings } from '../../../config/firebase';

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

export function googleAuth(intervalID, navigation) {
    return async (dispatch) => {
        const { idToken, accessToken } = await GoogleSignin.signIn();
        const credential = firebase.auth.GoogleAuthProvider.credential(idToken, accessToken);
        const auth = await firebase.auth().signInAndRetrieveDataWithCredential(credential);
        const user = await getUserData(auth.user.id);
        clearInterval(intervalID);
        if(user) {
            user.uid = auth.user.uid;
            navigation.navigate('Main');
            dispatch({ type: types.AUTH_SUCCESS, payload: user });
        }
        else {
            dispatch({ type: types.AUTH_SUCCESS, payload: { uid: auth.user.uid }});
            navigation.navigate('AdditionalInfo');
        }
    }
}

export function updateForm(key, value) {
    return { type: types.UPDATE_FORM, payload: { key, value }};
}

export function addAdditionalInfo(user, navigation) {
    return (dispatch, getState) => {
        dispatch({ type: types.ADDITIONAL_INFO_ADDED, payload: user });
        addUserData(getState().auth.user.uid, user);
        navigation.navigate('Main');
    }
}

function addUserData(userID, user) {
    const db = firebase.firestore();
    return db.doc(`Profiles/${userID}`).set(user)
}

async function getUserData(userID) {
    const db = firebase.firestore();
    db.settings(settings);
    const doc = await db.doc(`Profiles/${userID}`).get();
    if(doc.exists)
        return doc.data();
    return null;
}
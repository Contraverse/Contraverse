import firebase from '@firebase/app';
import '@firebase/auth';
import * as types from '../types';

export const signup = (email, password, displayName) => {
    return async (dispatch) => {
        dispatch({type: types.AUTH_REQUEST });
        try {
            await firebase.auth().createUserWithEmailAndPassword(email, password);
            const user = firebase.auth().currentUser;
            user.updateProfile({
                displayName
            });
            dispatch({ type: types.AUTH_SUCCESS, payload: user });
        }
        catch(err) {
            dispatch({ type: types.AUTH_ERROR, payload: err });
        }
    }
}
import firebase from 'firebase';
import types from '../types';

export const signup = (email, password) => {
    return async (dispatch) => {
        dispatch({type: types.AUTH_REQUEST });
        try {
            const user = await firebase.auth().createUserWithEmailAndPassword(email, password);
            dispatch({ type: types.AUTH_SUCCESS, payload: user });
        }
        catch(err) {
            dispatch({ type: types.AUTH_FAILURE, payload: err });
        }
    }
}
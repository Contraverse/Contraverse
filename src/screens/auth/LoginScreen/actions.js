import firebase from '@firebase/app';
import '@firebase/auth';
import * as types from '../types';
import { NavigationActions } from 'react-navigation';

export const login = (email, password) => {
    return async (dispatch) => {
        dispatch({type: types.AUTH_REQUEST });
        try {
            const user = await firebase.auth().signInWithEmailAndPassword(email, password);
            dispatch({ type: types.AUTH_SUCCESS, payload: user });
            dispatch(NavigationActions.navigate({ routeName: 'main' }));
        }
        catch(err) {
            dispatch({ type: types.AUTH_ERROR, payload: err });
        }
    }
}
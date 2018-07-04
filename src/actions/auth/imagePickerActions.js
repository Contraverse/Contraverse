import firebase from '@firebase/app';
import '@firebase/firestore';
import * as types from './types';

const FIRESTORE_SETTINGS = {
    timestampsInSnapshots: true
}

export function fetchImages() {
    return async (dispatch) => {
        const db = firebase.firestore();
        db.settings(FIRESTORE_SETTINGS)
        const query = db.collection('Avatars');
        const snapshot = await query.get();
        const images = []
        snapshot.forEach(doc => {
            images.push(doc.data().source);
        })
        dispatch({ type: types.IMAGES_FETCH_SUCCESS, payload: images })
    }
}

export function selectImage(uri, navigation) {
    return dispatch => {
        dispatch({ type: types.IMAGE_SELECT, payload: uri});
        navigation.navigate('Signup');
    }
}
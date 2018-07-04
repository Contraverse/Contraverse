import firebase from '@firebase/app';
import '@firebase/firestore';
import '@firebase/auth';
import * as types from './types';

export const fetchMessages = (chatID) => {
    const db = firebase.firestore();
    return async (dispatch) => {
        dispatch({ type: types.MESSAGES_FETCH_REQUEST });
        const query = getMessagesRef(db, chatID);
        const snapshot = await query.get();
        return dispatchMessages(dispatch, snapshot);
    }
}

export const initMessageListener = (chatID) => {
    const db = firebase.firestore();
    return dispatch => {
        const query = getMessagesRef(db, chatID);
        return query.onSnapshot(snapshot => dispatchMessages(dispatch, snapshot));
    }
}

export const sendMessages = (chatID, messages) => {
    const db = firebase.firestore();
    const batch = db.batch();
    const chatRef = db.doc(`Debates/${chatID}`);
    const messagesRef = chatRef.collection('Messages');
    return () => {
        messages.forEach(message => {
            batch.set(messagesRef.doc(), createMessage(message));
        })
        batch.update(chatRef, { lastMessage: messages[messages.length - 1].text });
        return batch.commit();
    }
}

function dispatchMessages(dispatch, snapshot) {
    const messages = [];
    snapshot.forEach(doc => {
        messages.push(readMessage(doc));
    });
    dispatch({ type: types.MESSAGES_FETCH_SUCCESS, payload: messages });
}

function createMessage({ createdAt, text, user }) {
    return {
        userID: user._id,
        createdAt,
        text,
    }
}

function readMessage(doc) {
    const { text, createdAt, userID } = doc.data();
    const message = {
        _id: doc.id,
        text,
        createdAt: createdAt.toDate(),
        user: {
            _id: userID
        }
    }
    return message;
};

function getMessagesRef(db, chatID) {
    return db.collection('Debates').doc(chatID).collection('Messages').orderBy('createdAt', 'desc');
}
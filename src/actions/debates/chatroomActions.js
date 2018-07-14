import firebase from '@firebase/app';
import '@firebase/firestore';
import '@firebase/auth';
import * as types from './types';

export const initChatroom = (chatID) => {
    return async (dispatch) => {
        const users = await fetchUsers(chatID);
        const messages = await fetchMessages(dispatch, chatID, users);
        dispatch({ type: types.DATA_FETCH_SUCCESS, payload: { users, messages }});
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

async function fetchUsers(chatID) {
    const db = firebase.firestore();
    const query = db.doc(`Debates/${chatID}`);
    let doc = await query.get();
    const userIDs = Object.keys(doc.data().users);
    return getUserData(userIDs)
}

async function fetchMessages(dispatch, chatID, users) {
    const db = firebase.firestore();
    const query = getMessagesRef(db, chatID);
    const snapshot = await query.get();
    query.onSnapshot(snapshot => {
        const messages = readMessages(snapshot, users);
        return dispatch({ type: types.MESSAGES_FETCH_SUCCESS, payload: messages });
    });
    return readMessages(snapshot, users);
}

async function getUserData(userIDs) {
    const db = firebase.firestore();
    const queries = userIDs.map(userID => db.doc(`Profiles/${userID}`));
    const docs = await Promise.all(queries.map(query => query.get()));
    const users = {};
    docs.forEach(doc => {
        users[doc.id] = doc.data();
    });
    return users;
}

function readMessages(snapshot, users) {
    const messages = [];
    snapshot.forEach(doc => {
        messages.push(readMessage(doc, users));
    });
    return messages;
}

function createMessage({ createdAt, text, user }) {
    return {
        userID: user._id,
        createdAt,
        text,
    }
}

function readMessage(doc, users) {
    const { text, createdAt, userID } = doc.data();
    const message = {
        _id: doc.id,
        text,
        createdAt: createdAt.toDate(),
        user: {
            _id: userID,
            avatar: users[userID].avatar
        }
    }
    return message;
};

function getMessagesRef(db, chatID) {
    return db.collection(`Debates/${chatID}/Messages`).orderBy('createdAt', 'desc');
}
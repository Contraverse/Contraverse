import * as types from '../../actions/debates/types';

const INITIAL_STATE = {
    users: null,
    messages: [],
    chatID: null,
    spectate: false
}

export default (state = INITIAL_STATE, { type, payload }) => {
    switch(type) {
        case types.SET_CHATROOM_ID:
            return { ...state, chatID: payload.id, spectate: payload.spectate };
        case types.DATA_FETCH_SUCCESS:
            return { ...state, users: payload.users, messages: payload.messages };
        case types.MESSAGES_FETCH_SUCCESS:
            return { ...state, messagesLoading: false, messages: payload};
        default:
            return state;
    }
}

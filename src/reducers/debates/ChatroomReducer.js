import * as types from '../../actions/debates/types';

const INITIAL_STATE = {
    messages: [],
    chatID: null,
    loading: false
}

export default (state = INITIAL_STATE, action) => {
    const { type, payload } = action;
    switch(type) {
        case types.SET_CHATROOM_ID:
            return { ...state, chatID: payload };
        case types.MESSAGES_FETCH_REQUEST:
            return { ...state, loading: true};
        case types.MESSAGES_FETCH_SUCCESS:
            return { ...state, messages: payload};
        default:
            return state;
    }
}

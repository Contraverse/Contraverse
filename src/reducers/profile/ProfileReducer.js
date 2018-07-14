import * as types from '../../actions/profile/types';

const INITIAL_STATE = {
    imageURI: null,
    username: null,
    debates: [],
    spectates: []
}

export default function(state = INITIAL_STATE, { type, payload }) {
    switch(type) {
        case types.USER_DATA_FETCH_SUCCESS:
            return { ...state, imageURI: payload.avatar, username: payload.username };
        default:
            return state;
    }
}
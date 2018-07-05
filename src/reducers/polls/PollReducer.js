import * as types from '../../actions/polls/types';

const INITIAL_STATE = {
    polls: [],
    currentPoll: null,
    loading: false,
}

export default function (state = INITIAL_STATE, { type, payload }) {
    switch(type) {
        case types.POLL_FETCH_REQUEST:
            return { ...state, loading: true };
        case types.POLL_FETCH_SUCCESS:
            return { ...state, loading: false, polls: payload };
        case types.POLL_SELECT:
            return { ...state, currentPoll: payload };
        default:
            return state;
    }
}


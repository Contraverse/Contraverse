import * as types from '../../actions/polls/types';

const INITIAL_STATE = {
    questions: [],
    loading: false,
    error: ''
}

export default function (state = INITIAL_STATE, action) {
    const { type, payload } = action;
    switch(type) {
        case types.ANSWERS_FETCH_REQUEST:
            return { ...state, loading: true};
        case types.ANSWERS_FETCH_SUCCESS:
            return { ...state, loading: false, questions: payload};
        default:
            return state;
    }
}
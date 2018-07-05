import * as types from '../../actions/polls/types';

const INITIAL_STATE = {
    results: null,
    category: null,
    debateInfo: null,
    spectateFound: false,

    resultsLoading: false,
    debateLoading: false,
    spectateLoading: false
}

export default function (state = INITIAL_STATE, { type, payload }) {
    switch(type) {
        case types.CATEGORY_SET:
            return {...state, category: payload};
        case types.RESULTS_FETCH_REQUEST:
            return { ...state, resultsLoading: true};
        case types.RESULTS_FETCH_SUCCESS:
            return { ...state, resultsLoading: false, results: payload };
        case types.FIND_DEBATE_REQUEST:
            return { ...state, debateLoading: true };
        case types.FIND_DEBATE_SUCCESS:
            return { ...state, debateLoading: false, debateInfo: payload };
        default:
            return state;
    }
}

import * as types from '../../actions/polls/types';

const INITIAL_STATE = {
    results: null,
    category: null,
    debateInfo: null,
    spectateInfo: null,

    debateLoading: false,
    spectateLoading: false
};

export default function (state = INITIAL_STATE, { type, payload }) {
    switch(type) {
        case types.CATEGORY_SET:
            return {...state, category: payload};
        case types.RESULTS_FETCH_SUCCESS:
          return { ...state, results: payload };
        case types.FIND_DEBATE_REQUEST:
            return { ...state, debateLoading: true };
        case types.FIND_DEBATE_SUCCESS:
            return { ...state, debateLoading: false, debateInfo: payload };
        case types.FIND_SPECTATE_REQUEST:
            return { ...state, spectateLoading: true };
        case types.FIND_SPECTATE_SUCCESS:
            return { ...state, spectateLoading: false, spectateInfo: payload };
        default:
            return state;
    }
}

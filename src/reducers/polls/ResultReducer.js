import { createReducer } from 'reduxsauce';
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

const resultsFetchRequest = (state = INITIAL_STATE) => {
    return { ...state, resultsLoading: true};
}

const resultsFetchSuccess = (state = INITIAL_STATE) => {
    return { ...state, resultsLoading: false }
}

const findDebateRequest = (state = INITIAL_STATE) => {
    return { ...state, debateLoading: true};
}

const findDebateSuccess = (state = INITIAL_STATE, action) => {
    return { ...state, debateLoading: false, debateInfo: action.payload}
}

const categorySet = (state = INITIAL_STATE, action) => {
    return { ...state, category: action.payload };
}

const HANDLERS = {
    [types.CATEGORY_SET]: categorySet,

    [types.RESULTS_FETCH_REQUEST]: resultsFetchRequest,
    [types.RESULTS_FETCH_SUCCESS]: resultsFetchSuccess,

    [types.FIND_DEBATE_REQUEST]: findDebateRequest,
    [types.FIND_DEBATE_SUCCESS]: findDebateSuccess
}

export default createReducer(INITIAL_STATE, HANDLERS);
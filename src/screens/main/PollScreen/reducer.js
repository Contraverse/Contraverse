import { createReducer } from 'reduxsauce';
import * as types from './types';

const INITIAL_STATE = {
    polls: [],
    currentPoll: null,
    loading: false,
    error: ''
}

const pollFetchRequest = (state = INITIAL_STATE, action) => {
    return { ...state, loading: true };
}

const pollFetchSuccess = (state = INITIAL_STATE, action) => {
    return { ...state, loading: false, polls: action.payload }
}

const pollFetchError = (state = INITIAL_STATE, action) => {
    return { ...state, loading: false, error: action.payload }
}

const pollSelect = (state = INITIAL_STATE, action) => {
    return { ...state, currentPoll: action.payload }
}

const HANDLERS = {
    [types.POLL_FETCH_REQUEST]: pollFetchRequest,
    [types.POLL_FETCH_SUCCESS]: pollFetchSuccess,
    [types.POLL_FETCH_ERROR]: pollFetchError,
    [types.POLL_SELECT]: pollSelect
}

export default createReducer(INITIAL_STATE, HANDLERS);


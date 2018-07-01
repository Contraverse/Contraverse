import { createReducer } from 'reduxsauce';
import * as types from './types';

const INITIAL_STATE = {
    results: null,
    error: null,
    loading: false
}

const resultsFetchRequest = (state = INITIAL_STATE) => {
    return { ...state, loading: true};
}

const resultsFetchSuccess = (state = INITIAL_STATE, action) => {
    return { ...state, loading: false, results: action.payload}
}

const resultsFetchError = (state = INITIAL_STATE, action) => {
    return { ...state, loading: false, error: action.payload}
}

const HANDLERS = {
    [types.RESULTS_FETCH_REQUEST]: resultsFetchRequest,
    [types.RESULTS_FETCH_SUCCESS]: resultsFetchSuccess,
    [types.RESULTS_FETCH_ERROR]: resultsFetchError
}

export default createReducer(INITIAL_STATE, HANDLERS);
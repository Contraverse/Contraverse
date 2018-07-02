import { createReducer } from 'reduxsauce';
import * as types from './types';

const INITIAL_STATE = {
    questions: [],
    categoryID: null,
    loading: false,
    error: ''
}

const answersFetchRequest = (state = INITIAL_STATE) => {
    return { ...state, loading: true};
}

const answersFetchSuccess = (state = INITIAL_STATE, action) => {
    return { ...state, loading: false, questions: action.payload}
}

const answersFetchError = (state = INITIAL_STATE, action) => {
    return { ...state, loading: false, error: action.payload}
}

const categorySet = (state = INITIAL_STATE, action) => {
    return { ...state, categoryID: action.payload }
}


const HANDLERS = {
    [types.ANSWERS_FETCH_REQUEST]: answersFetchRequest,
    [types.ANSWERS_FETCH_SUCCESS]: answersFetchSuccess,
    [types.ANSWERS_FETCH_ERROR]: answersFetchError,
    [types.CATEGORY_SET]: categorySet,
}

export default createReducer(INITIAL_STATE, HANDLERS);
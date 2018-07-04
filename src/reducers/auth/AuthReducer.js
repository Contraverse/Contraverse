import { createReducer } from 'reduxsauce';
import * as types from '../../actions/auth/types';

const INITIAL_STATE = {
    loading: false,
    error: '',
    user: null
}

const authError = (state = INITIAL_STATE, action) => {
    return { ...state, error: action.payload }
}

const authRequest = (state = INITIAL_STATE, action) => {
    return { ...state, loading: true}
}

const authSuccess = (state = INITIAL_STATE, action) => {
    return { ...INITIAL_STATE, user: action.payload };
}

const HANDLERS = {
    [types.AUTH_REQUEST]: authRequest,
    [types.AUTH_ERROR]: authError,
    [types.AUTH_SUCCESS]: authSuccess
}

export default createReducer(INITIAL_STATE, HANDLERS);
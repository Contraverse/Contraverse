import * as types from '../../actions/auth/types';

const INITIAL_STATE = {
    email: null,
    username: null,
    password: null,
    imageURI: null,
    loading: false,
    error: '',
    user: null
}

export default (state = INITIAL_STATE, { type, payload }) => {
    switch(type) {
        case types.UPDATE_FORM:
            return { ...state, [payload.key]: payload.value };
        case types.AUTH_REQUEST:
            return { ...state, loading: true};
        case types.AUTH_SUCCESS:
            return { ...state, loading: false, user: payload };
        case types.AUTH_ERROR:
            return { ...state, loading: true, error: payload };
        case types.IMAGE_SELECT:
            return { ...state, imageURI: payload };
        default:
            return state;
    }
}
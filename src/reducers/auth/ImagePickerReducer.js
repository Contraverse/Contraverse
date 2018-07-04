import * as types from '../../actions/auth/types';

const INITIAL_STATE = {
    images: null,
}

export default (state = INITIAL_STATE, action) => {
    const { type, payload } = action;
    switch(type) {
        case types.IMAGES_FETCH_SUCCESS:
            return { ...state, images: payload };
        default:
            return state;
    }
}
import * as types from '../../actions/debates/types';

const INITIAL_STATE = {
    debates: [],
    loading: false
}

export default (state = INITIAL_STATE, action) => {
    const { type, payload } = action;
    switch(type) {
        case types.DEBATES_FETCH_REQUEST:
            return { ...state, loading: true};
        case types.DEBATES_FETCH_SUCCESS:
            return { ...state, debates: payload};
        default:
            return state;
    }
}

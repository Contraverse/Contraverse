import * as types from '../../actions/debates/types';

const INITIAL_STATE = {
    debates: []
}

export default (state = INITIAL_STATE, { type, payload }) => {
    switch(type) {
        case types.DEBATES_FETCH_SUCCESS:
            return { ...state, debates: payload};
        default:
            return state;
    }
}

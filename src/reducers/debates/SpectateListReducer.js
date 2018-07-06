import * as types from '../../actions/debates/types';

const INITIAL_STATE = {
    spectates: [],
}

export default (state = INITIAL_STATE, { type, payload }) => {
    switch(type) {
        case types.SPECTATES_FETCH_SUCCESS:
            return { ...state, spectates: payload};
        default:
            return state;
    }
}

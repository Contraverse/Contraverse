import * as types from '../../actions/auth/types';

const INITIAL_STATE = {
    intervalID: null
}

export default function(state = INITIAL_STATE, { type, payload }) {
    switch(type) {
        case types.INTERVAL_ID_SET:
            return { ...state, intervalID: payload };
        default:
            return state;
    }
}
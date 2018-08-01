import * as types from '../../actions/polls/types';

const INITIAL_STATE = {
  selectedAnswer: null
};

export default function (state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case types.ANSWER_SELECT:
      return { ...state, selectedAnswer: payload };
    default:
      return state;
  }
}
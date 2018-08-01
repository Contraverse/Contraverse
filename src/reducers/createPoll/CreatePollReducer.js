import * as types from '../../actions/createPoll/types';

const INITIAL_STATE = {
  question: '',
  answers: null,
};

export default function (state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case types.INIT_ANSWERS:
      return { ...state, answers: Array(payload).fill('') };
    case types.UPDATE_ANSWER:
      const newAnswers = [...state.answers];
      newAnswers[payload.index] = payload.answer;
      return { ...state, answers: newAnswers };
    case types.UPDATE_QUESTION:
      return { ...state, question: payload };
    default:
      return state;
  }
}
import { combineReducers, createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk'
import AuthReducer from './auth/AuthReducer';
import PollReducer from './polls/PollReducer';
import QuestionReducer from './polls/QuestionReducer';
import ResultReducer from './polls/ResultReducer';
import DebateListReducer from './debates/DebateListReducer';
import ChatroomReducer from './debates/ChatroomReducer';


const reducers = combineReducers({
    // auth
    auth: AuthReducer,

    //polls
    polls: PollReducer,
    questions: QuestionReducer,
    results: ResultReducer,

    // debates
    debateList: DebateListReducer,
    chatroom: ChatroomReducer,
})

export default createStore(reducers, {}, applyMiddleware(ReduxThunk));
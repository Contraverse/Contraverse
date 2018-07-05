import { combineReducers, createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk'
import SplashReducer from './auth/SplashReducer';
import AuthReducer from './auth/AuthReducer';
import ImagePickerReducer from './auth/ImagePickerReducer';
import PollReducer from './polls/PollReducer';
import QuestionReducer from './polls/QuestionReducer';
import ResultReducer from './polls/ResultReducer';
import DebateListReducer from './debates/DebateListReducer';
import ChatroomReducer from './debates/ChatroomReducer';


const reducers = combineReducers({
    // auth
    splash: SplashReducer,
    auth: AuthReducer,
    imagePicker: ImagePickerReducer,

    //polls
    polls: PollReducer,
    questions: QuestionReducer,
    results: ResultReducer,

    // debates
    debateList: DebateListReducer,
    chatroom: ChatroomReducer,
})

export default createStore(reducers, {}, applyMiddleware(ReduxThunk));
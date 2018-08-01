import { applyMiddleware, combineReducers, createStore } from 'redux';
import ReduxThunk from 'redux-thunk'
import SplashReducer from './auth/SplashReducer';
import AuthReducer from './auth/AuthReducer';
import ImagePickerReducer from './auth/ImagePickerReducer';
import PollReducer from './polls/PollReducer';
import QuestionReducer from './polls/QuestionReducer';
import ResultReducer from './polls/ResultReducer';
import DebateListReducer from './debates/DebateListReducer';
import SpectateListReducer from './debates/SpectateListReducer';
import ChatroomReducer from './debates/ChatroomReducer';
import ProfileReducer from './profile/ProfileReducer'
import CreatePollReducer from "./createPoll/CreatePollReducer";


const reducers = combineReducers({
  // auth
  splash: SplashReducer,
  auth: AuthReducer,
  imagePicker: ImagePickerReducer,

  //polls
  polls: PollReducer,
  createPoll: CreatePollReducer,
  questions: QuestionReducer,
  results: ResultReducer,

  // debates
  debateList: DebateListReducer,
  spectateList: SpectateListReducer,
  chatroom: ChatroomReducer,

  // profile
  profile: ProfileReducer,
});

export default createStore(reducers, {}, applyMiddleware(ReduxThunk));
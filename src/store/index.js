import { combineReducers, createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk'
import AuthReducer from '../screens/auth/reducer';
import PollReducer from '../screens/main/PollScreen/reducer';
import QuestionReducer from '../screens/main/QuestionScreen/reducer';
import ResultReducer from '../screens/main/ResultScreen/reducer';

const reducers = combineReducers({
    auth: AuthReducer,
    polls: PollReducer,
    question: QuestionReducer,
    results: ResultReducer
})

export default createStore(reducers, {}, applyMiddleware(ReduxThunk));
import axios from 'axios';
import { ROOT } from '../../../config/api.json'
import * as types from './types';

export function leaveConversation(userID, debateID, navigation) {
    return (dispatch, getState) => {
        axios.post(`${ROOT}/leaveConversation`, { userID, debateID });
        const { debates } = getState().debateList;
        console.log(debates);
        const newDebates = debates.filter(debate => debate.id !== debateID);
        dispatch({ type: types.DEBATES_FETCH_SUCCESS, payload: newDebates });
        navigation.navigate('DebateList');
    }
}
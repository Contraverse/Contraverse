import { INTERVAL_ID_SET } from './types';

export function setIntervalID(intervalID) {
    return { type: INTERVAL_ID_SET, payload: intervalID };
}
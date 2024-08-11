import {Dispatch} from "react";
import {ElapsedTimeAction, ElapsedTimeActionTypes} from "../../../types/elapsedTime.ts";
import {getElapsedTime} from "../../../utils/getElapsedTime.ts";

export const getElapsedTimeTestAction = (startTimer: number, endTimer: number) => {
    return (dispatch: Dispatch<ElapsedTimeAction>) => {
        const response = getElapsedTime(startTimer, endTimer) ;
        dispatch({type: ElapsedTimeActionTypes.GET_ELAPSED_TIME_SUCCESS, payload: response})
    }
}
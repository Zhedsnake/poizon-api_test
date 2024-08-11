import {Dispatch} from "react";
import {ElapsedTimeAction, ElapsedTimeActionTypes} from "../../../types/elapsedTime.ts";

export const defElapsedTimeTest = () => {
    return (dispatch: Dispatch<ElapsedTimeAction>) => {
        dispatch({type: ElapsedTimeActionTypes.DEF_ELAPSED_TIME})
    }
}
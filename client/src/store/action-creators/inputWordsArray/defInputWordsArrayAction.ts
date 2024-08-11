import {Dispatch} from "react";
import {InputWordsAction, InputWordsStateActionTypes} from "../../../types/inputWords.ts";

export const defInputWordsArrayAction = () => {
    return (dispatch: Dispatch<InputWordsAction>) => {
        dispatch({type: InputWordsStateActionTypes.DEF_INPUT_WORDS})
    }
}
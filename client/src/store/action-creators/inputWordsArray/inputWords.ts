import {Dispatch} from "react";
import {InputWordsAction, InputWordsStateActionTypes} from "../../../types/inputWords.ts";

export const inputWordsAction = (words: string[]) => {
    return (dispatch: Dispatch<InputWordsAction>) => {
        dispatch({type: InputWordsStateActionTypes.INPUT_WORDS_SUCCESS, payload: words})
    }
}
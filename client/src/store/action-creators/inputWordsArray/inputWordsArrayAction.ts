import {Dispatch} from "react";
import {InputWordsAction, InputWordsStateActionTypes} from "../../../types/inputWords.ts";

export const inputWordsArrayAction = (words: string) => {
    return (dispatch: Dispatch<InputWordsAction>) => {
        dispatch({type: InputWordsStateActionTypes.INPUT_WORDS_SUCCESS, payload: words.trim().split(' ')})
    }
}
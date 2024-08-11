import {Dispatch} from "react";
import {WordsAction, WordsStateActionTypes} from "../../../types/generateWords.ts";

export const defWordsAction = () => {
    return (dispatch: Dispatch<WordsAction>) => {
        dispatch({type: WordsStateActionTypes.DEF_WORDS})
    }
}
import {Dispatch} from "react";
import {getRandomWords} from "../../../utils/getRandomWords.ts";
import {WordsAction, WordsStateActionTypes} from "../../../types/generateWords.ts";

export const getWordsAction = () => {
    return (dispatch: Dispatch<WordsAction>) => {
            const response = getRandomWords() ;
            dispatch({type: WordsStateActionTypes.GET_WORDS_SUCCESS, payload: response})
    }
}
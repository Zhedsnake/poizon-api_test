import {Dispatch} from "react";
import {getRandomWords} from "../../../utils/getRandomWords.ts";
import {GenerateWordsAction, GenerateWordsStateActionTypes} from "../../../types/generateWords.ts";

export const getWordsAction = () => {
    return (dispatch: Dispatch<GenerateWordsAction>) => {
            const response = getRandomWords() ;
            dispatch({type: GenerateWordsStateActionTypes.GET_GENERATE_WORDS_SUCCESS, payload: response})
    }
}
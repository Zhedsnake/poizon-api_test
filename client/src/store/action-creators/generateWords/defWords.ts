import {Dispatch} from "react";
import {GenerateWordsAction, GenerateWordsStateActionTypes} from "../../../types/generateWords.ts";

export const defWordsAction = () => {
    return (dispatch: Dispatch<GenerateWordsAction>) => {
        dispatch({type: GenerateWordsStateActionTypes.DEF_GENERATE_WORDS})
    }
}
import {
    WordsAction, WordsState,
    WordsStateActionTypes
} from "../../../types/generateWords.ts";


const initialState: WordsState = {
    data: []
};


export const generateWordsReducer = (state = initialState, action: WordsAction): WordsState => {
    switch (action.type) {
        case WordsStateActionTypes.GET_WORDS_SUCCESS:
            return {data: action.payload};
        case WordsStateActionTypes.DEF_WORDS:
            return {...state, ...initialState};
        default:
            return state;
    }
};



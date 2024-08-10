import {GenerateWordsAction, generateWordsState, GenerateWordsStateActionTypes} from "../../../types/generateWords.ts";


const initialState: generateWordsState = {
    data: []
};


export const generateWordsReducer = (state = initialState, action: GenerateWordsAction): generateWordsState => {
    switch (action.type) {
        case GenerateWordsStateActionTypes.GET_GENERATE_WORDS_SUCCESS:
            return { data: action.payload };
        case GenerateWordsStateActionTypes.DEF_GENERATE_WORDS:
            return { ...state, ...initialState };
        default:
            return state;
    }
};



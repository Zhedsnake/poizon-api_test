import {InputWordsAction, InputWordsState, InputWordsStateActionTypes} from "../../../types/inputWords.ts";


const initialState: InputWordsState = {
    data: []
};


export const inputWordsArrayReducer = (state = initialState, action: InputWordsAction): InputWordsState => {
    switch (action.type) {
        case InputWordsStateActionTypes.INPUT_WORDS_SUCCESS:
            return {data: action.payload};
        case InputWordsStateActionTypes.DEF_INPUT_WORDS:
            return {...state, ...initialState};
        default:
            return state;
    }
};



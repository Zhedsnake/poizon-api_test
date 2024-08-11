
export interface InputWordsState {
    data: string[]
}

export enum InputWordsStateActionTypes {
    INPUT_WORDS_SUCCESS = 'INPUT_WORDS_SUCCESS',
    DEF_INPUT_WORDS='DEF_INPUT_WORDS',
}
interface InputWordsSuccessAction {
    type: InputWordsStateActionTypes.INPUT_WORDS_SUCCESS;
    payload: string[];
}
interface CleanInputWordsAction {
    type: InputWordsStateActionTypes.DEF_INPUT_WORDS;
}
export type InputWordsAction = InputWordsSuccessAction | CleanInputWordsAction


export interface WordsState {
    data: string[]
}

export enum WordsStateActionTypes {
    GET_WORDS_SUCCESS = 'GET_WORDS_SUCCESS',
    DEF_WORDS='DEF_WORDS',
}
interface WordsSuccessAction {
    type: WordsStateActionTypes.GET_WORDS_SUCCESS;
    payload: string[];
}
interface CleanWordsAction {
    type: WordsStateActionTypes.DEF_WORDS;
}
export type WordsAction = WordsSuccessAction | CleanWordsAction

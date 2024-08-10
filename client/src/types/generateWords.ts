
export interface generateWordsState {
    data: string[]
}

export enum GenerateWordsStateActionTypes {
    GET_GENERATE_WORDS_SUCCESS = 'GET_GENERATE_WORDS_SUCCESS',
    DEF_GENERATE_WORDS='DEF_GENERATE_WORDS',
}
interface GetGenerateWordsSuccessAction {
    type: GenerateWordsStateActionTypes.GET_GENERATE_WORDS_SUCCESS;
    payload: string[];
}
interface CleanGenerateWordsAction {
    type: GenerateWordsStateActionTypes.DEF_GENERATE_WORDS;
}
export type GenerateWordsAction = GetGenerateWordsSuccessAction | CleanGenerateWordsAction

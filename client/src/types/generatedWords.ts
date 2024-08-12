/**
 * Интерфейс, представляющий состояние слов, которые будут предложены вводить пользователю.
 * @property {string[]} data - Массив строк, представляющий набор случайных слов слов.
 */
export interface GeneratedWordsState {
    data: string[]
}

/**
 * Перечисление типов действий для управления редьюсером redux на предложеные слова пользователю.
 * @readonly
 * @enum {string}
 */
export enum GeneratedWordsActionTypes {
    /** Действие для успешного получения, предложеных пользователю слов. */
    GET_GENERATED_WORDS_SUCCESS = 'GET_GENERATED_WORDS_SUCCESS',

    /** Действие для очистки слов. */
    DEF_GENERATED_WORDS='DEF_GENERATED_WORDS',
}

/**
 * Интерфейс для действия успешного получения слов.
 * @interface
 * @property {GeneratedWordsActionTypes.GET_GENERATED_WORDS_SUCCESS} type - Тип действия.
 * @property {string[]} payload - Данные, передаваемые в состояние (массив полученных слов).
 */
interface GeneratedWordsSuccessAction {
    type: GeneratedWordsActionTypes.GET_GENERATED_WORDS_SUCCESS;
    payload: string[];
}

/**
 * Интерфейс для действия очистки слов.
 * @interface
 * @property {GeneratedWordsActionTypes.DEF_GENERATED_WORDS} type - Тип действия.
 */
interface CleanGeneratedWordsAction {
    type: GeneratedWordsActionTypes.DEF_GENERATED_WORDS;
}

/**
 * Тип, объединяющий все возможные действия для управления редьюсером redux на слова, предложеные пользователю.
 * Может быть либо успешным получением слов, либо очисткой слов.
 */
export type GeneratedWordsAction = GeneratedWordsSuccessAction | CleanGeneratedWordsAction

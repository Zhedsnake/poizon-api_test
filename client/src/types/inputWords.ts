/**
 * Интерфейс, представляющий состояние вводимых пользователем слов.
 * @property {string[]} data - Массив строк, вводимых пользователем.
 */
export interface InputWordsArrayState {
    data: string[]
}

/**
 * Перечисление типов действий для управления редьюсером redux.
 * @readonly
 * @enum {string}
 */
export enum InputWordsArrayActionTypes {
    /** Действие для успешного сохранения введенных слов пользователем. */
    INPUT_WORDS_ARRAY_SUCCESS = 'INPUT_WORDS_ARRAY_SUCCESS',

    /** Действие для очистки слов пользователя. */
    DEF_INPUT_WORDS_ARRAY='DEF_INPUT_WORDS_ARRAY',
}

/**
 * Интерфейс для действия успешного ввода слов.
 * @interface
 * @property {InputWordsArrayActionTypes.INPUT_WORDS_ARRAY_SUCCESS} type - Тип действия.
 * @property {string[]} payload - Данные, передаваемые в состояние (массив введенных слов).
 */
interface InputWordsArraySuccessAction {
    type: InputWordsArrayActionTypes.INPUT_WORDS_ARRAY_SUCCESS;
    payload: string[];
}

/**
 * Интерфейс для действия очистки введенных слов.
 * @interface
 * @property {InputWordsArrayActionTypes.DEF_INPUT_WORDS_ARRAY} type - Тип действия.
 */
interface CleanInputWordsArrayAction {
    type: InputWordsArrayActionTypes.DEF_INPUT_WORDS_ARRAY;
}


/**
 * Тип, объединяющий все возможные действия для управления редьюсером redux на вводимые слова пользователем.
 * Может быть либо успешным вводом слов, либо очисткой введенных слов.
 */
export type InputWordsArrayAction = InputWordsArraySuccessAction | CleanInputWordsArrayAction

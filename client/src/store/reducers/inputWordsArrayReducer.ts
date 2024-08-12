import {
    InputWordsArrayAction,
    InputWordsArrayState,
    InputWordsArrayActionTypes
} from "../../types/inputWords.ts";


/**
 * Начальное состояние для редуктора ввода слов.
 * 
 * @constant {InputWordsArrayState} initialState - Начальное состояние, в котором массив `data` пуст.
 */
const initialState: InputWordsArrayState = {
    data: []
};

/**
 * Редуктор для обработки состояния массива введенных слов.
 * 
 * @function
 * @param {InputWordsArrayState} state - Текущее состояние редуктора. По умолчанию принимает значение `initialState`.
 * @param {InputWordsArrayAction} action - Действие, которое будет обработано редуктором.
 * @returns {InputWordsArrayState} Новое состояние редуктора в зависимости от типа действия.
 * 
 * @description
 * Этот редуктор обрабатывает два типа действий:
 * 1. `INPUT_WORDS_SUCCESS`: Обновляет состояние, устанавливая новый массив введенных слов.
 * 2. `DEF_INPUT_WORDS`: Сбрасывает состояние к начальному состоянию.
 */
export const inputWordsArrayReducer = (state = initialState, action: InputWordsArrayAction): InputWordsArrayState => {
    switch (action.type) {
        case InputWordsArrayActionTypes.INPUT_WORDS_ARRAY_SUCCESS:
            return {data: action.payload};
        case InputWordsArrayActionTypes.DEF_INPUT_WORDS_ARRAY:
            return {...state, ...initialState};
        default:
            return state;
    }
};



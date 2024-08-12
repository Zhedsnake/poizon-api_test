import {GeneratedWordsAction, GeneratedWordsActionTypes, GeneratedWordsState,} from "../../types/generatedWords.ts";


/**
 * Начальное состояние для редуктора сгенерированных слов, предложенных пользователю для ввода.
 * 
 * @constant {GeneratedWordsState} initialState - Начальное состояние, в котором массив `data` пуст.
 */
const initialState: GeneratedWordsState = {
    data: []
};

/**
 * Редуктор для обработки состояния сгенерированных слов, предложенных пользователю для ввода.
 * 
 * @function
 * @param {GeneratedWordsState} state - Текущее состояние редуктора. По умолчанию принимает значение `initialState`.
 * @param {GeneratedWordsAction} action - Действие, которое будет обработано редуктором.
 * @returns {GeneratedWordsState} Новое состояние редуктора в зависимости от типа действия.
 * 
 * @description
 * Этот редуктор обрабатывает два типа действий:
 * 1. `GET_GENERATED_WORDS_SUCCESS`: Обновляет состояние, устанавливая новый массив сгенерированных слов, предложенных пользователю для ввода.
 * 2. `DEF_GENERATED_WORDS`: Сбрасывает состояние к начальному состоянию.
 */
export const generateWordsReducer = (state = initialState, action: GeneratedWordsAction): GeneratedWordsState => {
    switch (action.type) {
        case GeneratedWordsActionTypes.GET_GENERATED_WORDS_SUCCESS:
            return {data: action.payload};
        case GeneratedWordsActionTypes.DEF_GENERATED_WORDS:
            return {...state, ...initialState};
        default:
            return state;
    }
};



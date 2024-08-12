import {Dispatch} from "react";
import {getRandomWords} from "../../../utils/getRandomWords.ts";
import {GeneratedWordsAction, GeneratedWordsActionTypes} from "../../../types/generatedWords.ts";

/**
 * Действие для получения случайных слов, предложенных для ввода пользователю, и их передачи в редуктор.
 *
 * @function
 * @returns {Function} Функция, принимающая `dispatch` и отправляющая действие в редуктор с полученными словами.
 *
 * @description
 * Эта функция генерирует случайные слова с помощью утилиты `getRandomWords` и отправляет их
 * в редуктор с типом действия `GET_GENERATED_WORDS_SUCCESS`. Слова передаются в виде полезной нагрузки (`payload`).
 */
export const getWordsAction = () => {
    return (dispatch: Dispatch<GeneratedWordsAction>) => {
            const response = getRandomWords() ;
            dispatch({type: GeneratedWordsActionTypes.GET_GENERATED_WORDS_SUCCESS, payload: response})
    }
}
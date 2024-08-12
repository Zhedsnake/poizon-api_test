import {Dispatch} from "react";
import {InputWordsArrayAction, InputWordsArrayActionTypes} from "../../../types/inputWords.ts";

/**
 * Действие для обновления массива введенных слов пользователем.
 *
 * @function
 * @param {string} words - Введенные пользователем слова в виде строки.
 * @returns {Function} Функция, принимающая `dispatch` и отправляющая действие в редуктор.
 *
 * @description
 * Эта функция разбивает введенную строку на массив слов, разделяя их по пробелам,
 * и отправляет действие `INPUT_WORDS_ARRAY_SUCCESS` с этим массивом в редуктор.
 */
export const inputWordsArrayAction = (words: string) => {
    return (dispatch: Dispatch<InputWordsArrayAction>) => {
        dispatch({type: InputWordsArrayActionTypes.INPUT_WORDS_ARRAY_SUCCESS, payload: words.trim().split(' ')})
    }
}
import {Dispatch} from "react";
import {InputWordsArrayAction, InputWordsArrayActionTypes} from "../../../types/inputWords.ts";

/**
 * Действие для сброса массива введенных слов пользователем в исходное состояние.
 *
 * @function
 * @returns {Function} Функция, принимающая `dispatch` и отправляющая действие в редуктор.
 *
 * @description
 * Эта функция отправляет действие `DEF_INPUT_WORDS_ARRAY` в редуктор, чтобы сбросить
 * массив введенных слов к исходному состоянию.
 */
export const defInputWordsArrayAction = () => {
    return (dispatch: Dispatch<InputWordsArrayAction>) => {
        dispatch({type: InputWordsArrayActionTypes.DEF_INPUT_WORDS_ARRAY})
    }
}
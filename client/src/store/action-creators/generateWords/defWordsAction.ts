import {Dispatch} from "react";
import {GeneratedWordsAction, GeneratedWordsActionTypes} from "../../../types/generatedWords.ts";

/**
 * Действие для сброса сгенерированных слов, предложенных пользователю для ввода, в начальное состояние.
 *
 * @function
 * @returns {Function} Функция, принимающая `dispatch` и отправляющая действие в редуктор для сброса сгенерированных слов, предложенных пользователю для ввода.
 *
 * @description
 * Эта функция отправляет действие с типом `DEF_GENERATED_WORDS`, которое сбрасывает
 * состояние сгенерированных слов, предложенных пользователю для ввода, в начальное состояние в редукторе.
 */
export const defWordsAction = () => {
    return (dispatch: Dispatch<GeneratedWordsAction>) => {
        dispatch({type: GeneratedWordsActionTypes.DEF_GENERATED_WORDS})
    }
}
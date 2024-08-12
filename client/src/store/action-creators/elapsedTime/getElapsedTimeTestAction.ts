import {Dispatch} from "react";
import {ElapsedTimeAction, ElapsedTimeActionTypes} from "../../../types/elapsedTime.ts";
import {getElapsedTime} from "../../../utils/getElapsedTime.ts";

/**
 * Действие для расчета и сохранения времени прохождения теста скорости печати пользователя, прошедшего между стартом и окончанием теста.
 *
 * @function
 * @param {number} startTimer - Время начала теста (в миллисекундах).
 * @param {number} endTimer - Время окончания теста (в миллисекундах).
 * @returns {Function} Функция, принимающая `dispatch` и отправляющая действие в редуктор для сохранения прошедшего времени.
 *
 * @description
 * Эта функция рассчитывает прошедшее время теста скорости печати пользователя с помощью функции `getElapsedTime`, а затем отправляет
 * действие с типом `GET_ELAPSED_TIME_SUCCESS` и рассчитанным временем (в секундах) в редуктор.
 */
export const getElapsedTimeTestAction = (startTimer: number, endTimer: number) => {
    return (dispatch: Dispatch<ElapsedTimeAction>) => {
        const response = getElapsedTime(startTimer, endTimer) ;
        dispatch({type: ElapsedTimeActionTypes.GET_ELAPSED_TIME_SUCCESS, payload: response})
    }
}
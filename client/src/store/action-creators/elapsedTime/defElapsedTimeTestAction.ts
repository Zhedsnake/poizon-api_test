import {Dispatch} from "react";
import {ElapsedTimeAction, ElapsedTimeActionTypes} from "../../../types/elapsedTime.ts";

/**
 * Действие для сброса состояния времени, прошедшего в тесте на скорость печати пользователя.
 *
 * @function
 * @returns {Function} Функция, принимающая `dispatch` и отправляющая действие для сброса времени прохождения теста на скорость печати в редуктор.
 *
 * @description
 * Эта функция отправляет действие с типом `DEF_ELAPSED_TIME` в редуктор, чтобы сбросить состояние времени,
 * прошедшего с момента тестирования скорости печати польхователя.
 */
export const defElapsedTimeTestAction = () => {
    return (dispatch: Dispatch<ElapsedTimeAction>) => {
        dispatch({type: ElapsedTimeActionTypes.DEF_ELAPSED_TIME})
    }
}
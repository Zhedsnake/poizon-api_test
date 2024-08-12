import {ElapsedTimeAction, ElapsedTimeActionTypes, ElapsedTimeState} from "../../types/elapsedTime.ts";


/**
 * Начальное состояние для редуктора времени прохождения теста на скорость печати пользователем.
 * 
 * @constant {ElapsedTimeState} initialState - Начальное состояние, в котором данные (`data`) равны 0.
 */
const initialState: ElapsedTimeState = {
    data: 0
};


/**
 * Редуктор для обработки состояния времени выполнения теста на скорость печати пользователем.
 * 
 * @function
 * @param {ElapsedTimeState} state - Текущее состояние редуктора. По умолчанию принимает значение `initialState`.
 * @param {ElapsedTimeAction} action - Действие, которое будет обработано редуктором.
 * @returns {ElapsedTimeState} Новое состояние редуктора в зависимости от типа действия.
 * 
 * @description
 * Этот редуктор обрабатывает два типа действий:
 * 1. `GET_ELAPSED_TIME_SUCCESS`: Обновляет состояние, устанавливая новое значение времени.
 * 2. `DEF_ELAPSED_TIME`: Сбрасывает состояние к начальному состоянию.
 */
export const elapsedTimeReducer = (state = initialState, action: ElapsedTimeAction): ElapsedTimeState => {
    switch (action.type) {
        case ElapsedTimeActionTypes.GET_ELAPSED_TIME_SUCCESS:
            return {data: action.payload};
        case ElapsedTimeActionTypes.DEF_ELAPSED_TIME:
            return {...state, ...initialState};
        default:
            return state;
    }
};



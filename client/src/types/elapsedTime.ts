/**
 * Интерфейс, представляющий состояние времени выполнения теста на скорость печати пользователем.
 * @property {number} data - Числовое значение, представляющее прошедшее время.
 */
export interface ElapsedTimeState {
    data: number
}

/**
 * Перечисление типов действий для управления редьюсерами redux времени выполнения теста на скорость печати пользователем.
 * @readonly
 * @enum {string}
 */
export enum ElapsedTimeActionTypes {
    /** Действие для успешного получения времени выполнения теста на скорость печати пользователем. */
    GET_ELAPSED_TIME_SUCCESS = 'GET_ELAPSED_TIME_SUCCESS',

    /** Действие для сброса времени выполнения теста на скорость печати пользователем. */
    DEF_ELAPSED_TIME='DEF_ELAPSED_TIME',
}

/**
 * Интерфейс для действия успешного получения времени выполнения теста на скорость печати пользователем.
 * @interface
 * @property {ElapsedTimeActionTypes.GET_ELAPSED_TIME_SUCCESS} type - Тип действия.
 * @property {number} payload - Данные, передаваемые в состояние (прошедшее время в секундах).
 */
interface ElapsedTimeSuccessAction {
    type: ElapsedTimeActionTypes.GET_ELAPSED_TIME_SUCCESS;
    payload: number;
}

/**
 * Интерфейс для действия сброса времени выполнения теста на скорость печати пользователем.
 * @interface
 * @property {ElapsedTimeActionTypes.DEF_ELAPSED_TIME} type - Тип действия.
 */
interface CleanElapsedTimeAction {
    type: ElapsedTimeActionTypes.DEF_ELAPSED_TIME;
}

/**
 * Тип, объединяющий все возможные действия для управления редьюсером redux на времея выполнения теста на скорость печати пользователем.
 * Может быть либо успешным получением времени выполнения, либо его сбросом.
 */
export type ElapsedTimeAction = ElapsedTimeSuccessAction | CleanElapsedTimeAction

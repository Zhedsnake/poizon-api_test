import {Dispatch, SetStateAction} from "react";


export interface Errors {
    /**
     * Количество ошибок, допущенных в тесте пользователем.
     *
     * @type {number}
     */
    errorCount: number;

    /**
     * Функция для установки количества ошибок, допущенных в тесте пользователем.
     *
     * @param {number} value - Новое значение количества ошибок.
     * @returns {void}
     */
    setErrorCount: Dispatch<SetStateAction<number>>;
}

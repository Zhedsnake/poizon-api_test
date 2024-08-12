import {Dispatch, SetStateAction} from "react";


export interface Done {
    /**
     * Указывает, завершен ли тест.
     *
     * @type {boolean}
     */
    done: boolean;

    /**
     * Функция для установки состояния завершенности теста.
     *
     * @param {boolean} value - Новое значение состояния завершенности теста.
     * @returns {void}
     */
    setDone: Dispatch<SetStateAction<boolean>>;
}

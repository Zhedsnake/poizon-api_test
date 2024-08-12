import {Dispatch, SetStateAction} from "react";


export interface PossibleChars {
    /**
     * Количество возможных символов для теста, которые сможет вводить пользователь.
     *
     * @type {number}
     */
    possibleChars: number,

    /**
     * Функция для установки количества возможных символов, которые сможет вводить пользователь.
     *
     * @param {number} value - Новое значение количества возможных символов.
     * @returns {void}
     */
    setPossibleChars: Dispatch<SetStateAction<number>>;
}

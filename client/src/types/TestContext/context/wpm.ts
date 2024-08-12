import {Dispatch, SetStateAction} from "react";


export interface Wpm {
    /**
     * Сколько слов в минуту вводил пользователь, вычисленные на основе теста скорости печати.
     *
     * @type {number}
     */
    wpm: number;

    /**
     * Функция для установки количества слов в минуту, вводимых пользователем.
     *
     * @param {number} value - Новое значение слов в минуту.
     * @returns {void}
     */
    setWpm: Dispatch<SetStateAction<number>>;
}

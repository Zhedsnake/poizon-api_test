import {Dispatch, SetStateAction} from "react";


export interface InputValue {
    /**
     * Вводимый текст пользователем.
     *
     * @type {string}
     */
    inputValue: string;

    /**
     * Функция для установки значения введенного текста пользователем.
     *
     * @param {string} value - Новое значение введенного текста.
     * @returns {void}
     */
    setInputValue: Dispatch<SetStateAction<string>>;
}

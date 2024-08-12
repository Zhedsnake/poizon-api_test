import {Dispatch, SetStateAction} from "react";


export interface Timer {
    /**
     * Указывает, запущен ли таймер.
     *
     * @type {boolean}
     */
    startedTimer: boolean;

    /**
     * Функция для установки состояния запуска таймера.
     *
     * @param {boolean} value - Новое значение состояния запуска таймера.
     * @returns {void}
     */
    setStartedTimer: Dispatch<SetStateAction<boolean>>;

    /**
     * Время начала теста в миллисекундах с момента начала.
     *
     * @type {number | null}
     */
    startTimer: number | null;

    /**
     * Функция для установки времени начала теста.
     *
     * @param {number | null} value - Новое значение времени начала теста.
     * @returns {void}
     */
    setStartTimer: Dispatch<SetStateAction<number | null>>;

    /**
     * Время окончания теста скорости печати пользователя в миллисекундах.
     *
     * @type {number | null}
     */
    endTimer: number | null;

    /**
     * Функция для установки времени окончания теста скорости печати пользователя.
     *
     * @param {number | null} value - Новое значение времени окончания теста.
     * @returns {void}
     */
    setEndTimer: Dispatch<SetStateAction<number | null>>;
}

import {getWordsAction} from "./generateWords/getWordsAction.ts";
import {defWordsAction} from "./generateWords/defWordsAction.ts";
import {inputWordsArrayAction} from "./inputWordsArray/inputWordsArrayAction.ts";
import {defInputWordsArrayAction} from "./inputWordsArray/defInputWordsArrayAction.ts";
import {getElapsedTimeTestAction} from "./elapsedTime/getElapsedTimeTestAction.ts";
import {defElapsedTimeTestAction} from "./elapsedTime/defElapsedTimeTestAction.ts";

/**
 * Экспорт всех действий (actions) redux.
 *
 * @module
 *
 * @description
 * Этот модуль экспортирует объект, содержащий функции-действия для управления состоянием редукторов redux.
 * Все функции предназначены для работы с Redux и предназначены для получения, сброса и обработки данных,
 * связанных с тестированием скорости печати.
 *
 * @typedef {Object} Actions
 * @property {Function} getWordsAction - Функция для получения случайных слов, предложенных пользователю для ввода.
 * @property {Function} defWordsAction - Функция для сброса состояния слов, предложенных пользователю для ввода, в начальное сосотояние.
 * @property {Function} inputWordsArrayAction - Функция для обработки слов, вводимых пользователем.
 * @property {Function} defInputWordsArrayAction - Функция для сброса состояния слов, вводимых пользователем.
 * @property {Function} getElapsedTimeTestAction - Функция для получения времени, теста скорости печати пользователя.
 * @property {Function} defElapsedTimeTestAction - Функция для сброса состояния времени теста скорости печати пользователя.
 */
export default {
    getWordsAction,
    defWordsAction,
    inputWordsArrayAction,
    defInputWordsArrayAction,
    getElapsedTimeTestAction,
    defElapsedTimeTestAction
}

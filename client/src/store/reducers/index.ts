import {combineReducers} from "@reduxjs/toolkit";
import {generateWordsReducer} from "./generateWordsReducer.ts";
import {inputWordsArrayReducer} from "./inputWordsArrayReducer.ts";
import {elapsedTimeReducer} from "./elapsedTimeReducer.ts";


/**
 * Корневой редуктор приложения, объединяющий несколько редукторов в один.
 *
 * @constant {Function} rootReducer - Редуктор, объединяющий редукторы:
 * - `generateWords`: редуктор для генерации слов, предложенных пользователю для ввода (`generateWordsReducer`)
 * - `inputWordsArray`: редуктор для обработки массива введенных слов пользователем (`inputWordsArrayReducer`)
 * - `elapsedTime`: редуктор для отслеживания времени тестирования скорости печати пользователя (`elapsedTimeReducer`)
 */
export const rootReducer = combineReducers({
    generateWords: generateWordsReducer,
    inputWordsArray: inputWordsArrayReducer,
    elapsedTime: elapsedTimeReducer,
})

/**
 * Тип корневого редуктора приложения, объединяющего несколько редукторов в один.
 *
 * @typedef {ReturnType<typeof rootReducer>} RootState
 * @description Определяет тип состояния, возвращаемого корневым редуктором `rootReducer`.
 * Этот тип используется для кастомного хука useTypedSelector.ts чтобы типизировать хук useSelector от redux.
 */
export type RootState = ReturnType<typeof rootReducer>

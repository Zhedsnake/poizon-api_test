import {createContext} from "react";
import {TestContextType} from "../types/TestContext";


/**
 * Начальное значение контекста для `TestContext`.
 * Это значение используется для инициализации контекста и должно быть заменено реальными функциями и состоянием в компоненте-обертке.
 *
 * @type {TestContextType}
 */
const initialContextValue: TestContextType = {
    done: false,
    setDone: () => {},
    inputValue: '',
    setInputValue: () => {},
    wpm: 0,
    setWpm: () => {},
    errorCount: 0,
    setErrorCount: () => {},
    possibleChars: 0,
    setPossibleChars: () => {},
    startedTimer: false,
    setStartedTimer: () => {},
    startTimer: null,
    setStartTimer: () => {},
    endTimer: null,
    setEndTimer: () => {},
};


/**
 * Контекст для теста скорости печати пользователя.
 * Этот контекст используется для предоставления значений и функций управления состоянием теста скорости печати пользователя компонентам приложения.
 *
 * @type {React.Context<TestContextType>}
 */
export const TestContext = createContext<TestContextType>(initialContextValue);

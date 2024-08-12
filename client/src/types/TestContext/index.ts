import {Done} from "./context/done.ts";
import {Wpm} from "./context/wpm.ts";
import {InputValue} from "./context/inputValue.ts";
import {Errors} from "./context/errors.ts";
import {PossibleChars} from "./context/possibleChars.ts";
import {Timer} from "./context/timer.ts";

/**
 * Интерфейс для типа который используется в `TestContext` для предоставления значений и функций управления состоянием теста скорости печати пользователя компонентам.
 *
 * @interface
 */
export interface TestContextType extends Done, InputValue, Wpm, Errors, PossibleChars, Timer {}

import React, {useState} from "react";
import AppRouter from "./components/AppRouter";
import { TestContext } from "./context";


//Redux
import {Provider} from 'react-redux';
import store from "./store";

// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// css
import './css/body-backgrount.css';

/**
 * Главный компонент приложения, который инициализирует состояние контекста и оборачивает все компоненты 
 * в провайдеры для контекста и Redux.
 *
 * @returns {React.JSX} - Возвращает корневой компонент приложения.
 */
const App: React.FC = () => {
    /**
     * Состояние для отслеживания, завершен ли тест скорости печати пользователя.
     *
     * @type {[boolean, React.Dispatch<React.SetStateAction<boolean>)]}
     */
    const [done, setDone] = useState<boolean>(false);

    /**
     * Состояние для хранения введенного текста пользователем.
     *
     * @type {[string, React.Dispatch<React.SetStateAction<string>)]}
     */
    const [inputValue, setInputValue] = useState<string>('');

    /**
     * Состояние для хранения количества возможных символов.
     *
     * @type {[number, React.Dispatch<React.SetStateAction<number>)]}
     */
    const [possibleChars, setPossibleChars] = useState<number>(0)

    /**
     * Состояние для хранения скорости печати слов в минуту.
     *
     * @type {[number, React.Dispatch<React.SetStateAction<number>)]}
     */
    const [wpm, setWpm] = useState<number>(0);

    /**
     * Состояние для хранения количества ошибок, допущенных в тесте пользователем.
     *
     * @type {[number, React.Dispatch<React.SetStateAction<number>)]}
     */
    const [errorCount, setErrorCount] = useState<number>(0);

    /**
     * Состояние для отслеживания запуска таймера тестирования.
     *
     * @type {[boolean, React.Dispatch<React.SetStateAction<boolean>)]}
     */
    const [startedTimer, setStartedTimer] = useState<boolean>(false);

    /**
     * Состояние для хранения времени, когда началось тестирование.
     *
     * @type {[number | null, React.Dispatch<React.SetStateAction<number | null>)]}
     */
    const [startTimer, setStartTimer] = useState<number | null>(null);

    /**
     * Состояние для хранения времени, когда закончиловсь тестироване.
     *
     * @type {[number | null, React.Dispatch<React.SetStateAction<number | null>)]}
     */
    const [endTimer, setEndTimer] = useState<number | null>(null);

    return (
        <Provider store={store}>
            <TestContext.Provider value ={{
                done,
                setDone,
                inputValue,
                setInputValue,
                startedTimer,
                setStartedTimer,
                startTimer,
                setStartTimer,
                wpm,
                setWpm,
                errorCount,
                setErrorCount,
                endTimer,
                setEndTimer,
                possibleChars,
                setPossibleChars
            }}>
                <AppRouter/>
            </TestContext.Provider>
        </Provider>
    )
}

export default App

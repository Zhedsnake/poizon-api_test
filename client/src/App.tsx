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
    // Состояние для отслеживания конца тестирования скорости печати пользователя
    const [done, setDone] = useState<boolean>(false);

    // Состояния для вводимых строк пользователем и ограничения
    const [inputValue, setInputValue] = useState<string>('');
    const [possibleChars, setPossibleChars] = useState<number>(0)

    // Состояние для скорости слов в минуту
    const [wpm, setWpm] = useState<number>(0);

    // Состояние количества ошибок
    const [errorCount, setErrorCount] = useState<number>(0);

    // Состояния для таймера
    const [startedTimer, setStartedTimer] = useState<boolean>(false);
    const [startTimer, setStartTimer] = useState<number | null>(null);
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

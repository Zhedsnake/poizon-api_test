import React, {useState} from "react";
import AppRouter from "./components/AppRouter";
import { TestContext } from "./context";


//Redux
import {Provider} from 'react-redux';
import store from "./store";

// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


const App: React.FC = () => {
    const [done, setDone] = useState<boolean>(false);

    const [inputValue, setInputValue] = useState<string>('');

    const [wpm, setWpm] = useState<number>(0);

    const [errorCount, setErrorCount] = useState<number>(0);

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
            }}>
                <AppRouter/>
            </TestContext.Provider>
        </Provider>
    )
}

export default App

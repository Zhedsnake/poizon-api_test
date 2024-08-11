import React, {useContext} from 'react';
import {TestContext} from "../context";
import {useActions} from "../hooks/useActions.ts";

const RestartButton: React.FC= () => {
    const {
        setDone,
        setInputValue,
        setStartedTimer,
        setStartTimer,
        setEndTimer,
        setErrorCount
    } = useContext(TestContext);

    const {getWordsAction, defElapsedTimeTest} = useActions()

    const handleRestart = () => {
        getWordsAction();

        setDone(false);

        setInputValue("");

        setErrorCount(0);

        setStartedTimer(false);
        setStartTimer(null);
        setEndTimer(null);
        defElapsedTimeTest();
    }

    return (
        <button onClick={handleRestart}>Начать сначала</button>
    );
};

export default RestartButton;
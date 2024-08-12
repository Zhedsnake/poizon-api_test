import React, {useContext} from 'react';
import {TestContext} from "../context";
import {useActions} from "../hooks/useActions.ts";

const RestartButton: React.FC = () => {
    const {
        setDone,
        setInputValue,
        setStartedTimer,
        setStartTimer,
        setEndTimer,
        setErrorCount
    } = useContext(TestContext);

    const {getWordsAction, defElapsedTimeTestAction} = useActions()

    const handleRestart = () => {
        getWordsAction();

        setDone(false);

        setInputValue("");

        setErrorCount(0);

        setStartedTimer(false);
        setStartTimer(null);
        setEndTimer(null);
        defElapsedTimeTestAction();
    }

    return (
        <div className="row">
            <button className="btn btn-dark mt-2" onClick={handleRestart}>Начать сначала</button>
        </div>
    );
};

export default RestartButton;
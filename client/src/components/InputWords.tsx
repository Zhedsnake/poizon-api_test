import React, {useContext, useEffect} from 'react';
import {TestContext} from "../context";
import {useActions} from "../hooks/useActions.ts";

interface InputWordsProps {
    placeholder: string
    className: string
};

const InputWords: React.FC<InputWordsProps> = (props) => {
    const {
        done,
        inputValue,
        setInputValue,
        startedTimer,
        setStartedTimer,
        setStartTimer
    } = useContext(TestContext);

    const { inputWordsArrayAction } = useActions()

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);

        if (!startedTimer) {
            setStartTimer(Date.now());

            setStartedTimer(true);
        }
    };

    useEffect(() => {
        inputWordsArrayAction(inputValue);
    }, [inputValue]);

    return (
        <input value={inputValue} onChange={handleInputChange} type="text" {...props} disabled={done}/>
    );
};

export default InputWords;
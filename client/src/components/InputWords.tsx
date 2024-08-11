import React, {useContext, useEffect} from 'react';
import {TestContext} from "../context";
import {useActions} from "../hooks/useActions.ts";

interface InputWordsProps {
    placeholder: string
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

    const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
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
        <div className="bg-secondary m-0 p-0 row">
            <textarea
                className="form-control bg-light fw-bold"
                rows="3"
                placeholder="Начните печатать здесь..."
                value={inputValue}
                onChange={handleInputChange}
                {...props}
                disabled={done}
            ></textarea>
        </div>
    );
};

export default InputWords;
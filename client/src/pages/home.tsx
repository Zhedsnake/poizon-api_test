import React, { useEffect, useState } from 'react';
import HighlightedText from "../components/HighlightedText";
import { getElapsedTime } from "../utils/getElapsedTime";
import {useActions} from "../hooks/useActions.ts";
import {useTypedSelector} from "../hooks/useTypedSelector.ts";

const Home: React.FC = () => {

    const [inputValue, setInputValue] = useState<string>('');
    const [inputWordsArray, setInputWordsArray] = useState<string[]>([]);

    const [done, setDone] = useState<boolean>(false);

    const [wpm, setWpm] = useState<number>(0);

    const [errorCount, setErrorCount] = useState<number>(0);

    const [elapsedTime, setElapsedTime] = useState<number>(0);
    const [startedTimer, setStartedTimer] = useState<boolean>(false);
    const [startTimer, setStartTimer] = useState<number | null>(null);
    const [endTimer, setEndTimer] = useState<number | null>(null);


    const {data: wordsData} = useTypedSelector(state => state.generateWords)
    const {getWordsAction, defWordsAction} = useActions()

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);

        if (!startedTimer) {
            setStartTimer(Date.now());
            setStartedTimer(true);
        }
    };

    useEffect(() => {
        getWordsAction()
    }, []);

    useEffect(() => {
        setInputWordsArray(inputValue.trim().split(' '));
    }, [inputValue]);

    useEffect(() => {
        if (wordsData.length !== 0 && inputWordsArray.length === wordsData.length) {
            setDone(true);

            setEndTimer(Date.now());
        }
    }, [inputWordsArray]);

    useEffect(() => {
        const timeInSeconds = getElapsedTime(startTimer, endTimer);
        setElapsedTime(timeInSeconds);

        const wordsCount = wordsData.length;
        const timeInMinutes = timeInSeconds / 60;
        setWpm(wordsCount / timeInMinutes);
    }, [done]);

    useEffect(() => {
        let count = 0;
        wordsData.map((wordFromState, i) => {
            const wordFromInput = inputWordsArray[i] || '';

            wordFromState.split('').map((char, j) => {
                const backgroundColor =
                    wordFromInput[j] === char ? 'lightgreen' :
                        wordFromInput[j] ? 'lightcoral' : 'transparent';

                if (backgroundColor === 'lightcoral') {
                    count++;
                }
            });
        });
        setErrorCount(count);
    }, [done]);

    useEffect(() => {
        return () => {
            defWordsAction()
        };
    }, []);

    return (
        <div className="container">
            <h1 className="text-center my-4">Тест на скорость печати</h1>
            {done && (
                <div className="alert alert-success">
                    Вы закончили проверку! Время: {elapsedTime.toFixed(2)} секунд. Скорость печати: {wpm.toFixed(2)} слов в минуту. Ошибки: {errorCount}
                </div>
            )}
            <div className="mb-3">
                <HighlightedText inputWordsArray={inputWordsArray} />
            </div>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Начните печатать здесь..."
                className="form-control"
                disabled={done}
            />
        </div>
    );
};

export default Home;

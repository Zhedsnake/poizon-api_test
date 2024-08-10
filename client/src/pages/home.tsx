// src/pages/Home.tsx
import React, { useEffect, useState } from 'react';
import { getRandomWords } from "../utils/getRandomWords";
import HighlightedText from "../components/HighlightedText";
import {getElapsedTime} from "../utils/getElapsedTime.ts";

const Home: React.FC = () => {
    const [generatedWords, setGeneratedWords] = useState<string[]>([]);

    const [inputValue, setInputValue] = useState<string>('');
    const [inputWordsArray, setInputWordsArray] = useState<string[]>([]);

    const [done, setDone] = useState<boolean>(false);

    const [startedTimer, setStartedTimer] = useState<boolean>(false)
    const [startTimer, setStartTimer] = useState<number | null>(null);
    const [endTimer, setEndTimer] = useState<number | null>(null);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);

        if (!startedTimer) {
            setStartTimer(Date.now());
            setStartedTimer(true)
        }
    };

    useEffect(() => {
        const randomWords: string[] = getRandomWords();
        setGeneratedWords(randomWords);
    }, []);

    useEffect(() => {
        setInputWordsArray(inputValue.trim().split(' '));
    }, [inputValue]);

    useEffect(() => {
        if (generatedWords.length !==0 && inputWordsArray.length === generatedWords.length) {
            setDone(true);

            setEndTimer(Date.now());
        }
    }, [inputWordsArray]);


    return (
        <div>
            <h1>Тест на скорость печати</h1>
            {done && (
                <div>
                    Вы закончили проверку Время: {getElapsedTime(startTimer, endTimer)} секунд.
                </div>
            )}
            <div>
                <HighlightedText inputWordsArray={inputWordsArray} generatedWords={generatedWords} />
            </div>
            <br />
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Start typing here..."
                style={{ width: '50%', marginTop: '10px' }}
                disabled={done}
            />
        </div>
    );
};

export default Home;

import React, { useEffect, useState } from 'react';
import { getRandomWords } from "../utils/getRandomWords";
import HighlightedText from "../components/HighlightedText";
import { getElapsedTime } from "../utils/getElapsedTime";

const Home: React.FC = () => {
    const [generatedWords, setGeneratedWords] = useState<string[]>([]);

    const [inputValue, setInputValue] = useState<string>('');
    const [inputWordsArray, setInputWordsArray] = useState<string[]>([]);

    const [done, setDone] = useState<boolean>(false);

    const [wpm, setWpm] = useState<number>(0);

    const [errorCount, setErrorCount] = useState<number>(0);

    const [elapsedTime, setElapsedTime] = useState<number>(0);
    const [startedTimer, setStartedTimer] = useState<boolean>(false);
    const [startTimer, setStartTimer] = useState<number | null>(null);
    const [endTimer, setEndTimer] = useState<number | null>(null);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);

        if (!startedTimer) {
            setStartTimer(Date.now());
            setStartedTimer(true);
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
        if (generatedWords.length !== 0 && inputWordsArray.length === generatedWords.length) {
            setDone(true);

            setEndTimer(Date.now());
        }
    }, [inputWordsArray]);

    useEffect(() => {
        const timeInSeconds = getElapsedTime(startTimer, endTimer);
        setElapsedTime(timeInSeconds);

        const wordsCount = generatedWords.length;
        const timeInMinutes = timeInSeconds / 60;
        setWpm(wordsCount / timeInMinutes);
    }, [done]);

    return (
        <div>
            <h1>Тест на скорость печати</h1>
            {done && (
                <div>
                    Вы закончили проверку! Время: {elapsedTime.toFixed(2)} секунд. Скорость печати: {wpm.toFixed(2)} слов в минуту. Ошибки: {errorCount}
                </div>
            )}
            <div>
                <HighlightedText inputWordsArray={inputWordsArray} generatedWords={generatedWords} setErrorCount={setErrorCount} />
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

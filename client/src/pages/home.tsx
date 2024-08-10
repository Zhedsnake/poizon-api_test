// src/pages/Home.tsx
import React, { useEffect, useState } from 'react';
import { getRandomWords } from "../utils/getRandomWords";
import HighlightedText from "../components/HighlightedText";

const Home: React.FC = () => {
    const [generatedWords, setGeneratedWords] = useState<string[]>([]);
    const [inputValue, setInputValue] = useState<string>('');
    const [inputWordsArray, setInputWordsArray] = useState<string[]>([]);
    const [done, setDone] = useState<boolean>(false);

    // Обработчик изменения текста в input
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    useEffect(() => {
        const randomWords: string[] = getRandomWords();
        setGeneratedWords(randomWords);
    }, []);

    useEffect(() => {
        setInputWordsArray(inputValue.trim().split(' '));
    }, [inputValue]);

    useEffect(() => {
        if (inputWordsArray.length === generatedWords.length) {
            setDone(true);
        } else {
            setDone(false);
        }
    }, [inputWordsArray]);

    return (
        <div>
            <h1>Тест на скорость печати</h1>
            {done && <div>Вы закончили проверку</div>}
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

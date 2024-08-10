import React, {useEffect, useState} from 'react';
import {getRandomWords} from "../utils/getRandomWords";
import HighlightedText from "../components/HighlightedText.tsx";

const Home: React.FC = () => {
    const [generatedWords, setGeneratedWords] = useState<string[]>([]);
    const [inputValue, setInputValue] = useState<string>('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };


    useEffect(() => {
        const randomWords: string[] = getRandomWords();
        setGeneratedWords(randomWords);
    }, []);


    return (
        <div>
            <h1>Typing Speed Test</h1>
            <div>
                <HighlightedText inputValue={inputValue} generatedWords={generatedWords}/>
            </div>
            <br/>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Start typing here..."
                style={{width: '50%', marginTop: '10px'}}
            />
        </div>
    );
};

export default Home;

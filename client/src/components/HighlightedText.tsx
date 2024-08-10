import React from 'react';

interface HighlightedTextProps {
    inputValue: string;
    generatedWords: string[];
}

const HighlightedText: React.FC<HighlightedTextProps> = ({ inputValue, generatedWords }) => {
    const inputWordsArray: string[] = inputValue.trim().split(' ');

    return (
        <>
            {generatedWords.map((wordFromState, i) => {
                const wordFromInput = inputWordsArray[i] || '';

                return (
                    <React.Fragment key={i}>
                        {wordFromState.split('').map((char, j) => (
                            <span
                                key={j}
                                style={{
                                    backgroundColor: wordFromInput[j] && wordFromInput[j] !== char ? 'red' : 'transparent',
                                    color: 'black'
                                }}
                            >
                                {char}
                            </span>
                        ))}
                        {i < generatedWords.length - 1 && ' '}
                    </React.Fragment>
                );
            })}
        </>
    );
};

export default HighlightedText;

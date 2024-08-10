import React from 'react';

interface HighlightedTextProps {
    inputWordsArray: string[];
    generatedWords: string[];
}

const HighlightedText: React.FC<HighlightedTextProps> = ({ inputWordsArray, generatedWords }) => {
    return (
        <>
            {generatedWords.map((wordFromState, i) => {
                const wordFromInput = inputWordsArray[i] || '';

                return (
                    <React.Fragment key={i}>
                        {wordFromState.split('').map((char, j) => {
                            const backgroundColor =
                                wordFromInput[j] === char ? 'lightgreen' :
                                    wordFromInput[j] ? 'lightcoral' : 'transparent';

                            return (
                                <span
                                    key={j}
                                    style={{
                                        backgroundColor,
                                        color: 'black',
                                        padding: '2px',
                                        borderRadius: '3px'
                                    }}
                                >
                                    {char}
                                </span>
                            );
                        })}
                        {i < generatedWords.length - 1 && ' '}
                    </React.Fragment>
                );
            })}
        </>
    );
};

export default HighlightedText;

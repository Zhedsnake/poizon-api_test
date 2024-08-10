import React from 'react';

interface HighlightedTextProps {
    inputWordsArray: string[];
    generatedWords: string[];
    setErrorCount: (count: number) => void;  // Добавляем новый пропс для передачи количества ошибок
}

const HighlightedText: React.FC<HighlightedTextProps> = ({ inputWordsArray, generatedWords, setErrorCount }) => {
    let errorCount = 0;

    const renderedText = generatedWords.map((wordFromState, i) => {
        const wordFromInput = inputWordsArray[i] || '';

        return (
            <React.Fragment key={i}>
                {wordFromState.split('').map((char, j) => {
                    const backgroundColor =
                        wordFromInput[j] === char ? 'lightgreen' :
                            wordFromInput[j] ? 'lightcoral' : 'transparent';

                    if (backgroundColor === 'lightcoral') {
                        errorCount++;
                    }

                    return (
                        <span
                            key={j}
                            style={{
                                backgroundColor,
                                color: 'black'
                            }}
                        >
                            {char}
                        </span>
                    );
                })}
                {i < generatedWords.length - 1 && ' '}
            </React.Fragment>
        );
    });

    setErrorCount(errorCount);

    return <>{renderedText}</>;
};

export default HighlightedText;

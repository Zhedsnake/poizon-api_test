import React from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector.ts";

interface HighlightedTextProps {
    inputWordsArray: string[];
}

const HighlightedText: React.FC<HighlightedTextProps> = ({ inputWordsArray }) => {
    const {data: wordsData} = useTypedSelector(state => state.generateWords)

    return (
        <>
            {wordsData.map((wordFromState, i) => {
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
                        {i < wordsData.length - 1 && ' '}
                    </React.Fragment>
                );
            })}
        </>
    );
};

export default HighlightedText;

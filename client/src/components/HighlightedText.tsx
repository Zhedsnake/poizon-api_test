import React from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector.ts";


const HighlightedText: React.FC = () => {
    const {data: wordsData} = useTypedSelector(state => state.generateWords)
    const {data: inputWordsData} = useTypedSelector(state => state.inputWordsArray)


    return (
        <div className="mb-3">
            {wordsData.map((wordFromState, i) => {
                const wordFromInput = inputWordsData[i] || '';

                return (
                    <React.Fragment key={i}>
                        {wordFromState.split('').map((char, j) => {
                            const backgroundColor =
                                wordFromInput[j] === char ? '#038723' :
                                    wordFromInput[j] ? 'lightcoral' : 'transparent';

                            return (
                                <span
                                    key={j}
                                    style={{
                                        backgroundColor,
                                        color: 'black',
                                        padding: '1px',
                                        borderRadius: '3px'
                                    }}
                                    className={"fw-bold text-white  navbar-brand"}
                                >
                                    {char}
                                </span>
                            );
                        })}
                        {i < wordsData.length - 1 && ' '}
                    </React.Fragment>
                );
            })}
        </div>
    );
};

export default HighlightedText;

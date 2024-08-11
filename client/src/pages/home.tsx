import React, {useContext, useEffect} from 'react';
import HighlightedText from "../components/HighlightedText";
import {useActions} from "../hooks/useActions.ts";
import {useTypedSelector} from "../hooks/useTypedSelector.ts";
import {TestContext} from "../context";
import InputWords from "../components/InputWords.tsx";
import Results from "../components/Results.tsx";

const Home: React.FC = () => {
    const {
        done,
        setDone,
        setWpm,
        setErrorCount,
        startTimer,
        endTimer,
        setEndTimer,
        setInputValue,
        setStartedTimer,
        setStartTimer,
    } = useContext(TestContext);

    const {data: wordsData} = useTypedSelector(state => state.generateWords);
    const {data: inputWordsData} = useTypedSelector(state => state.inputWordsArray);
    const {data: timeSecondData} = useTypedSelector(state => state.elapsedTime);
    const {
        getWordsAction,
        defWordsAction,
        defElapsedTimeTest,
        defInputWordsArrayAction,
        getElapsedTimeTest
    } = useActions();

    // Эффект на конец тестирования
    useEffect(() => {
        if (wordsData.length !== 0 && inputWordsData.length === wordsData.length) {
            const lastWordState = wordsData[wordsData.length - 1];
            const lastWordInput = inputWordsData[inputWordsData.length - 1];

            if (lastWordInput.length === lastWordState.length) {
                setDone(true);
                setEndTimer(Date.now());
            }
        }

        if (wordsData.length !== 0 && inputWordsData.length > wordsData.length) {
            setDone(true);
            setEndTimer(Date.now());
        }
    }, [inputWordsData]);

    // Эффект на подсчёт времени тестирования
    useEffect(() => {
        if (startTimer && endTimer) {
            getElapsedTimeTest(startTimer, endTimer);
        }
    }, [done]);

    // Эффект на подсчёт слов в минуту тестирования
    useEffect(() => {
        const wordsCount = wordsData.length;
        const timeInMinutes = timeSecondData / 60;
        setWpm(wordsCount / timeInMinutes);
    }, [timeSecondData]);

    // Эффект на подсчёт ошибок
    useEffect(() => {
        let count = 0;

        wordsData.forEach((wordFromState, i) => {
            const wordFromInput = inputWordsData[i] || '';

            wordFromState.split('').forEach((char, j) => {
                if (wordFromInput[j] && wordFromInput[j] !== char) {
                    count++;
                }
            });
        });

        setErrorCount(count);
    }, [done]);

    useEffect(() => {
        getWordsAction();

        return () => {
            defWordsAction();
            defInputWordsArrayAction();

            setDone(false);

            setInputValue("");

            setErrorCount(0);

            setStartedTimer(false);
            setStartTimer(null);
            setEndTimer(null);
            defElapsedTimeTest();
        };
    }, []);

    return (
        <div className="container mt-5">
            <div className="m-0 p-0 row justify-content-center">
                <section className="col-md-6  m-0 p-0">
                    <div className="row m-0 p-0 text-white">
                        <h1 className="my-4 p-0 text-center fw-bold text-white  navbar-brand">Тест на скорость
                            печати</h1>
                    </div>
                    {done && (
                        <div className="m-0 p-0 row">
                            <Results/>
                        </div>
                    )}
                    <div className="row">
                        <div className="w-100">
                            <div className="m-0 p-0 mb-2">
                                <HighlightedText/>
                            </div>
                        </div>
                    </div>
                    <InputWords
                        placeholder="Начните печатать здесь..."
                    />
                </section>
            </div>
        </div>
    );
};

export default Home;

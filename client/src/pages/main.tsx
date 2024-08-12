import React, {useContext, useEffect} from 'react';
import HighlightedText from "../components/HighlightedText";
import {useActions} from "../hooks/useActions.ts";
import {useTypedSelector} from "../hooks/useTypedSelector.ts";
import {TestContext} from "../context";
import InputWords from "../components/InputWords.tsx";
import Results from "../components/Results.tsx";
import {getPossibleCharsLengths} from "../utils/getPossibleCharsLengths.ts";


/**
 * Главный компонент главной страницы приложения.
 * Отвечает за отображение теста на скорость печати и управления состоянием теста.
 *
 * @component
 * @returns {React.JSX.Element} - Возвращает JSX разметку для страницы теста на скорость печати.
 */
const Main: React.FC = () => {
    // Деструктуризация значений и функций контекста теста
    const {
        done,
        setDone,
        setWpm,
        inputValue,
        possibleChars,
        setPossibleChars,
        setErrorCount,
        startTimer,
        endTimer,
        setEndTimer,
        setInputValue,
        setStartedTimer,
        setStartTimer,
    } = useContext(TestContext);

    // Данные из состояния Redux
    const {data: wordsData} = useTypedSelector(state => state.generateWords);
    const {data: inputWordsData} = useTypedSelector(state => state.inputWordsArray);
    const {data: timeSecondData} = useTypedSelector(state => state.elapsedTime)

    // Деструктуризация действий
    const {
        getWordsAction,
        defWordsAction,
        defElapsedTimeTestAction,
        defInputWordsArrayAction,
        getElapsedTimeTestAction
    } = useActions();

    /**
     * Эффект для вычисления и установки максимального количества вводимых символов, которые сможет вводить пользователь.
     * Срабатывает при изменении данных слов, предоставленных пользователю для ввода.
     */
    useEffect(() => {
        if (wordsData && wordsData.length > 0) {
            const charsLength: number = getPossibleCharsLengths(wordsData);
            setPossibleChars(charsLength);
        }
    }, [wordsData]);

    /**
     * Эффект для установки состояния завершенности теста и времени окончания теста скорости печати пользователя.
     * Срабатывает при изменении значения `inputValue`, вводимых данных пользователем.
     */
    useEffect(() => {
        if (possibleChars > 0 && inputValue.length === possibleChars) {
            setDone(true);
            setEndTimer(Date.now());
        }
    }, [inputValue]);

    /**
     * Эффект для вычисления и сохранения времени теста скорости печати польхователя.
     * Срабатывает при изменении состояния `done`.
     */
    useEffect(() => {
        if (startTimer && endTimer) {
            getElapsedTimeTestAction(startTimer, endTimer);
        }
    }, [done]);

    /**
     * Эффект для вычисления и установки скорости слов в минуту.
     * Срабатывает при изменении данных времени теста.
     */
    useEffect(() => {
        if (timeSecondData){
            const wordsCount = wordsData.length;
            const timeInMinutes = timeSecondData / 60;
            setWpm(wordsCount / timeInMinutes);
        }
    }, [timeSecondData]);

    /**
     * Эффект для подсчета количества ошибок в тесте, которые допустил пользователь.
     * Срабатывает при изменении состояния `done`.
     */
    useEffect(() => {
        if (startTimer && endTimer) {
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
        }
    }, [done]);

    /**
     * Эффект для инициализации получения слов, предложенных пользователю для ввода, при монтировании компонента и очистки данных при размонтировании.
     */
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
            defElapsedTimeTestAction();
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

export default Main;

import React, {useContext} from 'react';
import {TestContext} from "../context";
import {useActions} from "../hooks/useActions.ts";

/**
 * Компонент кнопки для перезапуска теста на скорость печати.
 *
 * @component
 * @returns {React.JSX.Element} - Возвращает JSX разметку для кнопки перезапуска теста.
 *
 * @description
 * `RestartButton` отображает кнопку "Начать сначала", которая сбрасывает состояние теста и запускает новый тест.
 * При нажатии на кнопку вызывается функция `handleRestart`, которая выполняет следующие действия:
 * - Запрашивает новые слова для теста с помощью действия `getWordsAction`.
 * - Сбрасывает состояние завершенности теста.
 * - Очищает введенный текст.
 * - Сбрасывает количество ошибок.
 * - Сбрасывает состояние таймера и времени окончания теста.
 * - Сбрасывает время прохождения теста пользователем теста с помощью действия `defElapsedTimeTestAction`.
 */
const RestartButton: React.FC = () => {
    const {
        setDone,
        setInputValue,
        setStartedTimer,
        setStartTimer,
        setEndTimer,
        setErrorCount
    } = useContext(TestContext);

    const {getWordsAction, defElapsedTimeTestAction} = useActions()

    const handleRestart = () => {
        getWordsAction();

        setDone(false);

        setInputValue("");

        setErrorCount(0);

        setStartedTimer(false);
        setStartTimer(null);
        setEndTimer(null);
        defElapsedTimeTestAction();
    }

    return (
        <div className="row">
            <button className="btn btn-dark mt-2" onClick={handleRestart}>Начать сначала</button>
        </div>
    );
};

export default RestartButton;
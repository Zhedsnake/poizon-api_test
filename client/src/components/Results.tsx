import React, {useContext} from 'react';
import {TestContext} from "../context";
import {useTypedSelector} from "../hooks/useTypedSelector.ts";
import RestartButton from "./RestartButton.tsx";

/**
 * Компонент для отображения результатов теста на скорость печати.
 *
 * @component
 * @returns {React.JSX.Element} - Возвращает JSX разметку с результатами теста и кнопкой перезапуска.
 *
 * @description
 * `Results` отображает результаты теста на скорость печати, включая время, скорость печати и количество ошибок.
 * Компонент использует данные из контекста и редуктора Redux для отображения информации.
 * После завершения теста отображаются:
 * - Время, затраченное на тест (в секундах).
 * - Скорость печати (в словах в минуту).
 * - Количество ошибок.
 *
 * В конце отображается кнопка `RestartButton`, которая позволяет начать новый тест.
 */
const Results: React.FC = () => {
    const {
        wpm,
        errorCount,
    } = useContext(TestContext);


    const {data: timeSecondData} = useTypedSelector(state => state.elapsedTime)

    return (
        <div className="alert alert-success justify-content-end">
            <div className="row">
                <div className="col text-center fw-bold  navbar-brand">Вы закончили проверку!</div>
            </div>
            <div className="row">
                <div className="col-12 fw-bold  navbar-brand">
                    Время: {timeSecondData.toFixed(2)} секунд
                </div>
                <div className="col-12 fw-bold  navbar-brand">
                    Скорость печати: {wpm.toFixed(2)} слов в минуту
                </div>
                <div className="col-12 fw-bold  navbar-brand">
                    Ошибки: {errorCount}
                </div>
            </div>
            <RestartButton/>
        </div>
    );
};

export default Results;
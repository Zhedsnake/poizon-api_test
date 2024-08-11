import React, {useContext} from 'react';
import {TestContext} from "../context";
import {useTypedSelector} from "../hooks/useTypedSelector.ts";
import RestartButton from "./RestartButton.tsx";

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
import React, {useContext} from 'react';
import {TestContext} from "../context";
import {useTypedSelector} from "../hooks/useTypedSelector.ts";

const Results: React.FC = () => {
    const {
        wpm,
        errorCount,
    } = useContext(TestContext);


    const {data: timeSecondData} = useTypedSelector(state => state.elapsedTime)

    return (
        <div className="alert alert-success">
            Вы закончили проверку!
            Время: {timeSecondData.toFixed(2)} секунд.
            Скорость печати: {wpm.toFixed(2)} слов в минуту.
            Ошибки: {errorCount}
        </div>
    );
};

export default Results;
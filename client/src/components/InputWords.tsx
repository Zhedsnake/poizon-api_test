import React, {useContext, useEffect} from 'react';
import {TestContext} from "../context";
import {useActions} from "../hooks/useActions.ts";

interface InputWordsProps {
    /**
     * Текст, который отображается в качестве плейсхолдера в текстовой области.
     *
     * @type {string}
     */
    placeholder: string
}

/**
 * Компонент для ввода текста пользователем в тесте на скорость печати.
 *
 * @component
 * @param {InputWordsProps} props - Свойства компонента.
 * @returns {React.JSX.Element} - Возвращает JSX разметку для текстовой области ввода текста.
 *
 * @description
 * `InputWords` отображает текстовую область, в которую пользователь может вводить текст.
 * Компонент отслеживает изменения в вводимом тексте и обновляет состояние через контекст `TestContext`.
 *
 * Состояния и функции из контекста:
 * - `done`: Указывает, завершен ли тест. Если да, текстовая область будет отключена.
 * - `inputValue`: Текущий введенный текста пользователем.
 * - `setInputValue`: Функция для обновления введенного текста.
 * - `startedTimer`: Указывает, был ли запущен таймер. Если нет, таймер запускается при первом изменении текста.
 * - `setStartedTimer`: Функция для установки состояния, был ли включён таймер.
 * - `setStartTimer`: Функция для установки времени начала теста.
 * - `possibleChars`: Максимальное количество символов, которое можно ввести пользователю.
 */
const InputWords: React.FC<InputWordsProps> = (props) => {
    const {
        done,
        inputValue,
        setInputValue,
        startedTimer,
        setStartedTimer,
        setStartTimer,
        possibleChars
    } = useContext(TestContext);

    const { inputWordsArrayAction } = useActions()

    /**
     * Если таймер еще не был запущен, он запускается при первом изменении текста.
     * */
    const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setInputValue(e.target.value);

        if (!startedTimer) {
            setStartTimer(Date.now());

            setStartedTimer(true);
        }
    };

    /**
     * Введенный текст передается в действие `inputWordsArrayAction`, которое обновляет состояние массива введенных слов.
     * */
    useEffect(() => {
        inputWordsArrayAction(inputValue);
    }, [inputValue]);

    return (
        <div className="bg-secondary m-0 p-0 row">
            <textarea
                className="form-control bg-light fw-bold"
                rows={5}
                value={inputValue}
                onChange={handleInputChange}
                maxLength={possibleChars}
                {...props}
                disabled={done}
            ></textarea>
        </div>
    );
};

export default InputWords;
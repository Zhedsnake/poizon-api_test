/**
 * Вычисляет время, прошедшее в секундах между двумя временными метками.
 *
 * @param {number} startTimer - Начальная временная метка в миллисекундах.
 * @param {number} endTimer - Конечная временная метка в миллисекундах.
 * @returns {number} - Прошедшее время в секундах.
 */
export const getElapsedTime = (startTimer: number, endTimer: number): number => {
    return (endTimer - startTimer) / 1000;
};

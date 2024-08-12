/**
 * Вычисляет общее количество символов в массиве слов, включая пробелы между словами, для ограничения вводимых строк пользователем.
 *
 * @param {string[]} wordsArray - Массив строк, содержащий слова для подсчета символов.
 * @returns {number} - Общее количество символов, включая пробелы между словами. Количество символов в словах складывается с количеством пробелов между ними.
 */
export const getPossibleCharsLengths = (wordsArray: string[]): number => {
    const elementsCount = wordsArray.length - 1;
    const totalCharsCount = wordsArray.reduce((acc, word) => acc + word.length, 0);

    return elementsCount + totalCharsCount
};
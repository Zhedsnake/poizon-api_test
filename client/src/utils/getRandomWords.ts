import {allArrays} from "./words.ts";

/**
 * Генерирует массив из 20 случайных слов, выбранных из матрицы слов.
 *
 * @returns {string[]} - Массив из 20 случайных слов.
 */
export function getRandomWords(): string[] {
    const randomWords: string[] = [];

    while (randomWords.length < 20) {
        const randomArray = allArrays[Math.floor(Math.random() * allArrays.length)];

        const randomWord = randomArray[Math.floor(Math.random() * randomArray.length)];

        randomWords.push(randomWord);
    }

    return randomWords;
}
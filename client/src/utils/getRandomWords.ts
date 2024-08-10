import {allArrays} from "./words.ts";

export function getRandomWords(): string[] {
    const randomWords: string[] = [];

    while (randomWords.length < 20) {
        const randomArray = allArrays[Math.floor(Math.random() * allArrays.length)];

        const randomWord = randomArray[Math.floor(Math.random() * randomArray.length)];

        randomWords.push(randomWord);
    }

    return randomWords;
}
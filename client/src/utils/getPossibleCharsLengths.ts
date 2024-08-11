
export const getPossibleCharsLengths = (wordsArray: string[]): number => {
    const elementsCount = wordsArray.length - 1;
    const totalCharsCount = wordsArray.reduce((acc, word) => acc + word.length, 0);

    return elementsCount + totalCharsCount
};
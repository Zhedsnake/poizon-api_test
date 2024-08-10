
export const getElapsedTime = (startTimer: number | null, endTimer: number | null): number => {
    if (startTimer && endTimer) {
        return (endTimer - startTimer) / 1000;
    }
    return 0;
};

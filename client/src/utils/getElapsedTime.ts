// src/utils/timeUtils.ts

export const getElapsedTime = (startTimer: number | null, endTimer: number | null): string => {
    if (startTimer && endTimer) {
        return ((endTimer - startTimer) / 1000).toFixed(2); // Возвращает время в секундах
    }
    return 'N/A';
};

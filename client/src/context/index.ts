import {createContext, Dispatch, SetStateAction} from "react";

export interface TestContextType {
    done: boolean;
    setDone: Dispatch<SetStateAction<boolean>>;
    inputValue: string;
    setInputValue: Dispatch<SetStateAction<string>>;
    startedTimer: boolean;
    setStartedTimer: Dispatch<SetStateAction<boolean>>;
    startTimer: number | null;
    setStartTimer: Dispatch<SetStateAction<number | null>>;
    wpm: number;
    setWpm: Dispatch<SetStateAction<number>>;
    errorCount: number;
    setErrorCount: Dispatch<SetStateAction<number>>;
    endTimer: number | null;
    setEndTimer: Dispatch<SetStateAction<number | null>>;
}


export const TestContext = createContext<TestContextType>();

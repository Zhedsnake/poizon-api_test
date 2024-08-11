import {createContext, Dispatch, SetStateAction} from "react";

export interface TestContextType {
    done: boolean;
    setDone: Dispatch<SetStateAction<boolean>>;
}


export const TestContext = createContext<TestContextType>();

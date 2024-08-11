import {combineReducers} from "@reduxjs/toolkit";
import {generateWordsReducer} from "./generateWords/generateWordsReducer.ts";
import {inputWordsArrayReducer} from "./inputWordsArray/inputWordsArrayReducer.ts";
import {elapsedTimeReducer} from "./elapsedTime/elapsedTimeReducer.ts";


export const rootReducer = combineReducers({
    generateWords: generateWordsReducer,
    inputWordsArray: inputWordsArrayReducer,
    elapsedTime: elapsedTimeReducer,
})

export type RootState = ReturnType<typeof rootReducer>

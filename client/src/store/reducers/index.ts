import {combineReducers} from "@reduxjs/toolkit";
import {generateWordsReducer} from "./generateWords/generateWordsReducer.ts";
import {inputWordsArrayReducer} from "./inputWordsArray/inputWordsArrayReducer.ts";


export const rootReducer = combineReducers({
    generateWords: generateWordsReducer,
    inputWordsArray :inputWordsArrayReducer
})

export type RootState = ReturnType<typeof rootReducer>

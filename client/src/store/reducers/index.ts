import {combineReducers} from "@reduxjs/toolkit";
import {generateWordsReducer} from "./generateWords/generateWordsReducer.ts";


export const rootReducer = combineReducers({
    generateWords: generateWordsReducer,
})

export type RootState = ReturnType<typeof rootReducer>

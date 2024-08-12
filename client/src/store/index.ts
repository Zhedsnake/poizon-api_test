import { configureStore } from '@reduxjs/toolkit';
import {thunk} from "redux-thunk";
import {rootReducer} from "./reducers";


/**
 * Конфигурация Redux store.
 * 
 * В этом store используются:
 * - `rootReducer`: Корневой редуктор, объединяющий все редукторы приложения.
 * - `thunk`: Middleware для обработки асинхронных действий.
 * - Включение инструментов разработки (`devTools`) для отладки.
 * 
 * @constant {object} store - Экземпляр Redux store, настроенный с использованием `configureStore` от Redux Toolkit.
 */
const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
    devTools: true,
});

export default store;
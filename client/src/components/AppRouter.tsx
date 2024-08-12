import React from 'react';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";

import {publicRoutes} from "../router";


/**
 * Компонент для настройки маршрутизации приложения с использованием `react-router-dom`.
 *
 * @component
 * @returns {React.JSX.Element} - Возвращает JSX разметку для маршрутизации приложения.
 *
 * @description
 * `AppRouter` отвечает за настройку маршрутов и навигации в приложении. Он использует компонент `BrowserRouter` для управления историей навигации и компонент `Routes` для определения маршрутов.
 *
 * В компоненте используются маршруты, определенные в `publicRoutes`, и все неопределенные маршруты перенаправляются на главный путь (`/`).
 */
const AppRouter: React.FC = () => {

    return (
        <BrowserRouter>
            <Routes>
                {publicRoutes.map(route =>
                    <Route
                        element={route.component}
                        path={route.path}
                        key={route.path}
                    />
                )}
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;
import React from "react";
import Home from "../pages/home.tsx";



/**
 * Интерфейс, описывающий маршрут приложения.
 *
 * @interface RoutesTypes
 * @property {string} path - Путь маршрута, который будет использоваться в приложении.
 * @property {React.ReactNode} component - Компонент, который будет рендериться при переходе на данный маршрут.
 */
export interface RoutesTypes {
    path: string,
    component: React.ReactNode
}


/**
 * Массив маршрутов для публичной части приложения.
 *
 * @constant {RoutesTypes[]} publicRoutes
 * @description
 * Этот массив содержит список маршрутов, доступных для всех пользователей приложения.
 * Каждый маршрут представляет собой объект с путем и компонентом, который будет отображаться при переходе на этот путь.
 *
 * Пример:
 * - Путь `'/'` будет отображать компонент `<Home />`.
 */
const publicRoutes: RoutesTypes[] = [
    {path: '/', component: <Home />},
]

export {publicRoutes};


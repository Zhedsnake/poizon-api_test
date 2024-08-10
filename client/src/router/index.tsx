import React from "react";
import Home from "../pages/home.tsx";



export interface RoutesTypes {
    path: string,
    component: React.ReactNode
}


const publicRoutes: RoutesTypes[] = [
    {path: '/', component: <Home />},
]

export {publicRoutes};


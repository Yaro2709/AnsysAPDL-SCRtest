import {RouteProps} from "react-router-dom";
import {MainPage} from "pages/MainPage";
import {AboutPage} from "pages/AboutPage";


export enum AppRoutes { //перечисление маршрутов
    MAIN = 'main',
    ABOUT = 'about',
}

export const RoutePath: Record<AppRoutes, string> = { //создадим объект, где укажим каждому маршруту его путь
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
}

export const routeConfig: Record<AppRoutes, RouteProps> = { //объявим роутеры и их значения
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />
    },
    [AppRoutes.ABOUT]: {
        path: RoutePath.about,
        element: <AboutPage />
    },
}
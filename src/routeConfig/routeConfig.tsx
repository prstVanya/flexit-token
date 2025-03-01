import { RouteProps } from 'react-router-dom';
import MainPage from "../components/MainPage/MainPage";

export enum AppPageRoutes {
  MAIN = 'main',
}

export const AppPageRoutesPath: Record<AppPageRoutes, string> = {
  [AppPageRoutes.MAIN]: '/',
}

export const appPageRouterConfig: Record<AppPageRoutes, RouteProps> = {
  [AppPageRoutes.MAIN]: {
    path: AppPageRoutesPath.main,
    element: <MainPage />,
  },
}


import { Suspense } from "react"
import { Routes, Route } from "react-router-dom"
import { appPageRouterConfig } from "../../../routeConfig/routeConfig"
import MainPage from "../../MainPage/MainPage"

export const AppRouter = () => {
  return (
    <Suspense fallback={'Загрузка...'}>
      <Routes>
        <Route element={<MainPage />}>
          {Object.values(appPageRouterConfig).map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Route>
      </Routes>
    </Suspense>
  )
}
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import { routes } from "./config/routes";
import Loading from "./pages/Loading/Loading";

export default function App() {
  return (
    <Suspense fallback={<Loading />}>
      <div className="h-full relative overflow-hidden">
        <div className="w-full h-full bg-primary absolute top-0 left-0" />
        <img
          src="/images/bg.png"
          alt="bg-platform"
          className="w-full h-full absolute top-0 left-0 object-cover mix-blend-multiply"
        />
        <Routes>
          {routes.map(({ path, element, children }) => (
            <Route key={path} path={path} element={element}>
              {children?.map(({ path: childPath, element: childElement }) => (
                <Route
                  key={childPath}
                  path={childPath}
                  element={childElement}
                />
              ))}
            </Route>
          ))}
        </Routes>
      </div>
    </Suspense>
  );
}

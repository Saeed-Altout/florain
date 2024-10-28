import { Suspense } from "react";
import { useRoutes } from "react-router-dom";

import { routes } from "./config/routes";
import Loading from "./pages/Loading/Loading";

export default function App() {
  const element = useRoutes(routes);

  return (
    <Suspense fallback={<Loading />}>
      <div className="h-full relative overflow-hidden">
        <div className="w-full h-full bg-primary absolute top-0 left-0" />
        <img
          src="/images/bg.png"
          alt="bg-platform"
          className="w-full h-full absolute top-0 left-0 object-cover mix-blend-multiply"
        />
        {element}
      </div>
    </Suspense>
  );
}

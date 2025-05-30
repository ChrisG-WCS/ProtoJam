import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import App from "./App.tsx";
import Accueil from "./page/Accueil.tsx";
import Quiz from "./page/Quiz.tsx";
import GameOver from "./page/GameOver.tsx";
import Congratulation from "./page/Congratulation.tsx";
import AlmostPerfect from "./page/AlmostPerfect.tsx";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Accueil />,
      },
      {
        path: "/quiz/:id",
        element: <Quiz />,
      },
      {
        path: "/gameover",
        element: <GameOver />,
      },

      {
        path: "/congratulation",
        element: <Congratulation />,
      },
      {
        path: "/almostperfect",
        element: <AlmostPerfect />,
      },
      {
        path: "/quiz",
        element: <Navigate to="/quiz/1" replace />,
      },
    ],
  },
]);
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

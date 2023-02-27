import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// 1 - configurando router
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

import Home from "./routes/Home";
import Contact from "./routes/Contact";
import Enterprise from "./routes/Enterprise";
import ErrorPage from "./routes/ErrorPage";
import ContactDetails from "./routes/ContactDetails";
import MediaControlCard from "./routes/Card";
import Login from "./routes/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // 3 - Página de Erro
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/enterprise",
        element: <Enterprise />,
      },
      {
        path: "/card",
        element: <MediaControlCard />,
      },
      // 5 - Nested Routes - identificador unico dynamic route
      {
        path: "/contact/:id",
        element: <ContactDetails />,
      },
      // 7 - Navigate para uma rota não existente
      {
        path: "oldcontact",
        element: <Navigate to="/contact" />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

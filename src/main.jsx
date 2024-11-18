import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter } from "react-router-dom";
import Root from "./pages/Root.jsx";
import List from "./pages/List.jsx";
import About from "./pages/About.jsx";

/* const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    path: "/list",
    element: <List />,
    path: "/about",
    element: <About />,
  },
]); */

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
// import App from './App.jsx'
import "./index.css";
import { HelmetProvider } from "react-helmet-async";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Route";

// import { HelmetProvider } from "react-helmet-async/lib";

ReactDOM.createRoot(document.getElementById("root")).render(
  <HelmetProvider>
    <React.StrictMode>
      <div className="max-w-screen-xl mx-auto">
        <RouterProvider router={router} />
      </div>
    </React.StrictMode>
  </HelmetProvider>
);

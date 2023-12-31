import React from "react";
import ReactDOM from "react-dom/client";
// import App from './App.jsx'
import "./index.css";
import { HelmetProvider } from "react-helmet-async";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Route";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AuthProvider from "./Providers/AuthProviders";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <HelmetProvider>
      <React.StrictMode>
        <QueryClientProvider client={queryClient}>
          <div className="max-w-screen-xl mx-auto">
            <RouterProvider router={router} />
          </div>
        </QueryClientProvider>
      </React.StrictMode>
    </HelmetProvider>
  </AuthProvider>
);

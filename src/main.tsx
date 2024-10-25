import "./index.css";
import "react-toastify/dist/ReactToastify.min.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Slide, ToastContainer } from "react-toastify";

import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </QueryClientProvider>
    <ToastContainer
      position="top-center"
      autoClose={8000}
      hideProgressBar
      newestOnTop
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      transition={Slide}
    />
  </StrictMode>
);

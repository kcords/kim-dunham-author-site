import "./index.css";
import "react-toastify/dist/ReactToastify.min.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Slide, ToastContainer } from "react-toastify";

import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop.tsx";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import mixpanel from "mixpanel-browser";

const queryClient = new QueryClient();

const { VITE_MIXPANEL_TOKEN } = import.meta.env;

mixpanel.init(VITE_MIXPANEL_TOKEN, {
  debug: true,
  track_pageview: true,
  persistence: "localStorage",
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ScrollToTop />
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

import { StrictMode } from "react";
import { ThemeProvider } from "./components/theme-provider";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "@/App";
import { BrowserRouter, Routes, Route } from "react-router";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
      <BrowserRouter>
        <Routes>
          <Route index={true} element={<App />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
);

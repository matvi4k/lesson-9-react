import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { theme } from "./theme.js"
import "./index.css";
import App from "./App.jsx";
import { ThemeProvider } from "styled-components";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StrictMode>,
);

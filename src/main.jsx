import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "@/routes/AppRoutes";
import "@/index.css";
import store from "@/store";
import { Provider } from "react-redux";
import { ThemeProvider } from "@/context/themeContext";

const appVersion = import.meta.env.VITE_APP_VERSION || "1.0.0";
console.log(`App Version: ${appVersion}`);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ThemeProvider>
          <AppRoutes />
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

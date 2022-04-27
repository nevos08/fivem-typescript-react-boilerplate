import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "@emotion/react";

import "./styles/index.css";
import theme from "./styles/theme";

import App from "./App"

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById("app")
)
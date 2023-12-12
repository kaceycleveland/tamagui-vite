import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { TamaguiProvider } from "tamagui";
import tamaguiConfig from "../tamagui.config.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <TamaguiProvider config={tamaguiConfig}>
      <App />
    </TamaguiProvider>
  </React.StrictMode>
);

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import App from "./App";
import { InViewProvider } from "./Context/ContextProvider";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <InViewProvider>
      <App />
    </InViewProvider>
  </StrictMode>
);

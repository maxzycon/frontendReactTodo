import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import reportWebVitals from "./reportWebVitals";

// * extend chackraui layouts
import { colors } from "./utils/chakraui";
import { BrowserRouter } from "react-router-dom";
const theme = extendTheme({ colors });

const container = document.getElementById("root") as HTMLElement;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);

reportWebVitals();

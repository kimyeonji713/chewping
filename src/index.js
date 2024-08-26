import React from "react";
import ReactDOM from "react-dom/client";
import _theme from "./theme";
import Router from "./Router";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { HelmetProvider } from "react-helmet-async";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={_theme}>
      <HelmetProvider>
        <ColorModeScript initialColorMode={_theme.config.initialColorMode} />
        <Router />
      </HelmetProvider>
    </ChakraProvider>
  </React.StrictMode>
);

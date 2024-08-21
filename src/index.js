import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { Router } from "react-router-dom";
import _theme from "./theme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={_theme}>
      <Router />
    </ChakraProvider>
  </React.StrictMode>
);

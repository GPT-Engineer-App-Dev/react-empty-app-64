import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { SupabaseProvider } from "./integrations/supabase/index.js";

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
    600: "#3b82f6",  // New color added
  },
};

const theme = extendTheme({ colors });

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <SupabaseProvider>
        <App />
      </SupabaseProvider>
    </ChakraProvider>
  </React.StrictMode>
);

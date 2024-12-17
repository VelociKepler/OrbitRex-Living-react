import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ShopContextProvider from "./contexts/ShopContext.tsx";
import { ProductProvider } from "./contexts/ProductContext.tsx";

const theme = createTheme({
  palette: {
    primary: {
      light: "#ffedd5",
      main: "#f97316",
      dark: "#ea580c",
      contrastText: "#fff"
    },
    secondary: {
      main: "#4caf50" // Example addition for flexibility
    }
  },
  typography: {
    fontFamily: "'Roboto', 'Arial', sans-serif" // Example
  }
});

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Failed to find the root element.");
}

createRoot(rootElement).render(
  <StrictMode>
    <ThemeProvider theme = {theme}>
      <ShopContextProvider>
        <ProductProvider>
          <App />
        </ProductProvider>
      </ShopContextProvider>
    </ThemeProvider>
  </StrictMode>
);
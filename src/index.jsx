import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import CssBaseline from "@material-ui/core/CssBaseline";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { deepPurple, amber } from "@material-ui/core/colors";
import AppStateContextProvider from "./contexts/AppStateContext";
import CartContextProvider from "./contexts/CartContext";

const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: deepPurple[400]
    },
    secondary: {
      main: amber[800]
    }
  }
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <CartContextProvider>
      <AppStateContextProvider>
        <App />
      </AppStateContextProvider>
    </CartContextProvider>
  </ThemeProvider>,
  document.getElementById("root")
);

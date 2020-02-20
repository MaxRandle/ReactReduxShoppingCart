import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import CssBaseline from "@material-ui/core/CssBaseline";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { deepPurple, amber } from "@material-ui/core/colors";
import { Provider } from "react-redux";
import { store } from "./redux/redux.js";

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
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider>,
  document.getElementById("root")
);

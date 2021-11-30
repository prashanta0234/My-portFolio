import "./App.css";
import Home from "./Home/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material";

function App() {
  const theme = createTheme({
    // typography: {
    //   fontFamily: ["Lobster Two", "Lobster", "cursive", "Recursive"].join(","),
    // },
    textfield: {
      color: "white",
      borderColor: "white",
    },
    button: {
      cursor: "pointer",
    },
  });
  return (
    <div>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;

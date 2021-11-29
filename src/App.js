import "./App.css";
import Home from "./Home/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
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
    </div>
  );
}

export default App;

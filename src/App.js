import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Homepage from "./Pages/HomePage/homepage.component";

const HatsPage = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/Hats" component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;

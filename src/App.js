import React from "react";
import "./App.css";
import Homepage from "./components/Homepage/Homepage";
import { Switch, Route } from "react-router-dom";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/about" component={About} />
      </Switch>
    </div>
  );
}

export default App;

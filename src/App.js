import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Builder from "./components/Builder"
import LogIn from "./components/LogIn"
import  SignIn from "./components/SignIn"


function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Builder} />
        <Route exact path="/LogIn" component={LogIn} />
        <Route exact path="/SignIn" component={SignIn} />
      </Switch>
   
    </>
  );
}

export default App;

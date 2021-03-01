import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import LogIn from "./components/Login/LogIn";
import SignIn1 from "./components/Login/SignIn1"
import { AuthProvider } from "./Context/AuthContex";
import LandingPage from "./components/LandingPage/LandingPage";

function App() {
  return (
    <AuthProvider>
      <Switch>
         <Route exact path="/" component={LandingPage} />
        <Route exact path="/LogIn" component={LogIn} />
        <Route exact path="/SignIn1" component={SignIn1} />
        <Builder />
      </Switch>
    </AuthProvider>
  );
}




export default App;

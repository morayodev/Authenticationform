import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Builder from "./components/LandingPage/Builder"
// import Login1 from "./components/Login/Login1"
import SignIn from "./components/Login/SignIn"
import LogIn from "./components/Login/LogIn";
import SignIn1 from "./components/Login/SignIn1"
import { AuthProvider } from "./Context/AuthContex";



function App() {
  return (
    <AuthProvider>
      <Switch>
        <Route exact path="/" component={Builder} />
        {/* <Route exact path="/Login1" component={Login1} /> */}
        <Route exact path="/LogIn" component={LogIn} />

        {/* <Route exact path="/SignIn" component={SignIn} /> */}
        <Route exact path="/SignIn1" component={SignIn1} />
      </Switch>
      {/* <Login1/> */}
    </AuthProvider>
  );
}  

export default App;

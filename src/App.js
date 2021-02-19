import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Builder from "./components/LandingPage/Builder"
// import Login1 from "./components/Login/Login1"
import SignIn from "./components/Login/SignIn"
import LogIn from "./components/Login/LogIn";
import SignIn1 from "./components/Login/SignIn1"
import { AuthProvider } from "./Context/AuthContex";
// import Sidebar from "./components/Sidebar/Sidebar"
import Dashbord from "./components/Dashboard/Dashbord"
import PrivateRoute from "./components/PrivateRoute/PrivateRoute"

function App() {
  return (
    <AuthProvider>
      <Switch>
        <PrivateRoute exact path="/" component={Builder} />
        {/* <Route exact path="/Login1" component={Login1} /> */}
        <Route  path="/LogIn" component={LogIn} />
        {/* <LogIn/> */}
        {/* <Route exact path="/SignIn" component={SignIn} /> */}
        <Route   path="/SignIn1" component={SignIn1} />
        <Route exact path="/Dashbord" component={Dashbord} />
      </Switch>

      {/* <Login1/> */}
      {/* <Sidebar /> */}
      {/* <Dashbord /> */}
    </AuthProvider>
  );
}  

export default App;

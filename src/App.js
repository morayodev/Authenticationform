import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Builder from "./components/LandingPage/Builder"
import LogIn from "./components/Login/LogIn";
import SignIn1 from "./components/Login/SignIn1"
import { AuthProvider } from "./Context/AuthContex";
// import Sidebar from "./components/Sidebar/Sidebar"
import Dashboard from "./components/Dashboard/Dashboard"
import Addfunds from "./components/Add funds/Addfunds"
import Airtime from "./components/Airtime/Airtime"
import Contact from "./components/Contact/Contact"
import PrivateRoute from "./components/PrivateRoute/PrivateRoute"


function App() {
 
    return (
      <>
        <AuthProvider>
          <Switch>
            <PrivateRoute exact path="/" component={Builder}/>
            {/* <Route exact path="/" component={Builder} /> */}

            <Route path="/LogIn" component={LogIn} />
            <Route path="/SignIn1" component={SignIn1} />
            <Route exact path="/Dashboard" component={Dashboard}/>
            <Route exact path="/Addfunds" component={Addfunds} />
            <Route exact path="/Airtime" component={Airtime} />
            <Route exact path="/Contact" component={Contact} />
          </Switch>
       
        </AuthProvider>
      </>
    );
}  

export default App;

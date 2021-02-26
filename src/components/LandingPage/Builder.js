import React,{useState} from 'react'
import Sidedrawer from "../Sidedrawer/Sidedrawer"
import LandingPage from "./LandingPage"
import Toolbar from "../Toolbar/Toolbar"
import Dashboard from "../Dashboard/Dashboard";
import { Route, Switch } from "react-router-dom";

const Builder = (props) => {
     const [showSidedrawer, setSidedrawer] = useState(false);

     const setSidedrawerhandler = () => {
       setSidedrawer(false);
     };
     const setRemover = () => {
       setSidedrawer(true);
     };
    return (
      <div>
        <Toolbar
          navState={showSidedrawer}
          click={setRemover}
          closed={setSidedrawerhandler}
          open={showSidedrawer}
          navState={showSidedrawer}
          click={setRemover}
          closed={setSidedrawerhandler}
        />
        <LandingPage />
        <Sidedrawer
          open={showSidedrawer}
          navState={showSidedrawer}
          click={setRemover}
          closed={setSidedrawerhandler} 
        />
        {/* <Dashboard/> */}
          {/* <Route path="/Dashboard" component={Dashboard} /> */}
      </div>
    );
}

export default Builder;




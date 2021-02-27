import React from 'react'
import logo from "../images/logo 2.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { TiTimes } from "react-icons/ti";

function Toolbar(props) {
    return (
      <div>
        <div className="flex justify-between items-center mx-5 md:mx-20 md:hidden z-10">
          <img className="md:hidden flex" src={logo} alt="sudha logo" />
          <div
            className="text-3xl flex md:hidden"
            style={{ color: "rgba(169, 82, 242, 1)" }}
          >
            {props.navState ? (
              <TiTimes onClick={props.closed} className="text-2xl" />
            ) : (
              <GiHamburgerMenu onClick={props.click} />
            )}
          </div>
        </div>
      </div>
    );
}

export default Toolbar
         
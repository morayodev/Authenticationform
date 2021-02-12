import React from 'react'
import logo from "./images/logo 2.png"
import "./LandingPage.css"
import Man from "./images/Saly-14.png"
import Vector from "./images/Vector.png"
import { Link } from "react-router-dom";

function LandingPage() {

    return (
      <div className="mx-20">
        <div className="flex justify-between">
          <img src={logo} alt="logo" />

          <div className="flex items-center ">
            <Link to="/LogIn">
              <button className="mx-5 border rounded-lg LogIn px-10 py-5 text-white">
                Login
              </button>
            </Link>
            <Link to="/SignIn">
            <button className="mx-5 border rounded-lg SignIn px-10 py-5">
                Sign up
            </button>
              </Link>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="mt-32 w-4/12">
            <h1 className="font-semibold  text-3xl ml-5">
              Send <span className="text-orange-600">Airtime</span> and 
              <span className="text-orange-600"> Data</span> to your team.
            </h1>
            <p className="font-semibold  text-3xl ml-5 mb-10">Anytime.Anyday</p>
            <Link to="/LogIn">
            <button className="mx-5 border rounded-lg LogIn px-10 py-5 text-white">
                Get Started
            </button>
              </Link>
          </div>
          <div>
            <img className="Vector" src={Vector} alt="Vector" />
            <img className="Man" src={Man} alt="Man" />
          </div>
        </div>
      </div>
    );
}

export default LandingPage

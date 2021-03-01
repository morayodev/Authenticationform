import React from 'react'
import logo  from "../images/logo 2.png"
import "../Login/LandingPage.css"
import Man from "../images/Saly-14.png"
import Vector from "../images/Vector.png"
import { Link } from "react-router-dom";



function LandingPage() {

  return (
    <>

      <div className="mx-0 md:mx-20">
        <div className="flex justify-between ">
          <img className="md:flex hidden" src={logo} alt="logo" />

          <div className="hidden md:flex md:items-center ">
            <Link to="/LogIn">
              <button className="mx-5 border rounded-lg LogIn p-5 md:px-10 md:py-5 text-white">
                Login
              </button>
            </Link>
            <Link to="/SignIn1">
              <button className="mx-5 border rounded-lg SignIn  p-5 md:px-10 md:py-5">
                Sign up
              </button>
            </Link>
          </div>
        </div>
        <div className="flex justify-between text-center md:text-left">
          <div className="w-full mt-32 md:w-4/12">
            <h1 className="font-semibold text-2xl md:text-3xl ml-5">
              Send <span className="text-orange-600">Airtime</span> and
              <span className="text-orange-600"> Data</span> to your team.
            </h1>
            <p className="font-semibold text-2xl md:text-3xl ml-5 mb-10">
              Anytime.Anyday
            </p>
            <Link to="/Builder">
              <button className="mx-5 border rounded-lg LogIn px-10 py-5 text-white">
                Get Started
              </button>
            </Link>
          </div>
          <div className="hidden md:block">
            <img className="Vector" src={Vector} alt="Vector" />
            <img className="Man" src={Man} alt="Man" />
          </div>
        </div>
      </div>

    </>
  );
}

export default LandingPage

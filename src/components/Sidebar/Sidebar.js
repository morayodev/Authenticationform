import React,{useState} from 'react'
import logo from "../images/logo 2.png";
import User from "../images/user.jpg";
import "./Sidebar.css"
import {useHistory} from "react-router-dom"
import {useAuth} from "../../Context/AuthContex"

function Sidebar() {
  const { logout } = useAuth()
  const [error, setError] = useState("")
  const history = useHistory()
  

  async function handleLogout() {
    setError("")
      try {
      await logout()
      history.push("/LogIn")
    } catch {
      setError("Failed to log Out")
    }
  
  }
  return (
    <>
      <div style={{ color: "rgba(64, 64, 64, 0.68)" }}>
        {error && <p className="text-red-700">{error}</p>}
        <img className="mx-20" src={logo} alt="sudha logo" />

        <div className="flex flex-col justify-center items-center">
          <img className="rounded-full h-24 w-24" src={User} alt="my hero" />
          <h3>Hello, Alsaheem</h3>
          <p>adehaalewa64@gmail.com</p>
        </div>
        <ul>
          <li className="list-items">
            <i className="far fa-home-lg-alt icons"></i>
            <a href="./index.html">Dashboard</a>
          </li>
          <li className="list-items">
            <i className="fal fa-wallet icons"></i>
            <a href="./addfunds.html">Add funds</a>
          </li>
          <li className="list-items">
            <i className="fal fa-user icons"></i>
            <a href="#">Contacts</a>
          </li>
          <li className="list-items">
            <i className="fal fa-phone-alt icons"></i>
            <a href="./airtime.html">Airtime</a>
          </li>
          <li className="list-items">
            <i className="fal fa-database icons"></i>
            <a href="./senddata.html">Data</a>
          </li>
          <li className="list-items">
            <i className="fas fa-history icons"></i>
            <a href="#">History</a>
          </li>
          <li className="list-items">
            <i className="far fa-bell icons"></i>
            <a href="#">Notification</a>
          </li>
          <li className="list-items">
            <i className="fal fa-cog icons"></i>
            <a href="#">Settings</a>
          </li>
          <hr classname="line" />
          <li className="text-red-700 logOut">
            <i className="fal fa-sign-out"></i>
            <a href="#" onClick={handleLogout}>
              Logout
            </a>
          </li>
        </ul>
      </div>
    </>
  );
     
}

export default Sidebar

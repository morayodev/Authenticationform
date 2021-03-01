import React,{ useState } from 'react'
import "./Sidedrawer.css"
import User from "../images/user.jpg";
import "../Sidebar/Sidebar.css";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../Context/AuthContex";
import { Link } from "react-router-dom";




function Sidedrawer(props) {
      // const { children } = props;

  const { logout } = useAuth();
  const [error, setError] = useState("");
  const history = useHistory();

  async function handleLogout() {
    setError("");
    try {
      await logout();
      history.push("/LogIn");
    } catch {
      setError("Failed to log Out");
    }
  }
  return (
    <>
      <div className={(props.open ? "Open" : "Close") + " SideDrawer"}>
        <div
          className="md:mx-0 mx-10"
          style={{ color: "rgba(64, 64, 64, 0.68)" }}
        >
          {error && <p className="text-red-700">{error}</p>}

          <div className="flex flex-col ">
            <img className="rounded-full h-24 w-24" src={User} alt="my hero" />
            <h3>Hello, Alsaheem</h3>
            <p>adehaalewa64@gmail.com</p>
          </div>
          <ul>
            <Link to="/Dashboard">
              <li className="list-items">
                <i className="far fa-home-lg-alt icons"></i>
                Dashboard
              </li>
            </Link>
            <Link to="/Addfunds">
              <li className="list-items">
                <i className="fal fa-wallet icons"></i>
                Add funds
              </li>
            </Link>
            <Link to="/Contact">
              <li className="list-items">
                <i className="fal fa-user icons"></i>
                Contacts
              </li>
            </Link>
            <Link to="/Airtime">
              <li className="list-items">
                <i className="fal fa-phone-alt icons"></i>
                Airtime
              </li>
            </Link>
            <li className="list-items">
              <i className="fal fa-database icons"></i>
              <a href="./senddata.html">Data</a>
            </li>
            <li className="list-items">
              <i className="fas fa-history icons"></i>
              <a href=" https://github.com/">History</a>
            </li>
            <li className="list-items">
              <i className="far fa-bell icons"></i>
              <a href=" https://github.com/">Notification</a>
            </li>
            <li className="list-items">
              <i className="fal fa-cog icons"></i>
              <a href=" https://github.com/">Settings</a>
            </li>
            <hr className="line" />
            <li className="text-red-700 logOut" onClick={handleLogout}>
              <i className="fal fa-sign-out"></i>
             >
               Logout
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
  
  

          
   
  
}

export default Sidedrawer

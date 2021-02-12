import React, {useState} from 'react'
import Rectangle from "./images/Rectangle 1.png"
import sally from "./images/Saly-1 (1).png"
import logo from "./images/logo 2.png"
import { AiOutlineEyeInvisible } from "react-icons/ai"
import { Link } from "react-router-dom";
import { AiOutlineEye } from "react-icons/ai"
import useForm from "./useForm";
import validation from "./validation";


const LogIn = () => {
    const { handleChange, values, handleSubmit,errors} = useForm(validation); 

  const [password, setPassword] = useState(true);
  const changePassword = () => {
    if (password === true) {
      setPassword(false)
    } else {
      setPassword(true)
    }
  }
 
    return (
      <div className="flex">
        <div>
          <img className="Rec" src={Rectangle} alt="Rectangle" />
          <img className="Sally" src={sally} alt="sally" />
        </div>
        <div className="w-5/12 m-auto">
          <div className="flex flex-col items-center ">
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
            <h1
              className="text-4xl mb-20"
              style={{ color: "rgba(18, 18, 18, 1)" }}
            >
              Welcome Back
            </h1>
          </div>

          <form onSubmit={handleSubmit}>
            <label
              htmlFor="email"
              className="text-2xl mt-4"
              style={{ color: "rgba(64, 64, 64, 1)" }}
            >
              Email Address
            </label>
            {errors.email && <p className="text-red-700">{errors.email}</p>}
            <input
              id="email"
              className="form mt-2"
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
            />
            <label
              htmlFor="password"
              className="formgroup mt-10 text-2xl"
              style={{ color: "rgba(64, 64, 64, 1)" }}
            >
              Password
            </label>
            {errors.password && (
              <p className="text-red-700">{errors.password}</p>
            )}
            <div className="flex justify-between items-center form mt-2">
              <input
                id="password"
                className="mt-2"
                name="password"
                value={values.password}
                onChange={handleChange}
                type={password ? "password" : "text"}
              />
              {password ? (
                <AiOutlineEyeInvisible onClick={changePassword} />
              ) : (
                <AiOutlineEye onClick={changePassword} />
              )}
            </div>

            <div className="flex justify-between items-center mt-5 mb-10">
              <div className="flex items-center">
                <input className="mr-4" type="checkbox" />
                <p style={{ color: "rgba(64, 64, 64, 0.6)" }}>
                  Keep me logged in
                </p>
              </div>
              <p className="mr-5 text-blue-700">Forgot Password?</p>
            </div>
            <button
              className=" form mt-2 text-white rounded-lg"
              style={{ backgroundColor: "rgba(169, 82, 242, 1)" }}
            >
              Login
            </button>
          </form>
          <p className="text-center mt-5">
            <span style={{ color: "rgba(64, 64, 64, 0.6)" }}>
              Do you have an account?
            </span>
            <Link to="/SignIn">
              <span className="text-blue-700 underline"> Sign Up</span>
            </Link>
          </p>
        </div>
      </div>
    );
}

export default LogIn

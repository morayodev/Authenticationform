import React, {useState,useRef} from 'react'
import Rectangle from "../images/Rectangle 1.png"
import sally from "../images/Saly-1 (1).png"
import logo from "../images/logo 2.png"
import { AiOutlineEyeInvisible } from "react-icons/ai"
import { Link,useHistory } from "react-router-dom";
import { AiOutlineEye } from "react-icons/ai"
import { useAuth } from "../../Context/AuthContex";
import { Formik,Field, Form, ErrorMessage } from "formik";
import formSchema from "./validation";


const LogIn = (props) => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState(true);
  const { login } = useAuth();
  const emailRef = useRef();
  const passwordRef = useRef();
  const history = useHistory()

  const changePassword = () => {
    if (password === true) {
      setPassword(false);
    } else {
      setPassword(true);
    }
  };

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value)
       history.push("/user/")
    } catch {
      setError("Failed to sign in");
    }

    setLoading(false);
  }

  return (
    <div className="flex mx-8 md:mx-0">
      <div className="hidden md:block">
        <img className="Rec" src={Rectangle} alt="Rectangle" />
        <img className="Sally" src={sally} alt="sally" />
      </div>
      <div className="w-full m-0 md:w-5/12 md:m-auto">
        <div className="flex flex-col items-center ">
          <img src={logo} alt="logo" />
          <h1
            className="text-3xl md:text-4xl mb-20"
            style={{ color: "rgba(18, 18, 18, 1)" }}
          >
            Welcome Back
          </h1>
        </div>
        {error && <p className="text-red-700 text-3xl">{error}</p>}

        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={formSchema}
        >
          {({ errors, handleChange, values }) => {
            return (
              <form onSubmit={handleSubmit}>
                <label
                  htmlFor="email"
                  className="text-base md:text-2xl mt-4"
                  style={{ color: "rgba(64, 64, 64, 1)" }}
                >
                  Email Address
                </label>
                <input
                  id="email"
                  className="form mt-2"
                  type="email"
                  name={"email"}
                  ref={emailRef}
                  onChange={handleChange}
                  value={values.email}
                />
                {errors.email && (
                  <p className="text-red-700 text3xl">{errors.email}</p>
                )}
                <label
                  htmlFor="password"
                  className="formgroup mt-10 text-base md:text-2xl"
                  style={{ color: "rgba(64, 64, 64, 1)" }}
                >
                  Password
                </label>
                <div className="flex justify-between items-center form mt-2">
                  <input
                    id="password"
                    className="mt-2 outline-none"
                    name={"password"}
                    type={password ? "password" : "text"}
                    ref={passwordRef}
                    onChange={handleChange}
                    value={values.password}
                  />

                  {password ? (
                    <AiOutlineEyeInvisible onClick={changePassword} />
                  ) : (
                    <AiOutlineEye onClick={changePassword} />
                  )}
                  {/* <ErrorMessage name="password" /> */}
                </div>
                {errors.password && (
                  <p className="text-red-700 text3xl">{errors.password}</p>
                )}
                <div className="flex justify-between items-center mt-5 mb-10">
                  <div className="flex items-center">
                    <input className="mr-2 md:mr-4" type="checkbox" />
                    <p
                      className="text-xs md:text-base"
                      style={{ color: "rgba(64, 64, 64, 0.6)" }}
                    >
                      Keep me logged in
                    </p>
                  </div>
                  <p className="mr-5 text-blue-700 text-xs md:text-base">
                    Forgot Password?
                  </p>
                </div>
                <button
                  type={"submit"}
                  disabled={loading}
                  className=" form mt-2 text-white rounded-lg"
                  style={{ backgroundColor: "rgba(169, 82, 242, 1)" }}
                >
                  Login
                </button>
              </form>
            );
          }}
        </Formik>
        <p className="text-center mt-5">
          <span style={{ color: "rgba(64, 64, 64, 0.6)" }}>
            Do not have an account?
          </span>
          <Link to="/SignIn1">
            <span className="text-blue-700 underline"> Sign Up</span>
          </Link>
        </p>
      </div>
    </div>
  );
};


export default LogIn

import React, { useState, useRef } from "react";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useHistory } from "react-router-dom";
import { AiOutlineEye } from "react-icons/ai";
import sally13 from "../images/Saly-13 (1).png";
import rec from "../images/Rectangle 1.png";
import logo from "../images/logo 2.png";
import { useAuth } from "../../Context/AuthContex"
import formSchema from "./validation";
import {Formik, Field, Form, ErrorMessage } from "formik";

const SignIn1 = () => {
  const [error, setError] = useState
  const [loading, setLoading] = useState(false);
  const emailRef = useRef();
  const numberRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const nameRef = useRef();
  // eslint-disable-next-line
  const { signup, currentUser } = useAuth();
  const history = useHistory();


  async function handleSubmit(e) {
    e.preventDefault();
    //  setValidate(validation(values));
    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      return setError("password do not match");
    }

    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      history.push("/LogIn");
    } catch {
      setError("Failed to create an account");
    }

    setLoading(false);
  }
  const [password, setPassword] = useState(true);
  const changePassword = () => {
    if (password === true) {
      setPassword(false);
    } else {
      setPassword(true);
    }
  };

  return (
    <div className="flex  mx-8 md:mx-0">
      <div className=" w-full md:w-5/12 m-auto">
        <div className="flex flex-col items-center ">
          <img src={logo} alt="logo" />
          <h1
            className=" text-2xl md:text-4xl mb-5"
            style={{ color: "rgba(18, 18, 18, 1)" }}
          >
            Create an Account
          </h1>
        </div>
        {/* {JSON.stringify(currentUser)} */}

        {/* {currentUser && currentUser.email} */}
        {error && <p className="text-red-700 text-3xl">{error}</p>}
        <Formik
          initialValues={{
            name: "",
            email: "",
            number: "",
            password: "",
            confirm: "",
          }}
          validationSchema={formSchema}
        >
          {({ errors, handleChange, values}) => {
            return (
              <form onSubmit={handleSubmit}>
                <label
                  htmlFor="name"
                  className="text-xl "
                  style={{ color: "rgba(64, 64, 64, 1)" }}
                >
                  Name
                </label>
                <input
                  className="form my-3"
                  type="text"
                  id="name"
                  ref={nameRef}
                  onChange={handleChange}
                  value={values.name}
                />
                <p className="text-red-700 text3xl">{errors.name}</p>
        <p className="text-center mt-5">
          <span style={{ color: "rgba(64, 64, 64, 0.6)" }}>
            Already have an account?
          </span>
          <Link to="/LogIn">
            <span className="text-blue-700 underline"> Sign in</span>
          </Link>
        </p>
      </div>
      <div className="hidden md:block">
        <img className="Rec" src={rec} alt="alt" />
        <img className="sally13" src={sally13} alt="sally13" />
      </div>
    </div>
  );
};

export default SignIn1;

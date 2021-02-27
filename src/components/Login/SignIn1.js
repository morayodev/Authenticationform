import React, { useState,useRef } from "react";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { Link,useHistory } from "react-router-dom";
import { AiOutlineEye } from "react-icons/ai";
import sally13 from "../images/Saly-13 (1).png";
import rec from "../images/Rectangle 1.png";
import logo from "../images/logo 2.png";
import { useAuth } from "../../Context/AuthContex"

const SignIn1 = () => {
  const [error, setError] = useState("");
  const [validate, setValidate] = useState({});
  const [loading, setLoading] = useState(false);
  const emailRef = useRef();
  const numberRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const nameRef = useRef();
  const { signup, currentUser } = useAuth();
  const history = useHistory();

      const [values, setValues] = useState({
        name: "",
        email: "",
        number: "",
        password: "",
      });
 
      const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({
          ...values,
          [name]: value,
        });
      };

      // const handleSubmit = (e) => {
      //   e.preventDefault();
      //   setErrors(validation(values));
      // }

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
        <form onSubmit={handleSubmit}>
          <label
            htmlFor="name"
            className="text-xl "
            style={{ color: "rgba(64, 64, 64, 1)" }}
          >
            Name
          </label>
          <input className="form my-3" type="text" id="name" ref={nameRef} />
          <label
            htmlFor="email"
            className="text-xl "
            style={{ color: "rgba(64, 64, 64, 1)" }}
          >
            Email Address
          </label>
          {validate.email && <p className="text-red-700">{validate.email}</p>}

          <input
            className=" form my-3"
            type="email"
            id="email"
            required
            ref={emailRef}
          />
          <label
            htmlFor="number"
            className="text-xl"
            style={{ color: "rgba(64, 64, 64, 1)" }}
          >
            Phone Number
          </label>
          <input
            className=" form my-3"
            type="number"
            id="number"
            ref={numberRef}
          />
          <label
            htmlFor="password"
            className="formgroup  text-xl"
            style={{ color: "rgba(64, 64, 64, 1)" }}
          >
            Password
          </label>
          {validate.password && (
            <p className="text-red-700">{validate.password}</p>
          )}
          <div className="flex justify-between items-center form my-3">
            <input
              className=""
              type={password ? "password" : "text"}
              id="password"
              ref={passwordRef}
              //   value={values.password}
              //  onChange={handleChange}
            />
            {password ? (
              <AiOutlineEyeInvisible onClick={changePassword} />
            ) : (
              <AiOutlineEye onClick={changePassword} />
            )}
          </div>
          <label
            htmlFor="password"
            className="formgroup my-3 text-xl"
            style={{ color: "rgba(64, 64, 64, 1)" }}
          >
            Confirmed Password
          </label>
          <div className="flex justify-between items-center form mt-2">
            <input
              className="mt-2"
              type={password ? "password" : "text"}
              id="confirmpassword"
              ref={confirmPasswordRef}
            />
            {password ? (
              <AiOutlineEyeInvisible onClick={changePassword} />
            ) : (
              <AiOutlineEye onClick={changePassword} />
            )}
          </div>
          <button
            disabled={loading}
            className="form mt-10 text-white rounded-lg"
            style={{ backgroundColor: "rgba(169, 82, 242, 1)" }}
          >
            Signup
          </button>
        </form>
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

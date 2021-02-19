// import React, { useState } from 'react'
// import { AiOutlineEyeInvisible } from "react-icons/ai";
// import { Link } from "react-router-dom";
// import { AiOutlineEye } from "react-icons/ai";
// import sally13 from "../images/Saly-13 (1).png"
// import rec from "../images/Rectangle 1.png"
// import logo from "../images/logo 2.png";
// import useForm from "./useForm";
// import validation from "./validation"
// import { connect } from "react-redux";
// import * as actions from "../../store/index";
// import {useAuth} from "../../Context/AuthContex"

// const SignIn = (props) => {
//     const { Signup } = useAuth();

  
//     const [values, setValues] = useState({
//       name: "",
//       email: "",
//       number: "",
//       password: "",
//     });
//     const [errors, setErrors] = useState({});

//     const handleChange = (e) => {
//       const { name, value } = e.target;
//       setValues({
//         ...values,
//         [name]: value,
//       });
//     };
  
//     const handleSubmit = (e) => {
//       e.preventDefault();
//       setErrors(validation(values));
//     };
  
  
//   const [password, setPassword] = useState(true);
//   const changePassword = () => {
//     if (password === true) {
//       setPassword(false);
//     } else {
//       setPassword(true);
//     }
//   };
//   return (
//     <div className="flex">
//       <div className="w-5/12 m-auto">
//         <div className="flex flex-col items-center ">
//           <Link to="/">
//             <img src={logo} alt="logo" />
//           </Link>
//           <h1
//             className="text-4xl mb-5"
//             style={{ color: "rgba(18, 18, 18, 1)" }}
//           >
//             Create an Account
//           </h1>
//         </div>

//         <form onSubmit={handleSubmit}>
//           <label
//             htmlFor="name"
//             className="text-xl mt-4"
//             style={{ color: "rgba(64, 64, 64, 1)" }}
//           >
//             Name
//           </label>
//           {errors.name && <p className="text-red-700">{errors.name}</p>}
//           <input
//             className="form mt-2"
//             type="text"
//             id="name"
//             name="name"
//             value={values.name}
//             onChange={handleChange}
//           />
          
//           <label
//             htmlFor="email"
//             className="text-xl mt-2"
//             style={{ color: "rgba(64, 64, 64, 1)" }}
//           >
//             Email Address
//           </label>
//           {errors.email && <p className="text-red-700">{errors.email}</p>}

//           <input
//             className=" form mt-2"
//             type="email"
//             id="email"
//             name="email"
//             value={values.email}
//             onChange={handleChange}
//           />
//           <label
//             htmlFor="number"
//             className="text-xl mt-4"
//             style={{ color: "rgba(64, 64, 64, 1)" }}
//           >
//             Phone Number
//           </label>
//           {errors.number && <p className="text-red-700">{errors.number}</p>}

//           <input
//             className=" form mt-2"
//             type="number"
//             id="number"
//             name="number"
//             value={values.number}
//             onChange={handleChange}
//           />
//           <label
//             htmlFor="password"
//             className="formgroup mt-10 text-xl"
//             style={{ color: "rgba(64, 64, 64, 1)" }}
//           >
//             Password
//           </label>
//           {errors.password && <p className="text-red-700">{errors.password}</p>}
//           <div className="flex justify-between items-center form mt-2">
//             <input
//               className="mt-2"
//               type={password ? "password" : "text"}
//               id="password"
//               name="password"
//               value={values.password}
//               onChange={handleChange}
//             />

//             {password ? (
//               <AiOutlineEyeInvisible onClick={changePassword} />
//             ) : (
//               <AiOutlineEye onClick={changePassword} />
//             )}
//           </div>

//           <button
//             className="form mt-10 text-white rounded-lg"
//             style={{ backgroundColor: "rgba(169, 82, 242, 1)" }}
//           >
//             Signup
//           </button>
//         </form>
//         <p className="text-center mt-5">
//           <span style={{ color: "rgba(64, 64, 64, 0.6)" }}>
//             Already have an account?
//           </span>
//           <Link to="/LogIn">
//             <span className="text-blue-700 underline"> Sign in</span>
//           </Link>
//         </p>
//       </div>
//       <div>
//         <img className="Rec" src={rec} alt="alt" />
//         <img className="sally13" src={sally13} alt="sally13" />
//       </div>
//     </div>
//   );
// }
// // const mapDispatchToProps = (dispatch) => {
// //   return {
// //     onLogin: (email, password) => dispatch(actions.auth(email, password)),
// //   };
// // };

// export default SignIn

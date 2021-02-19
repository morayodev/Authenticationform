// import React, { Component } from 'react';
// import Input from "../Login/input"
// import "./Auth.css";
// // import * as actions from '../store/index';
// import * as actions from "../../store/index"

// // import Spinning from "../Components/spinning"; 
// import { Redirect } from "react-router-dom"
// import Rectangle from "../images/Rectangle 1.png"
// import sally from "../images/Saly-1 (1).png"
// import logo from "../images/logo 2.png"
// import { AiOutlineEyeInvisible } from "react-icons/ai"
// import { Link } from "react-router-dom";
// import { AiOutlineEye } from "react-icons/ai"
// // import useForm from "./useForm";
// // import validation from "./validation";
// import { connect } from "react-redux"


// class Login1 extends Component {
//   state = {
//     controls: {
//       email: {
//         elementType: "input",
//         elementConfig: {
//           type: "email",
//           placeholder: "Your Email",
//         },
//         value: "",
//         validation: {
//           required: "true",
//           isEmail: "true",
//         },
//         valid: "false",
//       },
//       password: {
//         elementType: "input",
//         elementConfig: {
//           type: "password",
//           placeholder: "Enter your password",
//         },
//         value: "",
//         validation: {
//           required: "true",
//           isEmail: "true",
//           minLength: "7",
//         },
//         valid: "false",
//       },
//     },
//     isSignup:"true"
//   };
// //   componentDidMount() {
// //     if (!this.props.burgerBuilder && this.props.reDirectPath !== "/") {
// //       this.props.onSetAuthRedirectPath();
// //     }
     
// //   }
//   checkValidity(value, rules) {
//     let isValid = true;
//     if (rules.required) {
//       isValid = value.trim() !== "" && isValid;
//     }
//     if (rules.minLength) {
//       isValid = value.length >= rules.minLength && isValid;
//     }
//     if (rules.maxLength) {
//       isValid = value.length <= rules.maxLength && isValid;
//     }
//     if (rules.isEmail) {
//       const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
//       isValid = pattern.test(value) && isValid;
//     }
//     return isValid;
//   }
//   inputChangeHandler = (event, controlName) => {
//     const updatedControls = {
//       ...this.state.controls,
//       [controlName]: {
//         ...this.state.controls[controlName],
//         value: event.target.value,
//         valid: this.checkValidity(
//           event.target.value,
//           this.state.controls[controlName].validation
//         ),
//       },
//     };
//     this.setState({controls: updatedControls });
//   };
//   submitHandler = (event) => {
//     event.preventDefault();
//     this.props.onLogin(
//       this.state.controls.email.value,
//       this.state.controls.password.value,
//       this.state.isSignup
//     );
//   };
//   switchAuthModeHandler = () => {
//     this.setState({ isSignup:false})
//   }
//   render() {
    
//       const formElementArrary = [];
//     for (let key in this.state.controls) {
//       formElementArrary.push({
//         //key here is the name,street,zipcode etc in orderForm
//         id: key,
//         //next line means the output of name,street etc or the values in the right hand side
//         config: this.state.controls[key],
//       });
//     }

//     let form = formElementArrary.map((formElement) => (
//       <Input
//         key={formElement.id}
//         elementType={formElement.config.elementType}
//         elementConfig={formElement.config.elementConfig}
//         value={formElement.config.value}
//         change={(event) => this.inputChangeHandler(event, formElement.id)}
//       />
//     ));
//     // if (this.props.loading) {
//     //   form=<Spinning/>
//     // }
//     let errorMessage = null;
//     if (this.props.error) {
//       errorMessage = (
//         <p>{this.props.error.message}</p>
//       );
//     }
//     // let authRedirect = null;
//     // if (this.props.isAuthenticated) {
//     //   authRedirect = <Redirect to={this.props.reDirectPath}/>;
//     // }
//       return (
//         <div className="flex">
//           <div>
//             <img className="Rec" src={Rectangle} alt="Rectangle" />
//             <img className="Sally" src={sally} alt="sally" />
//           </div>
//           <div className="w-5/12 m-auto">
//             <div className="flex flex-col items-center ">
//               <Link to="/">
//                 <img src={logo} alt="logo" />
//               </Link>
//               <h1
//                 className="text-4xl mb-20"
//                 style={{ color: "rgba(18, 18, 18, 1)" }}
//               >
//                 Welcome Back
//               </h1>
//             </div>

//             <form onSubmit={this.submitHandler}>
              
//               {form}
           
//               {/* <label
//                 htmlFor="email"
//                 className="text-2xl mt-4"
//                 style={{ color: "rgba(64, 64, 64, 1)" }}
//               >
//                 Email Address
//               </label>
//               {errors.email && <p className="text-red-700">{errors.email}</p>}
//               <input
//                 id="email"
//                 className="form mt-2"
//                 type="email"
//                 name="email"
//                 value={values.email}
//                 onChange={handleChange}
//               />
//               <label
//                 htmlFor="password"
//                 className="formgroup mt-10 text-2xl"
//                 style={{ color: "rgba(64, 64, 64, 1)" }}
//               >
//                 Password
//               </label>
//               {errors.password && (
//                 <p className="text-red-700">{errors.password}</p>
//               )}
//               <div className="flex justify-between items-center form mt-2">
//                 <input
//                   id="password"
//                   className="mt-2"
//                   name="password"
//                   value={values.password}
//                   onChange={handleChange}
//                   type={password ? "password" : "text"}
//                 /> */}
//               {/* {password ? (
//                   <AiOutlineEyeInvisible onClick={changePassword} />
//                 ) : (
//                   <AiOutlineEye onClick={changePassword} />
//                 )} */}
//               {/* </div> */}

//               <div className="flex justify-between items-center mt-5 mb-10">
//                 <div className="flex items-center">
//                   <input className="mr-4" type="checkbox" />
//                   <p style={{ color: "rgba(64, 64, 64, 0.6)" }}>
//                     Keep me logged in
//                   </p>
//                 </div>
//                 <p className="mr-5 text-blue-700">Forgot Password?</p>
//               </div>
//               <button
//                 className=" form mt-2 text-white rounded-lg"
//                 style={{ backgroundColor: "rgba(169, 82, 242, 1)" }}
//               >
//                 Login
//               </button>
//             </form>
//             <p className="text-center mt-5">
//               <span style={{ color: "rgba(64, 64, 64, 0.6)" }}>
//                 Do you have an account?
//               </span>
//               <Link to="/SignIn">
//                 <span className="text-blue-700 underline"> Sign Up</span>
//               </Link>
//             </p>
//           </div>
//         </div>
//       );
 
//     //   <div className="Auth">
//     //     {/* {authRedirect} */}
//     //     {errorMessage}
//     //     <form onSubmit={this.submitHandler}>
//     //       {form}
//     //       <button
//     //         className="Button Success btn"
//     //         // disabled={!this.state.formIsValid}
//     //       >
//     //         SUBMIT
//     //       </button>
//     //     </form>
//     //     <button onClick={this.switchAuthModeHandler} className="Button Danger">
//     //       SWITCH TO {this.state.isSignup ? "SIGNIN" : "SIGNUP"}
//     //     </button>
//     //   </div>
//     // );
//   }
// }
// const mapDispatchToProps = dispatch => {
//   return {
//     onLogin: (email, password) =>
//       dispatch(actions.auth(email, password)),
//   };
// }
// export default connect(null, mapDispatchToProps)(Login1);

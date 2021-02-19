// import React from "react";
// import "./input.css";
// import "./LandingPage.css"

// function Input(props) {
//     const { title} = props;
//   let inputbox = null;

//     switch (props.elementType) {
      
//     case "input":
//             inputbox = (
//         <input
//           className="form mt-2"
//           style={{ color: "rgba(64, 64, 64, 1)" }}
//           {...props.elementConfig}
//           value={props.value}
//           onChange={props.change}
//           onChange={props.change}
//         />
//       );
//       break;
//     case "textarea":
//       inputbox = (
//         <textarea
//           className="form mt-2"
//           {...props.elementConfig}
//           value={props.value}
//           onChange={props.change}
//         />
//       );
//       break;
//     case "select":
//       inputbox = (
//         <select
//           className="form mt-2"
//           {...props.elementConfig}
//           value={props.value}
//           onChange={props.change}
//         >
//           {props.elementConfig.options.map((option) => (
//             <option key={option.value} value={option.value}>
//               {option.displayValue}
//             </option>
//           ))}
//         </select>
//       );
//       break;
//     default:
//       inputbox = (
//         <input
//           className="form mt-2"
//           {...props.elementConfig}
//           value={props.value}
//           onChange={props.change}
//         />
//       );
//   }
//   return (
//     <div>
//       <label className="text-2xl mt-4" style={{ color: "rgba(64, 64, 64, 1)" }}>
//         {props.label}
//       </label>
//     </div>
//   );
// }

// export default Input;

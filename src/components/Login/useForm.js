// import { useState } from "react";
// import * as actions from "../../store/index"


// const useForm = (validation) => {
//   const [values, setValues] = useState({
//     name: "",
//     email: "",
//     number: "",
//     password: "",
//   });
//   const [errors, setErrors] = useState({});

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setValues({
//       ...values,
//       [name]: value,
//     });
//   };
//   const handleSubmit = (e) => {
//     e.preventDefault();
//   

//     setErrors(validation(values));
//   };
//   return { handleChange, values, handleSubmit, errors };
// };

// export default useForm;
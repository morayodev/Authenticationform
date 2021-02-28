const yup = require("yup");

 const formSchema = yup.object().shape({
   name: yup.string().required("Required"),
   email: yup.string().email("Invalid Email").required("Invalid Email"),
   number: yup
     .number()
     .min(11, "Incomplete Number")
     .required("Invalid Number"),
   password: yup
     .string()
     .min(6, "Password Too Short")
     .max(20, "password Too Long")
     .required("Password is required"),
   
 });

export default formSchema;
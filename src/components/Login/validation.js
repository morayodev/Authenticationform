// export default function validation(values) {
//     let validate= {}
//     //for name
//     if (!values.name.trim()) {
//         validate.name = "Name Required"
//     }
//     // else if (/^([^0-9])$/) {
//     //    validate.name="Name should not contain number"
//     // } 
    
//     //for Email
//     if (!values.email) {
//       validate.email = "Email Required";
//     }else if (!/\S+@\S+\.\S+/.test(values.email)) {
//      validate.email = "Email Address is Invalid";
//     }
            
//     if (!values.password) {
//         validate.password = "password is required";
//     } else if (values.password.length< 5) { 
//        validate.password = "password needs to be 6 characters or more";

//     }
//     if (!values.number) {
//         validate.number = "Enter your phone number";   
//     } else if (values.number.length < 11) {
//      validate.number = "Enter your complete phone number";
        
//     }
//     return validate;
// }
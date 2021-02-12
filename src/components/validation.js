export default function validation(values) {
    let errors = {}
    //for name
    if (!values.name.trim()) {
        errors.name="Name Required"
    }
    //for Email
    if (!values.email) {
        errors.email = "Email Required"
    }else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "Email Address is Invalid";
    }
            
    if (!values.password) {
        errors.password = "password is required"
    } else if (values.password.length < 6) {
        errors.password = "password needs to be 6 characters or more";
    
    }
    if (!values.number) {
        errors.number = "Enter your phone number"   
    } else if (values.number.length < 11) {
        errors.number="Enter your complete phone number"
        
    }
    return errors;
}
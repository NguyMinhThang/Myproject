import React, { useRef,useState } from "react";
import "./Register.css";
import {FormInput} from "../FormInput";

const Register = () => {
    const [values,setValues]=useState({
        username:"",
        emai:"",
        birthday:"",
        password:"",
        confirmPassword:"",
    });
    const inputs = [
        {
            id:1,
            name:"username",
            type:"text",
            placeholder:"Username",
            label:"Username"
        },
        {
            id:2,
            name:"email",
            type:"text",
            placeholder:"Email",
            label:"Email"
        },
        {
            id:3,
            name:"birthday",
            type:"text",
            placeholder:"BirthDay",
            label:"BirthDay"
        },
        {
            id:4,
            name:"password",
            type:"password",
            placeholder:"Password",
            label:"Password"
        },
        {
            id:5,
            name:"confirmPassword",
            type:"password",
            placeholder:"Confirm Password",
            label:"Confirm Password"
        }
    ]
    
    const handleSubmit=(e) => {
        e.preventDefault();
        const data = new FormData(e.target)
    };
    const onChange = (e) => {
        setValues({...values,[e.target.name]:e.target.value});
    }
    return(
        <>
        <div className="register">
        <form onSubmit={handleSubmit}>
            <h1>Register</h1>
            {inputs.map((input)=>(
               <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange} />
            ))}
        <button>Submit</button>
        </form>
        </div>
        </>
    )
}
export default Register;

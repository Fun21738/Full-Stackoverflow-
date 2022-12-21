import React from "react";
import Navbar from "./Navbar";
import "./Login.css";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { LoginClient } from "../features/Posts/Register";


function Login() {
  const initialValue = { email: "", passwor: "" };
  const [formValues, setFormValues] = useState(initialValue);
  const [formErrors, setFormErros] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    // console.log(e.target);
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
 
  };
  console.log(formValues);

  const handleSubmit = (e) => {
    console.log(formValues);
    e.preventDefault();
    setFormErros(validate(formValues));
    setIsSubmit(true);

    console.log(formValues);
    dispatch(LoginClient(formValues));
  };
  // useEffect(()=>{
  //   console.log(formErrors);
  // if (Object.keys(formErrors).length===0 && isSubmit){
  //   console.log(formValues);
  // }
  // },[formErrors])

  const validate = (values) => {
    const error = {};
    const regex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    
    if (!values.email) {
      error.email = "email is required !";
    } else if (!regex.test(values.email)) {
      error.email = "incorrect email format !";
    }

    if (!values.passwor) {
      error.passwor = "password is required !";
    } else if (values.passwor.length < 4) {
      error.passwor = "password must be more than 4 characters !";
    } else if (values.passwor.length > 12) {
      error.passwor = "password must not exceed more than 10 characters !";
    }

    return error;
  };
  return (
    <div>
      <Navbar />
      <div className="cont">
        <h3 className="hd">welcome back ! we missed you</h3>
        <div className="inn">
          {Object.keys(formErrors).length === 0 && isSubmit ? (
            <div className="ui_massage_success">Signed in successfully</div>
          ) : (
            <div className="ui_massage_success>not successful"></div>
          )}
          <form onSubmit={handleSubmit}>
            {/* <input
              type="text"
              placeholder="username"
              className="one"
              name="username"
              value={formValues.username}
              onChange={handleChange}
            /> */}
            <p>{formErrors.username}</p>

            <input
              type="text"
              placeholder="input your email"
              className="one"
              name="email"
              value={formValues.email}
              onChange={handleChange}
            />
            <p>{formErrors.email}</p>

            <input
              type="password"
              placeholder="password"
              className="one"
              name="passwor"
              value={formValues.passwor}
              onChange={handleChange}
            />
            <p>{formErrors.passwor}</p>

            <button className="bt">Enter</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;

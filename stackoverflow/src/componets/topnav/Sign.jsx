import React from 'react';
import Navbar from "./Navbar";
import "./Login.css"
import { useDispatch } from "react-redux";
import {useState} from 'react';
// import sign from "../../images/sign.jpg";
import { SigupClient }from "../features/Posts/Register"

// const DEFAULT_FORM={
//   Clients: ""
// }


function Sign() {
  const initialValue = {username:"",email:"",password:"",confirm:""}
  const [formValues,setFormValues] =useState(initialValue)
  const [formErrors,setFormErros] =useState({})
  const [isSubmit, setIsSubmit] =useState(false);
  const dispatch = useDispatch();

const handleChange =(e)=>{
  // console.log(e.target);
  const {name,value} =e.target;
  setFormValues({...formValues ,[name]:value});
  

}

const handleSubmit = (e)=>{
e.preventDefault();
setFormErros(validate(formValues));
setIsSubmit(true);
dispatch( SigupClient(formValues))
}


const validate = (values)=>{
  const error={}
  const regex=/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
  if(!values.username){
    error.username ="username is required !";
  }

  if(!values.email){
    error.email ="email is required !";
  }else if (!regex.test(values.email)){
  error.email ="incorrect email format !";
  }


  if(!values.password){
    error.password ="password is required !";
  }else if (values.password.length <4){
  error.password ="password must be more than 4 characters !";
  }else if (values.password.length >12){
    error.password ="password must not exceed more than 10 characters !";
  }


  if(!values.confirm){
    error.confirm ="confimation password is required !";
  }
  return error;
};



  return (
    <div>
        <Navbar/>
        <div className='cont'>
            <h3 className='hd'>sign up for you better ways of in solving code problems</h3>
            <div className='inn'>
           
           { Object.keys(formErrors).length===0 && isSubmit ?(<div className='ui_massage_success'>Signed in successfully</div>):(
            <div className='ui_massage_success>not successful'></div>
           )}
              <form onSubmit={handleSubmit}> 
              <div className="">
                {/* <img src={sign} alt="" className='im'  /> */}
              
              <input type="text"  placeholder='username' className='one'
              name='username'
                 value={formValues.username}
                 onChange={handleChange}
                 />
                  <p>{formErrors.username}</p>

                <input type="text" placeholder='input your email' className='one'
                 name='email'
                 value={formValues.email}
                 onChange={handleChange}
                 />
                  <p>{formErrors.email}</p>

                <input type="password" placeholder='password' className='one'
                name='password'
                value={formValues.password}
                 onChange={handleChange}
                 />
                 <p>{formErrors.password}</p>

                <input type="password" placeholder='confirm password' className='one'
                 name='confirm'
                 value={formValues.confirm}
                 onChange={handleChange}
                 />
                  <p>{formErrors.confirm}</p>

                <button className='bt'>Enter</button>
                </div>
              </form>

            </div>
          
        </div>
    </div>
  )
}

export default Sign;
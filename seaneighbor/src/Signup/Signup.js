import React, { useState } from "react";
import './Signup.css';
import axios from "axios";
import {useNavigate} from 'react-router-dom'


const Signup=(props)=>{

    let history = useNavigate();
    const [data, setData]=useState({
        name:'',
        email:'',
        phone:'',
        password:''
        
    })  
    const handleChange=(e)=>{
        setData({...data, [e.target.name]: e.target.value});
    }

const submitForm=(e)=>{
    e.preventDefault();

const sendData={
        name:data.name,
        email:data.email,
        phone:data.phone,
        password:data.password
        
    }
console.log(sendData,"data")
axios.post('http://localhost/project-7-db/',sendData)
.then((result)=>{
    if(result.data.Status == 'Invalid'){
         alert('Invalid  User');
    }
   
    else {
        history(`./home`);
    }
})

}




    return(


<div>

<div className="ss">
<form action="" className="form" onSubmit={submitForm}>

    <label htmlFor="name" className="form-label">Name:</label>
<input type="text" name="name" className="form-control"  onChange={handleChange} value={data.name} required />

    <label htmlFor="email" className="form-label">Email:</label>
<input type="eamil" name="email" className="form-control"  onChange={handleChange} value={data.email}  required />

    <label htmlFor="phone">Phone:</label>
<input type="text" name="phone"  className="form-control"  onChange={handleChange} value={data.phone}  required />

    <label htmlFor="password">Password:</label>
<input type="password" name="password"   className="form-control"  onChange={handleChange} value={data.password} required />

    <label htmlFor="Confirm">Confirm password:</label>
<input type="password" name="Confirm"  className="btn btn-outline-secondary"   />

<br/>
<br/>

<input type="submit" name="Submit" className="btn btn-outline-warning" />


</form>


</div>





</div>



    

    )
};
export default Signup;
import React, { Component, useState, useEffect } from "react";
import axios from 'axios';

import Naver from './Naver';



function Login(){

    const [APIData, setAPIData] = useState([]);
    const [pass, setPass] = useState('');
    const [email, setEmail] = useState('');
    const [id, setId] = useState('');

    useEffect(() => {
        setPass(pass);
        setEmail(email);
        axios.get(`http://localhost/project7/seaneighbor/php/readuser.php?email=`+email+'&pass='+pass)
        .then((response) => {
            setAPIData(response.data);
            console.log(response.data,"res.data")
        })
    }, [email,pass])

    const handelLog=(event)=>{
        event.preventDefault();
        if(APIData.length !== 0)
        {
            sessionStorage.setItem("user_id",APIData[0]['id']);
            let ide= sessionStorage.getItem("user_id"); //// raghad here where i store data
            console.log("heh"+ide);
            window.location.href = "/";

        }
        else
        {
            document.getElementById('e1').style.display="block";
            document.getElementById('e2').style.display="block";
        }
  }

    return(
        
        <>
       {/* <Naver style={{display:'none'}} test={id}/> */}
        <div className="register-photo " style={{marginTop: '110px'}}>
          <div className="form-container " > 
          <div className="image-holder" />
            <form id='regForm' className="d"  noValidate>
              <h2 className="text-center">Login</h2>
               
                <div className="form-group">
                    <label>Email</label><br></br>
                    <input
                        type="email"
                       
                        name="email"
                        onChange={(e) => setEmail(e.target.value)}
                        className="form-control"
                        required
                    />
                       <p id="e1" style={{color:'red', display:'none'}}> Invalid email</p>
                   
                </div>

                <div className="form-group">
                    <label>Password</label><br></br>
                    <input
                        type="password"
             
                        name="pass"
                        onChange={(e) => setPass(e.target.value)}
                        className="form-control"
                        required
                    />
                    <p id="e2" style={{color:'red', display:'none'}}> Invalid password</p>
                  
                </div>

                <div>

                <button type="" className="btn btn-block " style={{backgroundColor: '#FDBE33'}} onClick={handelLog}>Login</button> 
                <p id='regP' className='mt-4'>Do not have an account? <a href="/Signup">Signup</a></p>
                
                </div>
                

            </form>
            
            </div>
            </div>
            
            </>
    )
}

export default Login ;
import React, { useState,useEffect } from 'react';
import RatingStars from "./RatingStars";
import axios from 'axios';

const Comment=()=>{

    let ide= sessionStorage.getItem("user_id");

    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [rate,setRate]=useState(null);
    const [message,setMessage]=useState('');
  
    const nameHandle=(e) => {
      setName(e.target.value)
    }
    const emailHandle=(e) => {
      setEmail(e.target.value)
    }
    const messageHandle=(e) => {
      setMessage(e.target.value)
    }
    const rateHandle=(e) => {
      // console.log(e.target.value);
      // setRate(e.target.value)
    }
    // useEffect(()=>{
      
    // },[])
  
    const submitHandler=(event)=>{
      if (ide == 0) 
      {
        event.preventDefault();
        sessionStorage.setItem('message','you need to log in to submit a comment');
        window.location= 'http://localhost:3000/login';
      }
      else
      {
      event.preventDefault();
      axios.post('http://localhost/project7/seaneighbor/php/comments.php?name='+name+'&email='+email+'&message='+message+'&rate='+rate);
      sessionStorage.setItem("smessage",'Your comment submitted succefully');
      window.location= 'http://localhost:3000/services';
      }
    } 
    return (
        <div className='container' >
    <form
        className="form-area contact-form text-right"
        id="myForm"
        action="mail.php"
        method="post"
        >
        <div className="row">
            <h1  className="mb-10" style={{textAlign:'center'}}> What you think about By The Sea Serves</h1>
            <div className='mt-5'>
        <RatingStars setRate={setRate} />
        </div>
            <div className="col-lg-12 form-group">
            <input
                name="name"
                placeholder="Enter your name"
                onFocus="this.placeholder = ''"
                onBlur="this.placeholder = 'Enter your name'"
                className="common-input mb-20 form-control"
                required=""
                type="text"
                onChange={nameHandle}
            />
            <input
                name="email"
                placeholder="Enter email address"
                pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"
                onFocus="this.placeholder = ''"
                onBlur="this.placeholder = 'Enter email address'"
                className="common-input mb-20 form-control"
                required=""
                type="email"
                onChange={emailHandle}
            />
            </div>
            <div className="col-lg-12 form-group">
            <textarea
                className="common-textarea form-control"
                name="message"
                placeholder="Enter Messege"
                onFocus="this.placeholder = ''"
                onBlur="this.placeholder = 'Enter Messege'"
                required=""
                defaultValue={""}
                onChange={messageHandle}
                style={{height: '200px'}}
            />
            </div>
            <div className="col-lg-12" style={{ justifyItems: 'center', display: 'grid' }}>
            <div><p style={{display:name === '' || email === '' || message === '' ||rate === null? 'block' : 'none', color:'red'}}>* All feilds Are required</p></div>
            <div className="alert-msg" style={{ textAlign: "left" }} />
            <button
            type='submit'
                className={` primary ${name === '' || email === '' || message === '' || rate === null ? 'btn bg-light': 'genric-btn'}`}
                style={{ float: "right" }}
                onClick={submitHandler}
                disabled={name === '' || email === '' || message === '' || rate === null}
            >
                Submit Comment
            </button>
            </div>
        </div>
        </form>
    </div>
    );
}
 
export default Comment;
import React, {useEffect, useState} from 'react';

import Main from './main';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Signup from './Signup/Signup';
import Button from 'react-bootstrap/Button';
import Messege from './Components/message';
import { NavLink,Link,useLocation  } from 'react-router-dom'



function Naver(props){
  const location = useLocation(); // once ready it returns the 'window.location' object
  const [url, setUrl] = useState(null);

  let id =props.user_id;

  let message=sessionStorage.getItem('message');
  let smessage=sessionStorage.getItem('smessage');
  
  useEffect(()=>{
    setUrl(location.pathname);
  },[message,smessage,location])

  // let id = sessionStorage.getItem("user_id"); //// raghad here where i call data
  console.log(id , 'nav');

  let state = false ;
  if( id > 0)
  {
    state = true;
   }else if( id == null || id == 0) {

    state = false;
  } 
      const [login,set_logged] = useState(state);

      const logout =(event)=>{
        // event.preventDefault();

        id= 0;
        sessionStorage.setItem("user_id" , 0);
        state = false;
        set_logged(false);
    
       }  
  
 console.log(login);
 console.log(id);
    return(
        <>
<header id="header" >
<div className="header-top">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-sm-6 col-6 header-top-left">
                <ul>
                  <li>
                    <a href="/contact">Visit Us</a>
                  </li>
                  <li>
                    <a href="/cal">Book Booth</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6 col-sm-6 col-6 header-top-right">
                <div className="header-social">
                  <a href="https://web.facebook.com/SoukJara2013"target="_blank">
                    <i className="fa fa-facebook" />
                  </a>
                  <a href="https://web.facebook.com/SoukJara2013"target="_blank">
                    <i className="fa fa-twitter" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container main-menu ">
<Navbar  expand="lg">
      <Container fluid >
        <Navbar.Brand to="/"> 
          <img
            alt=""
            src="/img/logo3.png"
            width="170"
            height="53"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="m-auto my-2 my-lg-0"
            style={{ maxHeight: '100px'}}
            navbarScroll
          >
            <Link to="/" className={`text-white mr-3 ${"underline" + (url === "/" ?" active" : "")}`} activeStyle={{ color:'red' }}>Home</Link>
            <Link to="/cal" className='text-white mr-3'>Book Booth</Link>
            <Link to="/services" className='text-white mr-3'>Services</Link>
            <Link to="/about" className='text-white mr-3'>About Us</Link>
            <Link to="/contact" className='text-white'>Contact Us</Link>
          </Nav>
          <Link to="/login" className='text-white ' style={{background: '#f8b600',marginRight: '20px',width: '83px',
    height: '45px',textAlign: 'center', display: state ? 'none': 'block'}}>Login</Link>
          <Link to="/Signup" className='text-white' style={{border: '2px solid #f8b600',width: '83px',
    height: '45px',textAlign: 'center', display: state ? 'none': 'block'}}>Signup</Link>
     <Link to="/" className='text-white mr-3' style={{display: state ? 'block': 'none'}} onClick={logout}><i className="fa-solid fa-right-from-bracket" /></Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
    <Messege />
    </header>
      </>
    )
}
export default Naver;
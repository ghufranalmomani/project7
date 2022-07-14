import React, {useState} from 'react';
import { NavLink } from 'react-bootstrap';
import Main from './main';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Signup from './Signup/Signup';
import Button from 'react-bootstrap/Button';
import './App.css'
import { useLocation } from 'react-router';



function Naver(props){
  
  let id =props.user_id;
  
  // let id = sessionStorage.getItem("user_id"); //// raghad here where i call data
  console.log(id , 'nav');

  let state = false ;
  if( id != 0)
  {
    state = true;
   }else if( id == null || id == 0) {

    state = false;
  } 

      const [login,set_logged] = useState(state);

      const logout =(event)=>{
        // event.preventDefault();

        id= 0;
        sessionStorage.setItem("user_id" , 0);   //// raghad here where i call data
        // console.log("heh"+id+is_logged);
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


           
            </div>
          </div>
        </div>
        <div className="container main-menu ">
          
<Navbar  expand="lg">
      <Container fluid >
        <Navbar.Brand href="#"> <img
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
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <NavLink href="/" className='text-white mr-3 '>Home</NavLink>
            <NavLink href="/cal" className='text-white mr-3'>Book Booth</NavLink>
            <NavLink href="/services" className='text-white mr-3'>Services</NavLink>
           
            <Nav.Link href="/about" className='text-white mr-3'>
             About Us
            </Nav.Link>
            <Nav.Link href="/contact" className='text-white'>Contact Us</Nav.Link>
          </Nav>
          <Nav.Link href="/login" className='text-white ' style={{background: '#f8b600',marginRight: '20px',width: '83px',

    height: '45px',textAlign: 'center', display: state ? 'none': 'block'}}>Login</Nav.Link>
          <Nav.Link href="/Signup" className='text-white' style={{border: '2px solid #f8b600',width: '83px',
    height: '45px',textAlign: 'center', display: state ? 'none': 'block'}}>Signup</Nav.Link>
     <Nav.Link href="/" className='text-white mr-3' style={{display: state ? 'block': 'none'}} onClick={logout}>Logout</Nav.Link>

        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  </header>
      </>
    )
}
export default Naver;
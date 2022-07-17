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

  let id =props.user_id;
  let message=sessionStorage.getItem('message');
  let smessage=sessionStorage.getItem('smessage');

  useEffect(()=>{
  },[message,smessage])

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

            </div>
          </div>
        </div>
        <div className="container main-menu ">
          
<Navbar  expand="lg">
      <Container fluid >
        <Navbar.Brand to="/"> 
         
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="m-auto my-2 my-lg-0"
            style={{ maxHeight: '100px'}}
            navbarScroll
          >

            {/* <Nav.Link href="/" className={`text-white mr-3`}>Home</Nav.Link> */}
            <Nav.Link href="/cal" className='text-white mr-3'>Weather</Nav.Link>
            {/* <Nav.Link href="/services" className='text-white mr-3'>Services</Nav.Link>
            <Nav.Link href="/about" className='text-white mr-3'>About Us</Nav.Link> */}

            {/* <Nav.Link href="/contact" className='text-white'>Contact Us</Nav.Link> */}
          </Nav>
          <Nav.Link href="/login" className='text-white ' style={{background: '#f8b600',marginRight: '20px',width: '83px',

    height: '45px',textAlign: 'center', display: state ? 'none': 'block'}}>Login</Nav.Link>
          <Nav.Link href="/Signup" className='text-white' style={{border: '2px solid #f8b600',width: '83px',
    height: '45px',textAlign: 'center', display: state ? 'none': 'block'}}>Signup</Nav.Link>
     <Nav.Link href="/" className='text-white mr-3' style={{display: state ? 'block': 'none'}} onClick={logout}><i className="fa-solid fa-right-from-bracket" />
</Nav.Link>

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
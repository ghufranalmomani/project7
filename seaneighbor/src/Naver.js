import React, {useState} from 'react';

import Main from './main';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Signup from './Signup/Signup';

import Button from 'react-bootstrap/Button';



function Naver(){
  const [login, setLogin]= useState(false);
    return(
        <>
<header id="header" >
<div className="header-top">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-sm-6 col-6 header-top-left">
                <ul>
                  <li>
                    <a href="#">Visit Us</a>
                  </li>
                  <li>
                    <a href="#">Book Booth</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6 col-sm-6 col-6 header-top-right">
                <div className="header-social">
                  <a href="#">
                    <i className="fa fa-facebook" />
                  </a>
                  <a href="#">
                    <i className="fa fa-twitter" />
                  </a>
                  <a href="#">
                    <i className="fa fa-dribbble" />
                  </a>
                  <a href="#">
                    <i className="fa fa-behance" />
                  </a>
                </div>
              </div>
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
            <Nav.Link href="/" className='text-white mr-3'>Home</Nav.Link>
            <Nav.Link href="#action1" className='text-white mr-3'>Book Booth</Nav.Link>
            <Nav.Link href="/services" className='text-white mr-3'>Services</Nav.Link>
           
            <Nav.Link href="/about" className='text-white mr-3'>
             About Us
            </Nav.Link>
            <Nav.Link href="/contact" className='text-white'>Contact Us</Nav.Link>
          </Nav>
          <Nav.Link href="#action2" className='text-white ' style={{background: '#f8b600',marginRight: '20px',width: '83px',
    height: '45px',textAlign: 'center', display: login ? 'none': 'block'}}>Login</Nav.Link>
          <Nav.Link href="/Signup" className='text-white' style={{border: '2px solid #f8b600',width: '83px',
    height: '45px',textAlign: 'center', display: login ? 'none': 'block'}}>Signup</Nav.Link>
     <Nav.Link href="/services" className='text-white mr-3' style={{display: login ? 'block': 'none'}}>Logout</Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  </header>
      </>
    )
}
export default Naver;
import React from 'react';
import {$,jQuery} from 'jquery';
import Main from './main';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



function Naver(){
    return(
        <>


   
      <Navbar >
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    
        {/* <header id="header" >
        <div className="header-top">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-sm-6 col-6 header-top-left">
                <ul>
                  <li>
                    <a href="#">Visit Us</a>
                  </li>
                  <li>
                    <a href="#">Buy Tickets</a>
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
        <div className="container main-menu">
          <div className="row align-items-center justify-content-between d-flex">
            <div id="logo">
              <a href="index.html">
                <img src="img/logo.png" alt="" title="" height={40}/>
              </a>
            </div>
            <nav id="nav-menu-container">
              <ul className="nav-menu">
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li>
                  <a href="about.html">About</a>
                </li>
                <li>
                  <a href="packages.html">Packages</a>
                </li>
                <li>
                  <a href="hotels.html">Hotels</a>
                </li>
                <li>
                  <a href="insurance.html">Insurence</a>
                </li>
                <li className="menu-has-children">
                  <a href="">Blog</a>
                  <ul>
                    <li>
                      <a href="blog-home.html">Blog Home</a>
                    </li>
                    <li>
                      <a href="blog-single.html">Blog Single</a>
                    </li>
                  </ul>
                </li>
                <li className="menu-has-children">
                  <a href="">Pages</a>
                  <ul>
                    <li>
                      <a href="elements.html">Elements</a>
                    </li>
                    <li className="menu-has-children">
                      <a href="">Level 2 </a>
                      <ul>
                        <li>
                          <a href="#">Item One</a>
                        </li>
                        <li>
                          <a href="#">Item Two</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="contact.html">Contact</a>
                </li>
              </ul>
            </nav>
         
          </div>
        </div>
      </header>
  */}
      </>
    )
}
export default Naver;
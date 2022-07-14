import React from 'react';
import './App.css'



function Footer(){
  //Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
    return(
        <>
         {/* start footer Area */}
  <footer className="footer-area section-gap">
  
    <div className="container">
      <div className="row">
        <div className="col-lg-2  col-md-6 col-sm-6">
          <div className="single-footer-widget mt-5">
          <img
              alt=""
              src="/img/logo3.png"
              width="180"
              height="70"
              className="d-inline-block align-top"
            />
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6">
          <div className="single-footer-widget">
            <h6>Navigation Links</h6>
            <div className="row">
              <div className="col">
                <ul>
                  <li>
                    <a href="/" style={{color:'white'}}>Home</a>
                  </li>
                  <li>
                    <a href="#Features" style={{color:'white'}}>Feature</a>
                  </li>
                  <li>
                    <a href="/services" style={{color:'white'}}>Services</a>
                  </li>
                  <li>
                    <a href="#event" style={{color:'white'}}>event</a>
                  </li>
                </ul>
              </div>
              <div className="col" >
                <ul style={{padding:'0px'}}>
                  <li>
                    <a href="/about"style={{color:'white'}} >About</a>
                  </li>
                  <li>
                    <a href="#Packages" style={{color:'white'}}>Packages</a>
                  </li>
                  {/* <li>
                    <a href="/book">Book</a>
                  </li> */}
                  <li>
                    <a href="/contact" style={{color:'white'}}>Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3  col-md-6 col-sm-6">
          <div className="single-footer-widget">
            <h6>ABOUT US</h6>
            <p style={{color:'white'}}>
            If you are looking space to grow your small business, you may be very confused about the place and price. We provide that at nominal prices..
            </p>
          </div>
        </div>
        <div className="col-lg-3  col-md-6 col-sm-6">
          <div className="single-footer-widget mail-chimp">
            <h6 className="mb-20">InstaFeed</h6>
            <ul className="instafeed d-flex flex-wrap">
              <li>
                <img src="img/4.jpg" alt="" height={60} width={60} />
              </li>
              <li>
                <img src="img/34.jpg" alt="" height={60} width={60}/>
              </li>
              <li>
                <img src="img/20.jpg" alt="" height={60} width={60}/>
              </li>
              <li>
                <img src="img/29.jpg" alt="" height={60} width={60}/>
              </li>
              <li>
                <img src="img/15.jpg" alt="" height={60} width={60}/>
              </li>
              <li>
                <img src="img/7.jpg" alt="" height={60} width={60} />
              </li>
              <li>
                <img src="img/21.jpg" alt="" height={60} width={60} />
              </li>
              <li>
                <img src="img/35.jpg" alt="" height={60} width={60}/>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row footer-bottom d-flex justify-content-center align-items-center">
        <p className="col-lg-8 col-sm-12 footer-text m-0 light">
          {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
          Copyright © All rights reserved | This template is made with{" "}
          <i className="fa fa-heart-o" aria-hidden="true" /> by Group 4
          {/* <a href="https://colorlib.com" target="_blank">
            Colorlib
          </a> */}
          {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
        </p>
        {/* <div className="col-lg-4 col-sm-12 footer-social">
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
        </div> */}
      </div>
    </div>
  </footer>
  <button  id="myBtn" title="Go to top" onClick={topFunction}><i class="fa-solid fa-circle-arrow-up"></i></button>
      </>
    )
}
export default Footer;
import React from 'react';

function Contact(){
    return(

<>
  {/* Mobile Specific Meta */}
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1, shrink-to-fit=no"
  />
  {/* Favicon*/}
  <link rel="shortcut icon" href="img/fav.png" />
  {/* Author Meta */}
  <meta name="author" content="colorlib" />
  {/* Meta Description */}
  <meta name="description" content="" />
  {/* Meta Keyword */}
  <meta name="keywords" content="" />
  {/* meta character set */}
  <meta charSet="UTF-8" />
  {/* Site Title */}
  <title>Travel</title>
  <link
    href="https://fonts.googleapis.com/css?family=Poppins:100,200,400,300,500,600,700"
    rel="stylesheet"
  />
  {/*
			CSS
			============================================= */}
  <link rel="stylesheet" href="css/linearicons.css" />
  <link rel="stylesheet" href="css/font-awesome.min.css" />
  <link rel="stylesheet" href="css/bootstrap.css" />
  <link rel="stylesheet" href="css/magnific-popup.css" />
  <link rel="stylesheet" href="css/jquery-ui.css" />
  <link rel="stylesheet" href="css/nice-select.css" />
  <link rel="stylesheet" href="css/animate.min.css" />
  <link rel="stylesheet" href="css/owl.carousel.css" />
  <link rel="stylesheet" href="css/main.css" />
  <header id="header">
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
            <img src="img/logo.png" alt="" title="" />
          </a>
        </div>
        
      </div>
    </div>
  </header>
  {/* #header */}
  {/* start banner Area */}
  <section className="relative about-banner">
    <div className="overlay overlay-bg" />
    <div className="container">
      <div className="row d-flex align-items-center justify-content-center">
        <div className="about-content col-lg-12">
          <h1 className="text-white">Contact Us</h1>
          <p className="text-white link-nav">
            <a href="index.html">Home </a>{" "}
            <span className="lnr lnr-arrow-right" />{" "}
            <a href="contact.html"> Contact Us</a>
          </p>
        </div>
      </div>
    </div>
  </section>
  {/* End banner Area */}
  {/* Start contact-page Area */}
  <section className="contact-page-area section-gap">
    <div className="container">
      <div className="row">
        <div
          className="map-wrap"
          style={{ width: "100%", height: 445 }}
          id="map"
        />
        <div className="col-lg-4 d-flex flex-column address-wrap">
          <div className="single-contact-address d-flex flex-row">
            <div className="icon">
              <span className="lnr lnr-home" />
            </div>
            <div className="contact-details">
              <h5>Binghamton, New York</h5>
              <p>4343 Hinkle Deegan Lake Road</p>
            </div>
          </div>
          <div className="single-contact-address d-flex flex-row">
            <div className="icon">
              <span className="lnr lnr-phone-handset" />
            </div>
            <div className="contact-details">
              <h5>00 (958) 9865 562</h5>
              <p>Mon to Fri 9am to 6 pm</p>
            </div>
          </div>
          <div className="single-contact-address d-flex flex-row">
            <div className="icon">
              <span className="lnr lnr-envelope" />
            </div>
            <div className="contact-details">
              <h5>support@colorlib.com</h5>
              <p>Send us your query anytime!</p>
            </div>
          </div>
        </div>
        <div className="col-lg-8">
          <form
            className="form-area contact-form text-right"
            id="myForm"
            action="mail.php"
            method="post"
          >
            <div className="row">
              <div className="col-lg-6 form-group">
                <input
                  name="name"
                  placeholder="Enter your name"
                  onfocus="this.placeholder = ''"
                  onblur="this.placeholder = 'Enter your name'"
                  className="common-input mb-20 form-control"
                  required=""
                  type="text"
                />
                <input
                  name="email"
                  placeholder="Enter email address"
                  pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"
                  onfocus="this.placeholder = ''"
                  onblur="this.placeholder = 'Enter email address'"
                  className="common-input mb-20 form-control"
                  required=""
                  type="email"
                />
                <input
                  name="subject"
                  placeholder="Enter subject"
                  onfocus="this.placeholder = ''"
                  onblur="this.placeholder = 'Enter subject'"
                  className="common-input mb-20 form-control"
                  required=""
                  type="text"
                />
              </div>
              <div className="col-lg-6 form-group">
                <textarea
                  className="common-textarea form-control"
                  name="message"
                  placeholder="Enter Messege"
                  onfocus="this.placeholder = ''"
                  onblur="this.placeholder = 'Enter Messege'"
                  required=""
                  defaultValue={""}
                />
              </div>
              <div className="col-lg-12">
                <div className="alert-msg" style={{ textAlign: "left" }} />
                <button
                  className="genric-btn primary"
                  style={{ float: "right" }}
                >
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
  {/* End contact-page Area */}
 
</>


        )
    }
    export default Contact;    


import React from 'react';
import GoogleMapReact from 'google-map-react';
import SimpleMap from './Components/map';


function Contact(){

    return(

<>
  {/* start banner Area */}
  <section className="about-banner relative">
    <div className="overlay overlay-bg" />
    <div className="container">
      <div className="row d-flex align-items-center justify-content-center">
        <div className="about-content col-lg-12">
          <h1 className="text-white">Contact Us</h1>
          <p className="text-white link-nav">
            <a href="/">Home </a>{" "}
            <span className="lnr lnr-arrow-right" />{" "}
            <a href="/contact"> Contact Us</a>
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
      <div style={{ height: '100vh', width: '100%' }}>
      {/* <SimpleMap /> */}
    </div>
    </div>
  </section>
  {/* End contact-page Area */}
 
</>


        )
    }
    export default Contact;    


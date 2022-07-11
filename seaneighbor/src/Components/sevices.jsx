import axios from 'axios';
import React, { useEffect, useState } from 'react';
import RatingStars from './RatingStars';



function Services() {
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
    event.preventDefault();
    axios.post('http://localhost/project7/seaneighbor/php/comments.php?name='+name+'&email='+email+'&message='+message+'&rate='+rate);
    alert('Your comment submitted succefully');
    window.location= 'http://localhost:3000/services';
  }
    return (
        <>
        {/* start banner Area */}
  <section className="about-banner relative">
    <div className="overlay overlay-bg" />
    <div className="container">
      <div className="row d-flex align-items-center justify-content-center">
        <div className="about-content col-lg-12">
          <h1 className="text-white">Services</h1>
          <p className="text-white link-nav">
            <a href="/">Home </a>{" "}
            <span className="lnr lnr-arrow-right" />{" "}
            <a href="/services"> Services</a>
          </p>
        </div>
      </div>
    </div>
  </section>
  {/* Start price Area */}
  <section className="price-area section-gap">
    <div className="container">
      <div className="row d-flex justify-content-center">
        <div className="menu-content pb-70 col-lg-8">
          <div className="title text-center">
            <h1 className="mb-10">We Provide Affordable Prices</h1>
            <p>
              Well educated, intellectual people, especially scientists at all
              times demonstrate considerably.
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4">
          <div className="single-price">
            <h4>Cheap Packages</h4>
            <ul className="price-list">
              <li className="d-flex justify-content-between align-items-center">
                <span>New York</span>
                <a href="#" className="price-btn">
                  $1500
                </a>
              </li>
              <li className="d-flex justify-content-between align-items-center">
                <span>Maldives</span>
                <a href="#" className="price-btn">
                  $1500
                </a>
              </li>
              <li className="d-flex justify-content-between align-items-center">
                <span>Sri Lanka</span>
                <a href="#" className="price-btn">
                  $1500
                </a>
              </li>
              <li className="d-flex justify-content-between align-items-center">
                <span>Nepal</span>
                <a href="#" className="price-btn">
                  $1500
                </a>
              </li>
              <li className="d-flex justify-content-between align-items-center">
                <span>Thiland</span>
                <a href="#" className="price-btn">
                  $1500
                </a>
              </li>
              <li className="d-flex justify-content-between align-items-center">
                <span>Singapore</span>
                <a href="#" className="price-btn">
                  $1500
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="single-price">
            <h4>Luxury Packages</h4>
            <ul className="price-list">
              <li className="d-flex justify-content-between align-items-center">
                <span>New York</span>
                <a href="#" className="price-btn">
                  $1500
                </a>
              </li>
              <li className="d-flex justify-content-between align-items-center">
                <span>Maldives</span>
                <a href="#" className="price-btn">
                  $1500
                </a>
              </li>
              <li className="d-flex justify-content-between align-items-center">
                <span>Sri Lanka</span>
                <a href="#" className="price-btn">
                  $1500
                </a>
              </li>
              <li className="d-flex justify-content-between align-items-center">
                <span>Nepal</span>
                <a href="#" className="price-btn">
                  $1500
                </a>
              </li>
              <li className="d-flex justify-content-between align-items-center">
                <span>Thiland</span>
                <a href="#" className="price-btn">
                  $1500
                </a>
              </li>
              <li className="d-flex justify-content-between align-items-center">
                <span>Singapore</span>
                <a href="#" className="price-btn">
                  $1500
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="single-price">
            <h4>Camping Packages</h4>
            <ul className="price-list">
              <li className="d-flex justify-content-between align-items-center">
                <span>New York</span>
                <a href="#" className="price-btn">
                  $1500
                </a>
              </li>
              <li className="d-flex justify-content-between align-items-center">
                <span>Maldives</span>
                <a href="#" className="price-btn">
                  $1500
                </a>
              </li>
              <li className="d-flex justify-content-between align-items-center">
                <span>Sri Lanka</span>
                <a href="#" className="price-btn">
                  $1500
                </a>
              </li>
              <li className="d-flex justify-content-between align-items-center">
                <span>Nepal</span>
                <a href="#" className="price-btn">
                  $1500
                </a>
              </li>
              <li className="d-flex justify-content-between align-items-center">
                <span>Thiland</span>
                <a href="#" className="price-btn">
                  $1500
                </a>
              </li>
              <li className="d-flex justify-content-between align-items-center">
                <span>Singapore</span>
                <a href="#" className="price-btn">
                  $1500
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* End price Area */}
  {/* Start other-issue Area */}
  <section className="other-issue-area section-gap">
    <div className="container">
      <div className="row d-flex justify-content-center">
        <div className="menu-content pb-70 col-lg-9">
          <div className="title text-center">
            <h1 className="mb-10">Other issues we can help you with</h1>
            <p>
              We all live in an age that belongs to the young at heart. Life
              that is.
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-3 col-md-6">
          <div className="single-other-issue">
            <div className="thumb">
              <img className="img-fluid" src="https://cdn.discordapp.com/attachments/962769580818858015/994507750291816468/13.jpg" alt="" />
            </div>
            <a href="#">
              <h4>Rent a Car</h4>
            </a>
            <p>
              The preservation of human life is the ultimate value, a pillar of
              ethics and the foundation.
            </p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="single-other-issue">
            <div className="thumb">
              <img className="img-fluid" src="https://cdn.discordapp.com/attachments/962769580818858015/994507749826236476/11.jpg" alt="" />
            </div>
            <a href="#">
              <h4>Cruise Booking</h4>
            </a>
            <p>
              I was always somebody who felt quite sorry for myself, what I had
              not got compared.
            </p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="single-other-issue">
            <div className="thumb">
              <img className="img-fluid" src="https://cdn.discordapp.com/attachments/962769580818858015/994507750535073792/14.jpg" alt="" />
            </div>
            <a href="#">
              <h4>To Do List</h4>
            </a>
            <p>
              The following article covers a topic that has recently moved to
              center stage–at least it seems.
            </p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="single-other-issue">
            <div className="thumb">
              <img className="img-fluid" src="https://cdn.discordapp.com/attachments/962769580818858015/994507750056919111/12.jpg" alt="" />
            </div>
            <a href="#">
              <h4>Food Features</h4>
            </a>
            <p>
              There are many kinds of narratives and organizing principles.
              Science is driven by evidence.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* End other-issue Area */}
  {/* End banner Area */}
        <div className='container' style={{ height: '50vh', width: '50%' }}>
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
                  onChange={nameHandle}
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
                  onChange={emailHandle}
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
                  onChange={messageHandle}
                />
              </div>
              <div className="col-lg-12" style={{ justifyItems: 'center', display: 'grid' }}>
              <RatingStars setRate={setRate}/>
                <div className="alert-msg" style={{ textAlign: "left" }} />
                <button
                type='submit'
                  className="genric-btn primary"
                  style={{ float: "right" }}
                  onClick={submitHandler}
                >
                  Submit Comment
                </button>
              </div>
            </div>
          </form>
        </div>
        </>
    )
}
 export default Services;
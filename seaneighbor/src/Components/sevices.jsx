import axios from 'axios';
import React, { useEffect, useState } from 'react';
import RatingStars from './RatingStars';
import Packages from '../Home/Packages'



function Services() {
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
      alert('you need to log in to send a comment');
      window.location= 'http://localhost:3000/login';
    }
    else
    {
    event.preventDefault();
    axios.post('http://localhost/project7/seaneighbor/php/comments.php?name='+name+'&email='+email+'&message='+message+'&rate='+rate);
    alert('Your comment submitted succefully');
    window.location= 'http://localhost:3000/services';
    }
  }
    return (
        <>
        {/* start banner Area */}
  <section className="about-banner relative">
    <div className="overlay overlay-bg" />
    <div className="container">
      <div className="row d-flex align-items-center justify-content-center">
        <div className="about-content col-lg-12 mt-5">
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
  <div className='mt-5'>
 <Packages />
 </div>
   {/* Start other-issue Area */}
   <section className="other-issue-area section-gap">
    <div className="container">
      <div className="row d-flex justify-content-center">
        <div className="menu-content pb-70 col-lg-9">
          <div className="title text-center">
            <h1 className="mb-10">The Exhibits Of The Seaside Market Tell The History Of The City And The Culture Of Its Inhabitants.
</h1>
            <p>
          
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
              <h4></h4>
            </a>
            <p>
            The lively market of Jar al-Bahr in the heart of the tourist city of Aqaba attracts thousands of visitors and tourists every weekend, combining the authenticity of history and the manifestations of contemporary life, through its handicrafts, plastic and natural exhibits and various foods.

            </p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="single-other-issue">
            <div className="thumb">
              <img className="img-fluid" src="https://cdn.discordapp.com/attachments/962769580818858015/994507749826236476/11.jpg" alt="" />
            </div>
            <a href="#">
              <h4></h4>
            </a>
            <p>
            Some home entrepreneurs and craftsmen working in poverty alleviation programs run by NGOs gather in the open air to display their various products to visitors and tourists, amid the “hums” of the Al-Aqbawi sesame machine.

            </p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="single-other-issue">
            <div className="thumb">
              <img className="img-fluid" src="https://cdn.discordapp.com/attachments/962769580818858015/994507750535073792/14.jpg" alt="" />
            </div>
            <a href="#">
              <h4></h4>
            </a>
            <p>
            Jar al-Bahr Market adds a new tourist product, by attracting tourists to buy and see the rich heritage artifacts inside that emulate the city’s heritage and identity, in addition to Jordanian and Aqbawiya foods such as Sayadiyah, Mansaf, Mahashi and others, in addition to sweets.

            </p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="single-other-issue">
            <div className="thumb">
              <img className="img-fluid" src="https://cdn.discordapp.com/attachments/962769580818858015/994507750056919111/12.jpg" alt="" />
            </div>
            <a href="#">
              <h4></h4>
            </a>
            <p>
            The market includes more than 60 different tents of crafts, handicrafts, exhibits, embroideries, a Bedouin tent to receive guests, and a theater equipped to present musical and folk performances, as the market receives approximately 1,200 people on Thursdays and Fridays.

            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* End other-issue Area */}
  {/* End banner Area */}
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
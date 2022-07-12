import axios from 'axios';
import React, { useEffect, useState } from 'react';


function About(){
  const [commnet,setComment]=useState([]);

  useEffect(()=>{
    axios.get('http://localhost/project7/seaneighbor/php/comments.php')
    .then((data) =>{
      setComment(data.data)
      console.log(data.data);
    });
  },[])

  return(
    <>
      {/* start banner Area */}
      <section className="about-banner relative">
        <div className="overlay overlay-bg" />
        <div className="container">
          <div className="row d-flex align-items-center justify-content-center">
            <div className="about-content col-lg-12">
              <h1 className="text-white">About Us</h1>
              <p className="text-white link-nav">
                <a href="/">Home </a>{" "}
                <span className="lnr lnr-arrow-right" />{" "}
                <a href="/about"> About Us</a>
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* End banner Area */}
      {/* Start about-info Area */}
      <section className="about-info-area section-gap">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 info-left">
              <img className="img-fluid" src="https://cdn.discordapp.com/attachments/962769580818858015/994507587389247488/2.jpg" alt="" />
            </div>
            <div className="col-lg-6 info-right">
              <h6>About Us</h6>
              <h1>Who We Are?</h1>
              <p>
                Here, I focus on a range of items and features that we use in life
                without giving them a second thought. such as Coca Cola. Dolor sit
                amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* End about-info Area */}

      {/* Start testimonial Area */}
      <section className="testimonial-area section-gap">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="menu-content pb-70 col-lg-8">
              <div className="title text-center">
                <h1 className="mb-10">Testimonial from our Clients</h1>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="active-testimonial">
              {commnet.map((comment) =>{
                console.log(comment.rating);
                return(
                              <div className="single-testimonial item d-flex flex-row">
                              <div className="thumb">
                                <img className="img-fluid" src="img/elements/user3.png" alt="" height={100} width={100}/>
                              </div>
                              <div className="desc">
                                <p>
                                  {comment.body}
                                </p>
                                <h4>{comment.user_id}</h4>
                                <div className="star">
                                  {comment.rating == 1 ? <>
                                  <span className="fa fa-star checked" />
                                  <span className="fa fa-star" />
                                  <span className="fa fa-star" />
                                  <span className="fa fa-star" />
                                  <span className="fa fa-star" /></> : ''}
                                  {comment.rating == 2 ? <>
                                  <span className="fa fa-star checked" />
                                  <span className="fa fa-star checked" />
                                  <span className="fa fa-star" />
                                  <span className="fa fa-star" />
                                  <span className="fa fa-star" /></> : ''}
                                  {comment.rating == 3 ? <>
                                  <span className="fa fa-star checked" />
                                  <span className="fa fa-star checked" />
                                  <span className="fa fa-star checked" />
                                  <span className="fa fa-star" />
                                  <span className="fa fa-star" /></> : ''}
                                  {comment.rating == 4 ? <>
                                  <span className="fa fa-star checked" />
                                  <span className="fa fa-star checked" />
                                  <span className="fa fa-star checked" />
                                  <span className="fa fa-star checked" />
                                  <span className="fa fa-star" /></> : ''}
                                  {comment.rating == 5 ? <>
                                  <span className="fa fa-star checked" />
                                  <span className="fa fa-star checked" />
                                  <span className="fa fa-star checked" />
                                  <span className="fa fa-star checked" />
                                  <span className="fa fa-star checked" /></> : ''}
                                  </div>
                              </div>
                            </div>
              )})}
              {/* <div className="single-testimonial item d-flex flex-row">
                <div className="thumb">
                  <img className="img-fluid" src="img/elements/user2.png" alt="" />
                </div>
                <div className="desc">
                  <p>
                    A purpose is the eternal condition for success. Every former
                    smoker can tell you just how hard it is to stop smoking
                    cigarettes. However.
                  </p>
                  <h4>Carolyn Craig</h4>
                  <div className="star">
                    <span className="fa fa-star checked" />
                    <span className="fa fa-star checked" />
                    <span className="fa fa-star checked" />
                    <span className="fa fa-star" />
                    <span className="fa fa-star" />
                  </div>
                </div>
              </div>
              <div className="single-testimonial item d-flex flex-row">
                <div className="thumb">
                  <img className="img-fluid" src="img/elements/user1.png" alt="" />
                </div>
                <div className="desc">
                  <p>
                    Do you want to be even more successful? Learn to love learning
                    and growth. The more effort you put into improving your skills,
                    the bigger the payoff you.
                  </p>
                  <h4>Harriet Maxwell</h4>
                  <div className="star">
                    <span className="fa fa-star checked" />
                    <span className="fa fa-star checked" />
                    <span className="fa fa-star checked" />
                    <span className="fa fa-star checked" />
                    <span className="fa fa-star" />
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>
      {/* End testimonial Area */}
      {/* Start our team area */}
      <section id="team">
      <div className="container my-3 py-5 text-center">
        <div className="row mb-5">
          <div className="col">
            <h1>Our Team</h1>
            <p className="my-3">
              This team page has a quirky, vibrant energy that immediately catches
              your attention – a good sign for a design company.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-6 pt-1">
            <div className="card h-100">
              <div className="card-body">
                <img
                  className="img-fouild rounded w-75 mb-3"
                  src="https://avatars.githubusercontent.com/u/100237201?v=4"
                  alt="Sophie"
                />
                <h4>Hadi AL-Saden</h4>
                <h5>Software Engineer</h5>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi,
                  recusandae.
                </p>
                <div className="d-flex flex-row justify-content-center">
                  <div className="p-4">
                    <a href="#">
                    <i class="fa-brands fa-facebook"></i>
                    </a>
                  </div>
                  <div className="p-4">
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                  </div>
                  <div className="p-4">
                    <a href="#">
                      <i className="fab fa-instagram" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 pt-1">
            <div className="card h-100">
              <div className="card-body">
                <img
                  className="img-fouild rounded w-75 mb-3"
                  src="https://avatars.githubusercontent.com/u/100368515?v=4"
                  alt="lucy"
                />
                <h4>Ghufran Almomani</h4>
                <h5>Product Owner</h5>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi,
                  recusandae.
                </p>
                <div className="d-flex flex-row justify-content-center">
                  <div className="p-4">
                    <a href="#">
                    <i class="fa-brands fa-facebook"></i>
                    </a>
                  </div>
                  <div className="p-4">
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                  </div>
                  <div className="p-4">
                    <a href="#">
                      <i className="fab fa-instagram" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 pt-1">
            <div className="card h-100">
              <div className="card-body">
                <img
                  className="img-fouild rounded w-75 mb-3"
                  src="https://avatars.githubusercontent.com/u/100212231?v=4"
                  alt="Brad"
                />
                <h4>Anas Allawafeh</h4>
                <h5>Scrum Master</h5>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi,
                  recusandae.
                </p>
                <div className="d-flex flex-row justify-content-center">
                  <div className="p-4">
                    <a href="#">
                    <i class="fa-brands fa-facebook"></i>
                    </a>
                  </div>
                  <div className="p-4">
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                  </div>
                  <div className="p-4">
                    <a href="#">
                      <i className="fab fa-instagram" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 pt-1">
            <div className="card h-100">
              <div className="card-body">
                <img
                  className="img-fouild rounded w-75 mb-3"
                  src="https://avatars.githubusercontent.com/u/100063786?v=4"
                  alt="andres"
                />
                <h4>Ro'a Yaseen</h4>
                <h5>Software Engineer</h5>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi,
                  recusandae.
                </p>
                <div className="d-flex flex-row justify-content-center">
                  <div className="p-4">
                    <a href="#">
                    <i class="fa-brands fa-facebook"></i>
                    </a>
                  </div>
                  <div className="p-4">
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                  </div>
                  <div className="p-4">
                    <a href="#">
                      <i className="fab fa-instagram" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>



    </>
        )
    }
    export default About;
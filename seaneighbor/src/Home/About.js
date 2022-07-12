import React from 'react';
import { Carousel } from 'react-bootstrap';



function About(){
    return(
        <>
         {/* Start home-about Area */}
  <section className="home-about-area container" style={{marginTop:'100px', marginBottom:'100px'}}>
    <div className="container-fluid">
      <div className="row align-items-center justify-content-center">
        <div className="col-lg-6 col-md-12 home-about-right">
          <h1>
            What we Provide <br />
        
          </h1>
          <p>
          By The Sea Souk is a large area with 30 dedicated and equipped booths to display the products of small business owners in the most popular area in Aqaba.
          In Souk By The Sea, we cover almost all categories of small businesses and handicrafts, and we make sure that their continuity and support by bringing investors to visit and see business owners on various events and occasions.We have success stories for projects that started small and grew and expanded with us and we are very proud of them and they will always remain a part of ouk By The Sea family.
          </p>
          <a href="/cal" className="primary-btn text-uppercase">
            start now
          </a>
        </div>
        <div className="col-lg-6 col-md-12 home-about-right no-padding">
        <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="./img/6.jpg"
      alt="First slide"
    />
    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="./img/9.jpg"
      alt="Second slide"
    />

    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="img/25.jpg"
      alt="Third slide"
    />

   
  </Carousel.Item>
</Carousel>
        </div>
      </div>
    </div>
  </section>
  {/* End home-about Area */}
      </>
    )
}
export default About;
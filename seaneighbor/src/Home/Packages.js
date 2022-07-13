import React from 'react';
  

function Packages(){
 
    return(
        <>
  <section className="destinations-area section-gap" id='Packages'>
    <div className="container">
      <div className="row d-flex justify-content-center">
        <div className="menu-content pb-40 col-lg-8">
          <div className="title text-center">
            <h1 className="mb-10">Our Packages</h1>
           
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4">
          <div className="single-destinations">
            <div className="thumb">
              <img src="img/21.jpg" alt="" width={250} height={250} />
            </div>
            <div className="details">
              <h4>Daily Package</h4>
              <p>For 24 hours</p>
              <ul className="package-list">
                <li className="d-flex justify-content-between align-items-center">
                  <span>Duration</span>
                  <span>01 days and 1 nights</span>
                </li>
                <li className="d-flex justify-content-between align-items-center">
                  <span>Time</span>
                  <span>From 11 Am to 11 PM </span>
                </li>
                <li className="d-flex justify-content-between align-items-center">
                  <span>ِArea</span>
                  <span>7*7 m</span>
                </li>
              
              
                <li className="d-flex justify-content-between align-items-center">
                  <span>Price </span>
                  <a href="/cal" className="price-btn">
                    5 JD
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="single-destinations">
            <div className="thumb">
              <img src="img/26.jpg" alt="" width={250} height={250}/>
            </div>
            <div className="details">
              <h4>Weekly Package </h4>
              <p>For 7 Consecutive Days</p>
              <ul className="package-list">
                <li className="d-flex justify-content-between align-items-center">
                  <span>Duration</span>
                  <span>6 days and 7 nights</span>
                </li>
                <li className="d-flex justify-content-between align-items-center">
                  <span>Time</span>
                  <span>From 11 Am to 11 PM</span>
                </li>
                <li className="d-flex justify-content-between align-items-center">
                  <span>ِArea</span>
                  <span>8*8.5 m</span>
                </li>
                <li className="d-flex justify-content-between align-items-center">
                  <span>Price per person</span>
                  <a href="/cal" className="price-btn">
                    25JD
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="single-destinations">
            <div className="thumb">
              <img src="img/33.jpg" alt="" width={250} height={250}/>
            </div>
            <div className="details">
              <h4>Monthly Package</h4>
              <p>For 30 Days</p>
              <ul className="package-list">
                <li className="d-flex justify-content-between align-items-center">
                  <span>Duration</span>
                  <span>29 days and 30 nights</span>
                </li>
                <li className="d-flex justify-content-between align-items-center">
                  <span>Time</span>
                  <span>From 11 Am to 11 PM</span>
                </li>
                <li className="d-flex justify-content-between align-items-center">
                  <span>Area</span>
                  <span>10*10m</span>
                </li>
                <li className="d-flex justify-content-between align-items-center">
                  <span>Price per person</span>
                  <a href="/cal" className="price-btn">
                    90 JD
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* End destinations Area */}
</>

    )
}


export default Packages;
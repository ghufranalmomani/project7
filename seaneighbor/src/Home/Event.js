import React from 'react';


function Event(){
    return(
        <>
  {/* Event Start */}
  <div className="event" id='event'>
    <div className="container">
    <div className="menu-content pb-40 ">
          <div className="title text-center">
   
            <h1 className="mb-10">Be ready for our upcoming events</h1>
          </div>
          </div>
      <div className="row">
        <div className="col-lg-6">
          <div className="event-item">
            <img src="img/35.jpg" alt="Image" height={400}/>
            <div className="event-content">
              <div className="event-meta">
                <p>
                  <i className="fa fa-calendar-alt" />
                  01-Aug-22
                </p>
                <p>
                  <i className="far fa-clock" />
                  8:00 - 10:00
                </p>
                <p>
                  <i className="fa fa-map-marker-alt" />
                  Aqaba
                </p>
              </div>
              <div className="event-text">
                <h3>Eid al-Adha Celebration</h3>
                <p>
                Some home entrepreneurs and craftsmen working in poverty alleviation programs run by NGOs gather in the open air to display their various products to visitors and tourists.
                </p>
                {/* <a className=" primary-btn text-uppercase mt-5" href="">
                  Join Now
                </a> */}
              </div>
            </div>
          </div>
        </div>
       
       
        <div className="col-lg-6">
          <div className="event-item">
            <img src="img/13.jpg" alt="Image" height={400} />
            <div className="event-content">
              <div className="event-meta">
                <p>
                  <i className="fa fa-calendar-alt" />
                  01-Aug-2022
                </p>
                <p>
                  <i className="far fa-clock" />
                  8:00 - 10:00
                </p>
                <p>
                  <i className="fa fa-map-marker-alt" />
                  Aqaba
                </p>
              </div>
              <div className="event-text">
                <h3>Food from all over the world</h3>
                <p>
                Some home entrepreneurs and craftsmen working in poverty alleviation programs run by NGOs gather in the open air to display their various products to visitors and tourists.
                </p>
                {/* <a className="primary-btn text-uppercase mt-5" href="">
                  Join Now
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Event End */}
</>

    )
}

export default Event;

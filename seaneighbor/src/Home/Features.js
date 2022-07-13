import React from 'react';

function Features(){
    return(
        <>
         {/* Start other-issue Area */}
  <section className="other-issue-area section-gap" id='Features'>
    <div className="container">
      <div className="row d-flex justify-content-center">
        <div className="menu-content pb-70 col-lg-9">
          <div className="title text-center">
            <h1 className="mb-10">Why should your business join us</h1>
          </div>
        </div>
      </div>
      <div className="row text-center">
        <div className="col-lg-3 col-md-6">
          <div className="single-other-issue">
            <div className="thumb">
            <i class="fa-solid fa-people-roof" style={{fontSize: '100px', color:'#04091e'}}></i>
            </div>
            
              <h4>Family friendly</h4>
         
         
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="single-other-issue">
            <div className="thumb">
            <i class="fa-solid fa-money-bill-1" style={{fontSize: '100px', color:'#04091e'}}></i>
            </div>
              <h4>Nominal prices</h4>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="single-other-issue">
            <div className="thumb">
            <i class="fa-solid fa-location-dot" style={{fontSize: '100px', color:'#04091e'}}></i>
            </div>

              <h4>Very popular place</h4>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="single-other-issue">
            <div className="thumb">
            <i class="fa-solid fa-calendar" style={{fontSize: '100px', color:'#04091e'}}></i>
            </div>
              <h4>Constantly Activities and Events </h4>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* End other-issue Area */}
        </>
    )
}

export default Features;
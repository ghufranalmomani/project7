import React, { useState, useEffect } from 'react';



function Cal(){


    return(
        <div className="wrapper">
  <div className="inner mt-5">
    <form action="">
      <h3>Find a Room</h3>
      <div className="form-row flex-nowrap">
        <div className="form-wrapper">
          <label htmlFor="">Name *</label>
          <input type="text" className="form-control" placeholder="Your Name" />
        </div>
        <div className="form-wrapper">
          <label htmlFor="">Phone *</label>
          <input type="text" className="form-control" placeholder="Phone" />
        </div>
      </div>
      <div className="form-row flex-nowrap">
        <div className="form-wrapper">
          <label htmlFor="">Date From*</label>
         
          <input
            type="date"
            className="form-control "
            data-language="en"
            data-date-format="dd M yyyy"
            id="dp1"
          />
        </div>
        <div className="form-wrapper">
          <label htmlFor="">Date To *</label>
         
          <input
            type="date"
            className="form-control "
            data-language="en"
            data-date-format="dd M yyyy"
            id="dp2"
          />
        </div>
      </div>
      <div className="form-row last flex-nowrap">
     
      <label htmlFor="">Any note you want to tell us*</label>
      <br></br><textarea   className="form-control "></textarea>
     
        {/* <div className="form-wrapper">
          <label htmlFor="">Adults *</label>
          <select name="" id="" className="form-control">
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
            <option value={6}>6</option>
          </select>
          <i className="zmdi zmdi-chevron-down" />
        </div>
        <div className="form-wrapper">
          <label htmlFor="">Chidren *</label>
          <select name="" id="" className="form-control">
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
            <option value={6}>6</option>
          </select>
          <i className="zmdi zmdi-chevron-down" />
        </div> */}
      </div>
      <div className="checkbox">
        <label>
          <input type="checkbox" /> No one rejects, dislikes, or avoids pleasure
          itself.
          <span className="checkmark" />
        </label>
      </div>
      <button data-text="Book Room">
        <span>Book Room</span>
      </button>
    </form>
  </div>
</div>

    )
}


export default Cal;
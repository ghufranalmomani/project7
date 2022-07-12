import React, { useState, useEffect } from 'react';



function Cal(){
  const [data1, setdata1] = useState('');
  const [date2, setdate2] = useState('');
 

  const data1Handel = (e)=>{setdata1(e.target.value)}
  const date2Handel = (e)=>{setdate2(e.target.value)}
  var dt1 = new Date(data1);
  var dt2 = new Date(date2)
  const diffTime = Math.abs(dt2 - dt1);
const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
let price = 0;
if (diffDays < 7){
price = diffDays *5 
} else if (diffDays < 31){
  price = (diffDays) *3.57
}else if (diffDays > 30){
  price = (diffDays) *3
}
console.log(price);

  console.log(diffDays, 'date');
  // const d1= data1.setHours(0, 0, 0, 0);
  // let day= Date.parse(date2) - Date.parse(data1)
//  console.log(d1 , 'date');
    return(
        <div className="wrapper">
  <div className="inner " >
    <form action="">
      <h3>Find a Booth</h3>
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
            onChange={data1Handel}
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
            onChange={date2Handel}
          />
        </div>
      </div>
      <div className="form-row last ">
      <div className='row'>
      <label htmlFor="">Any note you want to tell us</label>
      </div>
      <br></br><textarea style={{height: '100px'}}  className="form-control " rows="4"></textarea>
     
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
        <p style={{margin:'0'}}>Total Price:</p>
        <p>{price}</p>
        {/* <label>
          <input type="checkbox" /> No one rejects, dislikes, or avoids pleasure
          itself.
          <span className="checkmark" />
        </label> */}
      </div>
      <button data-text="Book Room">
        <span>Book</span>
      </button>
    </form>
  </div>
</div>

    )
}


export default Cal;
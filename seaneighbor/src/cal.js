import React, { useState, useEffect } from 'react';
import axios from 'axios';


function Cal(){
  let ide= sessionStorage.getItem("user_id");

  if (ide == 0) {
    window.location= 'http://localhost:3000/login';
    alert('you need to log in to see this page');
  }
  const [info, setinfo] = useState([]);
  const [data1, setdata1] = useState('');
  const [date2, setdate2] = useState('');
  const [phone, setphone] = useState('');
  const [name, setname] = useState('');
  const [booth, setbooth] = useState('');
  const [place, setplace] = useState('');
  const [display, setdisplay] = useState(false);
 
  const phonehandle =(e) =>{setphone(e.target.value)}
  const nameehandle =(e) =>{setname(e.target.value)}
  const data1Handel = (e)=>{setdata1(e.target.value)}
  const date2Handel = (e)=>{setdate2(e.target.value)}
  const boothHandel = (e)=>{setbooth(e.target.value)}
  const placeHandel = (e)=>{setplace(e.target.value);setbooth('')}
  var dt1 = new Date(data1);
  // console.log(date2);
  var dt2 = new Date(date2);
  const diffTime = Math.abs(dt2 - dt1);
const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
let price = 0;
if (diffDays < 7)
{
  if(place == 'start'){
    price = diffDays *5
    // console.log(price); 
  }
  else if (place == 'middle') {
    price = diffDays *7 
  }
  else if (place == 'last') {
    price = diffDays *3.5 
  }
}
else if (diffDays < 31)
{
  if(place == 'start'){
    price = (diffDays) *3.57 
  }
  else if (place == 'middle') {
    price = diffDays *5.57 
  }
  else if (place == 'last') {
    price = diffDays *2 
  }
}
else if (diffDays > 30)
{
  if(place == 'start'){
    price = (diffDays) *3 
  }
  else if (place == 'middle') {
    price = diffDays *5 
  }
  else if (place == 'last') {
    price = diffDays *1.5 
  }
}

console.log(price);
const handleForm=()=>{
  axios.post('http://localhost/project7/seaneighbor/php/form.php?date='+data1+'&datee='+date2+'&price='+price+'&phone='+phone+'&name='+name);
  alert("booked succefully");
  window.location= '/cal';
}

  // console.log(diffDays, 'date');
  // const d1= data1.setHours(0, 0, 0, 0);
  // let day= Date.parse(date2) - Date.parse(data1)
//  console.log(d1 , 'date');


useEffect(()=>{
axios.get('http://localhost/project7/seaneighbor/php/connect.php')
.then((data)=>{let array= data.data ;setinfo(array)})
info.map(info => {
  var dateFrom = info.from_date;
  var dateTo = info.to_date;
  var dateCheck = data1;

  var d1 = dateFrom.split("/");
  var d2 = dateTo.split("/");
  var c = dateCheck.split("/");

  var from = new Date(d1[2], parseInt(d1[1])-1, d1[0]);  // -1 because months are from 0 to 11
  var to   = new Date(d2[2], parseInt(d2[1])-1, d2[0]);
  var check = new Date(c[2], parseInt(c[1])-1, c[0]);
  if (check >= from && check < to) {
      setdisplay(true)
    }
    else{
        setdisplay(false)
      }
    
    });
},[]);
// console.log(info);
// console.log(typeof(info));
return(
    <div className="wrapper">
  <div className="inner " >
  <form action="">
    <h3>Find a Booth</h3>
    <div className="form-row flex-nowrap">
      <div className="form-wrapper">
        <label htmlFor="">Name *</label>
        <input type="text" className="form-control" placeholder="Your Name" onChange={nameehandle}/>
      </div>
      <div className="form-wrapper">
        <label htmlFor="">Phone *</label>
        <input type="text" className="form-control" placeholder="Phone" onChange={phonehandle}/>
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
    <div className="form-row flex-nowrap">
      <div className="form-wrapper">
        <label htmlFor="">place</label>
        <select name="place" className="form-control form-select bg-white rounded form-control-md" id="place" onChange={placeHandel}>
             <option>...</option>
              <option value="start">Start</option>
              <option value="middle">Middle</option>
              <option value="last">Last</option>
          </select>
      </div>
      <div className="form-wrapper">
        <label htmlFor="">Booth</label>
        <select name="booth" className="form-control form-select bg-white rounded form-control-md" id="booth" onChange={boothHandel} value={booth}>
              <option style={{display: place == 'start' || place == 'middle' || place == 'last' ? 'none' :'block'}}>...</option>
              <option value="S-1" style={{display: place == 'start' ? 'block' :'none'}}>S-1</option>
              <option value="S-2" style={{display: place == 'start' ? 'block' :'none'}}>S-2</option>
              <option value="S-3" style={{display: place == 'start' ? 'block' :'none'}}>S-3</option>
              <option value="M-1" style={{display: place == 'middle' ? 'block' :'none'}}>M-1</option>
              <option value="M-2" style={{display: place == 'middle' ? 'block' :'none'}}>M-2</option>
              <option value="M-3" style={{display: place == 'middle' ? 'block' :'none'}}>M-3</option>
              <option value="L-1" style={{display: place == 'last' ? 'block' :'none'}}>L-1</option>
              <option value="L-2" style={{display: place == 'last' ? 'block' :'none'}}>L-2</option>
              <option value="L-3" style={{display: place == 'last' ? 'block' :'none'}}>L-3</option>
          </select>
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
    <div className="checkbox">
      <p style={{display:display? 'block' : 'none', color:'red'}}>not available</p>
    </div>
    <button data-text="Book Booth" type='submit' onClick={handleForm} className={display? 'bg-light' : 'bg-primay'}>
      <span>Book</span>
    </button>
  </form>
  </div>
  </div>
)
}


export default Cal;
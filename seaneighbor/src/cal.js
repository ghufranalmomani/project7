import React, { useState, useEffect } from 'react';
import axios from 'axios';


function Cal(){



  /////////////////
  let queryUrl = "https://api.openweathermap.org/data/2.5/onecall?";
let lat = "lat=29.5320522&";
let lon = "lon=35.0063209&";
let apiOptions = "units=metric&exclude=minutely,alerts&";
let apiKey = "appid=dbb76c5d98d5dbafcb94441c6a10236e";
let file = queryUrl + lat + lon + apiOptions + apiKey;

fetch(file)
.then((response) => response.json())
.then((data) => {
// Weather main data
let main = data.current.weather[0].main;
let description = data.current.weather[0].description;
let temp = Math.round(data.current.temp);
let pressure = data.current.pressure;
let humidity = data.current.humidity;
let name = "Aqaba";

document.getElementById("wrapper-description").innerHTML = description;
document.getElementById("wrapper-temp").innerHTML = temp + "°C";
document.getElementById("wrapper-pressure").innerHTML = pressure;
document.getElementById("wrapper-humidity").innerHTML = humidity + "°C";
document.getElementById("wrapper-name").innerHTML = name;

// Weather hourly data
let hourNow = data.hourly[0].temp;
let hour1 = data.hourly[1].temp;
let hour2 = data.hourly[2].temp;
let hour3 = data.hourly[3].temp;
let hour4 = data.hourly[4].temp;
let hour5 = data.hourly[5].temp;

document.getElementById("wrapper-hour-now").innerHTML = hourNow + "°";
document.getElementById("wrapper-hour1").innerHTML = hour1 + "°";
document.getElementById("wrapper-hour2").innerHTML = hour2 + "°";
document.getElementById("wrapper-hour3").innerHTML = hour3 + "°";
document.getElementById("wrapper-hour4").innerHTML = hour4 + "°";
document.getElementById("wrapper-hour5").innerHTML = hour5 + "°";

// Time
let timeNow = new Date().getHours();
let time1 = timeNow + 1;
let time2 = time1 + 1;
let time3 = time2 + 1;
let time4 = time3 + 1;
let time5 = time4 + 1;

document.getElementById("wrapper-time1").innerHTML = time1;
document.getElementById("wrapper-time2").innerHTML = time2;
document.getElementById("wrapper-time3").innerHTML = time3;
document.getElementById("wrapper-time4").innerHTML = time4;
document.getElementById("wrapper-time5").innerHTML = time5;

// Weather daily data
let tomorrowTemp = Math.round(data.daily[0].temp.day);
let dATTemp = Math.round(data.daily[1].temp.day);
let tomorrowMain = data.daily[0].weather[0].main;
let dATTempMain = data.daily[1].weather[0].main;

document.getElementById("wrapper-forecast-temp-today").innerHTML =
temp + "°";
document.getElementById("wrapper-forecast-temp-tomorrow").innerHTML =
tomorrowTemp + "°";
document.getElementById("wrapper-forecast-temp-dAT").innerHTML =
dATTemp + "°";

// Icons
let iconBaseUrl = "http://openweathermap.org/img/wn/";
let iconFormat = ".webp";

// Today
let iconCodeToday = data.current.weather[0].icon;
let iconFullyUrlToday = iconBaseUrl + iconCodeToday + iconFormat;
document.getElementById("wrapper-icon-today").src = iconFullyUrlToday;

// Tomorrow
let iconCodeTomorrow = data.daily[0].weather[0].icon;
let iconFullyUrlTomorrow = iconBaseUrl + iconCodeTomorrow + iconFormat;
document.getElementById(
"wrapper-icon-tomorrow"
).src = iconFullyUrlTomorrow;

// Day after tomorrow
let iconCodeDAT = data.daily[1].weather[0].icon;
let iconFullyUrlDAT = iconBaseUrl + iconCodeDAT + iconFormat;
document.getElementById("wrapper-icon-dAT").src = iconFullyUrlDAT;

// Icons hourly

// Hour now
let iconHourNow = data.hourly[0].weather[0].icon;
let iconFullyUrlHourNow = iconBaseUrl + iconHourNow + iconFormat;
document.getElementById(
"wrapper-icon-hour-now"
).src = iconFullyUrlHourNow;

// Hour1
let iconHour1 = data.hourly[1].weather[0].icon;
let iconFullyUrlHour1 = iconBaseUrl + iconHour1 + iconFormat;
document.getElementById("wrapper-icon-hour1").src = iconFullyUrlHour1;

// Hour2
let iconHour2 = data.hourly[2].weather[0].icon;
let iconFullyUrlHour2 = iconBaseUrl + iconHour2 + iconFormat;
document.getElementById("wrapper-icon-hour2").src = iconFullyUrlHour1;

// Hour3
let iconHour3 = data.hourly[3].weather[0].icon;
let iconFullyUrlHour3 = iconBaseUrl + iconHour3 + iconFormat;
document.getElementById("wrapper-icon-hour3").src = iconFullyUrlHour3;

// Hour4
let iconHour4 = data.hourly[4].weather[0].icon;
let iconFullyUrlHour4 = iconBaseUrl + iconHour4 + iconFormat;
document.getElementById("wrapper-icon-hour4").src = iconFullyUrlHour4;

// Hour5
let iconHour5 = data.hourly[5].weather[0].icon;
let iconFullyUrlHour5 = iconBaseUrl + iconHour5 + iconFormat;
document.getElementById("wrapper-icon-hour5").src = iconFullyUrlHour5;

// Backgrounds
switch (main) {
case "Snow":
document.getElementById("wrapper-bg").style.backgroundImage =
"url('https://mdbgo.io/ascensus/mdb-advanced/img/snow.gif')";
break;
case "Clouds":
document.getElementById("wrapper-bg").style.backgroundImage =
"url('https://mdbgo.io/ascensus/mdb-advanced/img/clouds.gif')";
break;
case "Fog":
document.getElementById("wrapper-bg").style.backgroundImage =
"url('https://mdbgo.io/ascensus/mdb-advanced/img/fog.gif')";
break;
case "Rain":
document.getElementById("wrapper-bg").style.backgroundImage =
"url('https://mdbgo.io/ascensus/mdb-advanced/img/rain.gif')";
break;
case "Clear":
document.getElementById("wrapper-bg").style.backgroundImage =
"url('https://mdbgo.io/ascensus/mdb-advanced/img/clear.gif')";
break;
case "Thunderstorm":
document.getElementById("wrapper-bg").style.backgroundImage =
"url('https://mdbgo.io/ascensus/mdb-advanced/img/thunderstorm.gif')";
break;
default:
document.getElementById("wrapper-bg").style.backgroundImage =
"url('https://mdbgo.io/ascensus/mdb-advanced/img/clear.gif')";
break;
}
});
  /////////////////////
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
else if (diffDays < 31 && diffDays > 7)
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
    <div className="wrapper  ">
  <div className="inner row container d-flex flex-wrap  " >
    <div className='col-lg-1 '></div>
    <div className='col-lg-6 '>
  <form action="" >
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
{/* /////////////////////////////////////////////////// */}
 
  <div className='col-lg-5 ' style={{marginTop:'180px'}}>

 
        <div
          id="wrapper-bg"
          className="card text-white bg-image shadow-4-strong"
          style={{ backgroundImage: 'url("img/clouds.gif")', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}
        >
          {/* Main current data */}
          <div className="card-header p-4 border-0">
            <div className="text-center mb-3">
              <p className="h2 mb-1" id="wrapper-name" />
              <p className="mb-1 text-black" id="wrapper-description " />
              <p className="display-1 mb-1 text-black" id="wrapper-temp" />
              <span className="text-black">
                Pressure: <span id="wrapper-pressure" />
              </span>
              <span className="mx-2 text-black">|</span>
              <span className="text-black">
                Humidity: <span id="wrapper-humidity" />
              </span>
            </div>
          </div>
          {/* Hourly forecast */}
          <div className="card-body p-4 border-top border-bottom mb-2">
            <div className="row text-center">
              <div className="col-2">
                <strong className="d-block mb-2">Now</strong>
                <img id="wrapper-icon-hour-now" src="" className="" alt="" />
                <strong className="d-block" id="wrapper-hour-now" />
              </div>
              <div className="col-2">
                <strong className="d-block mb-2" id="wrapper-time1" />
                <img id="wrapper-icon-hour1" src="" className="" alt="" />
                <strong className="d-block" id="wrapper-hour1" />
              </div>
              <div className="col-2">
                <strong className="d-block mb-2" id="wrapper-time2" />
                <img id="wrapper-icon-hour2" src="" className="" alt="" />
                <strong className="d-block" id="wrapper-hour2" />
              </div>
              <div className="col-2">
                <strong className="d-block mb-2" id="wrapper-time3" />
                <img id="wrapper-icon-hour3" src="" className="" alt="" />
                <strong className="d-block" id="wrapper-hour3" />
              </div>
              <div className="col-2">
                <strong className="d-block mb-2" id="wrapper-time4" />
                <img id="wrapper-icon-hour4" src="" className="" alt="" />
                <strong className="d-block" id="wrapper-hour4" />
              </div>
              <div className="col-2">
                <strong className="d-block mb-2" id="wrapper-time5" />
                <img id="wrapper-icon-hour5" src="" className="" alt="" />
                <strong className="d-block" id="wrapper-hour5" />
              </div>
            </div>
          </div>
          {/* Daily forecast */}
          <div className="card-body px-5">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <strong>Today</strong>
              </div>
              <div className="col-lg-2 text-center">
                <img id="wrapper-icon-today" src="" className="w-100" alt="" />
              </div>
              <div className="col-lg-4 text-end">
                <span id="wrapper-forecast-temp-today" />
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col-lg-6">
                <strong>Tomorrow</strong>
              </div>
              <div className="col-lg-2 text-center">
                <img
                  id="wrapper-icon-tomorrow"
                  src=""
                  className="w-100"
                  alt=""
                />
              </div>
              <div className="col-lg-4 text-end">
                <span id="wrapper-forecast-temp-tomorrow">28</span>
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col-lg-6">
                <strong>Day after tomorrow</strong>
              </div>
              <div className="col-lg-2 text-center">
                <img id="wrapper-icon-dAT" src="" className="w-100" alt="" />
              </div>
              <div className="col-lg-4 text-end">
                <span id="wrapper-forecast-temp-dAT">28</span>
              </div>
            </div>
          </div>
        </div>
      </div>
  


  </div>
  </div>

)
}


export default Cal;
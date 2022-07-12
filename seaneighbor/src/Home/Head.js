import React,{useState,useEffect} from 'react';
import axios from 'axios';



function Head(){

  let ide = sessionStorage.getItem("user_id"); //// raghad here where i call data
  console.log(ide, 'bahaa');


 

  //   console.log(ide);

  const [fromDate,setFromDate]=useState(null)
  const [toDate,setToDate]=useState(null)
  const [place,setPlace]=useState(null)
  const [table,setTable]=useState(null)
  const[data,setData]=useState([])
  const[dis,setDis]=useState('')
  const[lig,setLig]=useState('')


  const fromDateHandel=(e)=>{setFromDate(e.target.value)}
  const toDateHandel=(e)=>{setToDate(e.target.value)}
  const placehandel=(e)=>{setPlace(e.target.value)}
  const tablehandel=(e)=>{setTable(e.target.value)}

  useEffect(()=>{
      axios.get('http://localhost/project7/seaneighbor/php/connect.php')
      .then((data)=>{
          // const array = JSON.parse(data.data);
          // const array = toString(data);
          const arr= data.data;
          // const array= Object.values(arr);
          // console.log(arr[0]);
          console.log(arr);
          console.log(Array.isArray(arr));
          setData(arr);
          console.log(fromDate,place,table);
          arr.map(reserve =>{
            if (reserve.from_date === fromDate && reserve.place === place && reserve.tablee === table) {
              setDis('disabled');
              setLig('bg-light');
              
            }
            else{
              setDis('');
              setLig('');
            }
          })
          // console.log(data[0]);
      })
  },[])
  const submithandler=(event)=>{
    event.preventDefault();
   
    axios.post('http://localhost/project7/seaneighbor/php/connect.php?date='+fromDate+'datee='+toDate+'&place='+place+'&table='+table)
   
 
    
  }
    return(
        <>
         {/* start footer Area */}
   {/* start banner Area */}
   <section className="banner-area relative">
    <div className="overlay overlay-bg" />
    <div className="container">
      <div className="row fullscreen align-items-center justify-content-center text-center">
        <div className="col-lg-12 col-md-6 banner-left" style={{ marginTop:'130px' }}>
          <h4 className="text-white mt-5">Away to growth your small business</h4>
          <h1 className="text-white">Souk By The Sea</h1>
        
          <p className="text-white mb-5" style={{fontSize:'large'}}>
            If you are looking sh5ace to grow your small business, you may be very
            confused  about the place and price.<br></br> We provide that at nominal prices.
          </p>
          
          <a href="#" className="primary-btn text-uppercase ">
            Get Started
          </a>
        </div>
        <div className="col-lg-4 col-md-6 banner-right " style={{ marginTop:'130px' }} >
          <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item">
              {/* <a
                className="nav-link active"
                id="flight-tab"
                data-toggle="tab"
                href="#flight"
                role="tab"
                aria-controls="flight"
                aria-selected="true"
              >
               reserve now !!
              </a> */}
            </li>
            {/* <li className="nav-item">
              <a
                className="nav-link"
                id="hotel-tab"
                data-toggle="tab"
                href="#hotel"
                role="tab"
                aria-controls="hotel"
                aria-selected="false"
              >
                Weeks
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="holiday-tab"
                data-toggle="tab"
                href="#holiday"
                role="tab"
                aria-controls="holiday"
                aria-selected="false"
              >
                Months
              </a>
            </li> */}
          </ul>
          <div className="tab-content" id="myTabContent">
            <div
              className="tab-pane fade show active"
              id="flight"
              role="tabpanel"
              aria-labelledby="flight-tab"
            >
              {/* <form className="form-wrap">
                <div className="form-floating">
                  <input type="date" className="form-control border-0 bg-light" id="from" name="from" onChange={fromDateHandel}/>
                  <label for="from">Date</label>
                </div> */}
                {/* <div className="form-floating">
                  <input type="text" className="form-control border-0 bg-light" placeholder='your name' id="name" name="name" />
                  <label for="name">Name</label>
                </div>
                <div className="form-floating">
                  <input type="text" className="form-control border-0 bg-light" placeholder='your phone' id="phone" name="phone" />
                  <label for="phone">phone</label>
                </div>
                <div className="form-floating">
                  <input type="text" className="form-control border-0 bg-light" placeholder='your email' id="email" name="email" />
                  <label for="email">email</label>
                </div> */}
                
                {/* <div className="form-floating">
                  <select className="form-control form-select border-0 bg-light"  id="table" name="table" onChange={placehandel}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                </div>
                <div className="form-floating">
                  <select className="form-control form-select border-0 bg-light"  id="table" name="table" onChange={tablehandel}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                  </select>
                </div>
                <button type='submit' onClick={submithandler} className={`primary-btn text-uppercase ${lig}`}>
                Book Your Both
                </button>
              </form> */}
            </div>
           
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* End banner Area */}
      </>
    )
}
export default Head;
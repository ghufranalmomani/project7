import React,{useState,useEffect} from 'react';
import axios from 'axios';
// import 'font-awesome/css/font-awesome.min.css'; 




function Form() {
    const [fromDate,setFromDate]=useState(null)
    const [toDate,setToDate]=useState(null)
    const [place,setPlace]=useState(null)
    const [table,setTable]=useState(null)
    const[data,setData]=useState([])

    const fromDateHandel=(e)=>{setFromDate(e.target.value)}
    const ToDateHandel=(e)=>{setToDate(e.target.value)}
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
            // console.log(data[0]);
        })
    },[])
    const submithandler=()=>{axios.post('http://localhost/project7/seaneighbor/php/connect.php?date='+fromDate+'datee='+toDate+'&place='+place+'&table='+table)}
    // console.log(data[0]);
    return(
        <>
        <div>
            <label htmlFor="fdate">From Date</label>
            <input type="date" id='fdate' onChange={fromDateHandel}/>

            <label htmlFor="tdate">To Date</label>
            <input type="date" id='tdate' onChange={ToDateHandel}/>

            <label htmlFor="place">place</label>
            <select name="" id="place" onChange={placehandel}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>

            <label htmlFor="table">Table</label>
            <select name="" id="table" onChange={tablehandel}>
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

            <button type='submit' onClick={submithandler}>submit</button>
            </div>

            <div>
                {
                data.map((reserve,i) =>{
                    return(
                    <ul key={i}>
                        <li><a href=""></a>{reserve.from_date}</li>
                    </ul>)
                })
                }
            </div>
        </>
    )
}
export default Form;
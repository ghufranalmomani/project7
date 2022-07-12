import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import Form from './Components/form';
import {$,jQuery} from 'jquery';
import Forme from './Components/form';
import Services from './Components/sevices';
import Naver from './Naver';
import Footer from './Footer';
import Home from './Home/Home';
import About from './About';
import Contact from './Contact';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SimpleMap from './Components/map';
import Signup from './Signup/Signup';
import Reg from './Reg';
import Login from './Login';
import Cal from './cal';
import {useEffect} from 'react';

function App() {
 useEffect(()=>
  {

    if (sessionStorage.getItem("user_id")==null)
    sessionStorage.setItem("user_id", 0)}
  
)
return(
  <>
  
 
    <Naver user_id={sessionStorage.getItem("user_id")}/>
    {/* <Form /> */}
    <BrowserRouter><Routes>
    <Route path={'/about'} element={<About />} >About us</Route>
    <Route path={'/form'} element={<Forme />}>About us</Route>
    <Route path={'/:id'} element={<Home />}>Landing Page</Route>
    <Route path={'/'} element={<Home />}>Landing Page</Route>
    <Route path={'/contact'} element={<Contact />}>Contact us</Route>
    <Route path={'/map'} element={<SimpleMap />}>map</Route>
    <Route path={'/services'} element={<Services />}>map</Route>

    <Route path={'/Signup'} element={<Reg/>}>Signup</Route>
    <Route path={'/login'} element={<Login/>}>Login</Route>
    <Route path={'/cal'} element={<Cal/>}>Login</Route>
   

    </Routes></BrowserRouter>
    <Footer />

    

  </>
  );
}

export default App;

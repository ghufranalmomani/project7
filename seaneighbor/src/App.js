import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import Nav from './Components/Nav';
import {$,jQuery} from 'jquery';
import Form from './Components/form';
import Services from './Components/sevices';
import Naver from './Naver';
import Footer from './Footer';
import Home from './Home/Home';
import About from './About';
import Contact from './Contact';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SimpleMap from './Components/map';

function App() {

return(
  <>
    <Naver />
    {/* <Form /> */}
    <BrowserRouter><Routes>
    <Route path={'/about'} element={<About />}>About us</Route>
    <Route path={'/'} element={<Home />}>Landing Page</Route>
    <Route path={'/contact'} element={<Contact />}>Contacy us</Route>
    <Route path={'/map'} element={<SimpleMap />}>map</Route>
    <Route path={'/services'} element={<Services />}>map</Route>
    </Routes></BrowserRouter>
    <Footer />

    

  </>
  );
}

export default App;

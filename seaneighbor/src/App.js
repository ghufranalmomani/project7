import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import Nav from './Components/Nav';
import {$,jQuery} from 'jquery';
import Form from './Components/form';
import Naver from './Naver';
import Footer from './Footer';
import Home from './Home/Home';

function App() {

return(
  <>
    <Naver />
    <Home />
    {/* <Form /> */}
    <Footer />
    

  </>
  );
}

export default App;

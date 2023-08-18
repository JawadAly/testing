import React from 'react';
// bootstrap css import
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// importing App CSS
import './App.css';
// other comps imports
import {Route ,Routes} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Services from './Components/Services';
import About from './Components/About';
import Contact from './Components/Contact';
import Error from './Components/Error';


const App = () =>{
  return(
    <>
        <Navbar/>
        <Routes>
          <Route path='/' Component={Home}/>
          <Route path='/services' Component={Services}/>
          <Route path='/about' Component={About}/>
          <Route path='/contact' Component={Contact}/>
          <Route path='/*' Component={Error}/>
        </Routes>  
        <Footer/>
    </>
  );
}
export default App;
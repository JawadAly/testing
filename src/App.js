import React , {createContext ,useContext ,useState}  from 'react';
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
import Team from './Components/Team';
import Contact from './Components/Contact';
import Error from './Components/Error';

// dark/light theme context
const themeContext = createContext(undefined);

const App = () =>{
  // creating dark/light theme state
  const [myTheme,setMyTheme] = useState(true);
  const toggleTheme = () =>{
    setMyTheme(!myTheme);
  }
  return(
    <>
        <themeContext.Provider value={{myTheme,toggleTheme}}>
            <Navbar/>
            <Routes>
              <Route path='/' Component={Home}/>
              <Route path='/services' Component={Services}/>
              <Route path='/team' Component={Team}/>
              <Route path='/contact' Component={Contact}/>
              <Route path='/*' Component={Error}/>
            </Routes>  
            <Footer/>
        </themeContext.Provider>
    </>
  );
}
export default App;

// creating function to access themeContext in every subscribing component
export const UseTheme = () => useContext(themeContext);
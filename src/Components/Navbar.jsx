import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import WbSunnyRoundedIcon from '@mui/icons-material/WbSunnyRounded';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import { UseTheme } from '../App';


const Navbar = () =>{
    // js here
    const [togglerState,setTogglerState] = useState(false);
    // themeIcon State
    const [iconState,setIconState] = useState(true);
    // using themeContext coming from App component
    const {myTheme,toggleTheme} = UseTheme();
    const textColor = {
        color : myTheme ? 'black' : 'white'
    }
    
    return(
        <>
            <nav className='parentNav pt-1' style={{backgroundColor : myTheme ? 'whitesmoke' : '#110011'}}>
                <div className='container position-relative'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='w-100 d-flex justify-content-between align-items-baseline'>
                                <div className='logoHolder'>
                                    <NavLink to='/' className='logoText' style={textColor}>JS Dev.</NavLink>
                                </div>
                                <label 
                                    onClick={()=>{
                                        setTogglerState(!togglerState);
                                    }} 
                                    className='sideBarToggler d-flex align-items-end justify-content-center flex-column'
                                >
                                        <div className='upperLine' style={togglerState ? { width : '35px',transform : 'rotate(140deg)',marginTop : '10px'} : null}></div>
                                        <div className='middleLine' style={togglerState ? { display: 'none'} : null}></div>
                                        <div className='lowerLine' style={togglerState ? { width : '35px',transform : 'rotate(220deg)',marginTop : '-3px'} : null}></div>
                                </label>
                                <div 
                                className='themeSwitch'
                                onClick={()=>{
                                    setIconState(!iconState);
                                    toggleTheme();
                                }}
                                >
                                    <label className='themeIconLabel'>{iconState ? <WbSunnyRoundedIcon/> : <DarkModeRoundedIcon style={textColor}/>}</label>
                                </div>
                                <div className='sideBarHolder' style={togglerState ? {transform : 'translateX(0px)'} : null}>
                                    
                                    <ul className='d-flex justify-content-center liHolder'>
                                        <li>
                                            <NavLink style={textColor} activeclassname='active' className='nvLink' to='/'>Home</NavLink>
                                        </li>
                                        <li>
                                            <NavLink style={textColor} activeclassname='active' className='nvLink' to='/services'>Services</NavLink>
                                        </li>
                                        <li>
                                            <NavLink style={textColor} activeclassname='active' className='nvLink' to='/team'>Our Team</NavLink>
                                        </li>
                                        <li>
                                            <NavLink style={textColor} activeclassname='active' className='nvLink' to='/contact'>Contact</NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </div>                  
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}
export default Navbar; 
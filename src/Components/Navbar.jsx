import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () =>{
    // js here
    const [togglerState,setTogglerState] = useState(false);

    return(
        <>
            <nav className='parentNav pt-1'>
                <div className='container position-relative'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='w-100 d-flex justify-content-between align-items-baseline'>
                                <div className='logoHolder'>
                                    <NavLink to='/' className='logoText'>JS Dev.</NavLink>
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
                                <div className='sideBarHolder' style={togglerState ? {transform : 'translateX(0px)'} : null}>
                                    
                                    <ul className='d-flex justify-content-center liHolder'>
                                        <li>
                                            <NavLink activeclassname='active' className='nvLink' to='/'>Home</NavLink>
                                        </li>
                                        <li>
                                            <NavLink activeclassname='active' className='nvLink' to='/services'>Services</NavLink>
                                        </li>
                                        <li>
                                            <NavLink activeclassname='active' className='nvLink' to='/about'>About</NavLink>
                                        </li>
                                        <li>
                                            <NavLink activeclassname='active' className='nvLink' to='/contact'>Contact</NavLink>
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
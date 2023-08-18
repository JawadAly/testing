import React, { useState } from 'react';
import personImg from '../images/heroPerson.jpeg';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';

const Home = () =>{
    // js here
    const herSectionImgURL = 'https://cdn.dribbble.com/users/1912990/screenshots/6496981/web_developing.gif';
    const[firstCardNo,setFirstCardNo] = useState({
        cardNo1 : 0,
        cardNo1Desc : '',
    });
    const[secondCardNo,setSecondCardNo] = useState({
        cardNo2 : 0,
        cardNo2Desc : '',
    });
    const[thirdCardNo,setThirdCardNo] = useState({
        cardNo3 : 0,
        cardNo3Desc : ''
    });
    const changeNumbers = () =>{
        setTimeout(()=>{
            setFirstCardNo(()=>{
                return{
                    cardNo1 : 1,
                    cardNo1Desc : 'On Time Delivery'
                };
            });
        },1000);
        setTimeout(()=>{
            setSecondCardNo(()=>{
                return{
                    cardNo2 : 2,
                    cardNo2Desc : 'Life Time Support',
                };
            });
        },2000);
        setTimeout(()=>{
            setThirdCardNo(()=>{
                return{
                    cardNo3 : 3,
                    cardNo3Desc : 'Limitless Revisions'
                };
            });
        },3000);
    }
    // const backgroundStyle = {
    //     backgroundImage: `url(${personImg})`,
    //     objectFit : 'cover',
    //     objectPosition : 'center center',
    // };
    return(
        <>
            <section>
                <div className='container'>
                    <div className='heroSectionHolder'>
                        <div className='d-flex justify-content-around heroFlexer'>
                            <div className='heroSectionText my-auto'>
                                <h1 className='heroSectionHeading'>Tech <span style={{color:'#0066b2'}}>Innovation</span> </h1>
                                <h4 className='lowerText'>to <strong className='revolutionWord'>Revolutionize</strong> <br/> the world for wellbeing and good ❕</h4>
                            </div>
                            <div className='heroSectionImg pt-5 d-flex align-items-center justify-content-center'>
                                <img src={herSectionImgURL} className='img-fluid' alt='heroImg' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <hr/>
                <div className='container-fluid'>
                    <h3 className='qualitiesHeading py-4'>Our Qualities</h3>
                    <div className='bannerSection' onMouseOver={changeNumbers}>
                        <div className='row'>
                            <div className='col-md-4 col-sm-6 col-12'>
                                <div className='myCard p-2 mb-4 mx-auto'>
                                    <p className='cardNo'>{firstCardNo.cardNo1}</p>
                                    <h4 id='firstAnimation' className='cardInfo animate__animated animate__fadeIn'>{firstCardNo.cardNo1Desc}</h4>
                                </div>
                            </div>
                            <div className='col-md-4 col-sm-6 col-12'>
                                <div className='myCard p-2 mb-4 mx-auto'>
                                    <p className='cardNo'>{secondCardNo.cardNo2}</p>
                                    <h4 id='secondAnimation' className='cardInfo animate__animated animate__fadeIn'>{secondCardNo.cardNo2Desc}</h4>
                                </div>
                            </div>
                            <div className='col-md-4 col-sm-6 col-12'>
                                <div className='myCard p-2 mb-4 mx-auto'>
                                    <p className='cardNo'>{thirdCardNo.cardNo3}</p>
                                    <h4 id='thirdAnimation' className='cardInfo animate__animated animate__fadeIn'>{thirdCardNo.cardNo3Desc}</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className='backgroundSection'>
                <img src={personImg} className='img-fluid personPointerImg' alt='personImg'/>
                    <div className='container'>
                        <div className='ps-md-5 bgSectionTextHolder'>        
                            <div className='row'>
                                <div className='col-md-10 col-8'>
                                    <p className='waitingHeading'>So <span className='catchyText'>what</span> are you w<span className='catchyText'>8</span>ing for <br/> hurry <span className='catchyText'>up</span> ❕ </p> 
                                    <NavLink to='/services'> 
                                        <Button variant="contained" className='mt-1 availingBtn'>
                                            Avail Services
                                        </Button>
                                    </NavLink>
                                </div>
                                <div className='col-md-2 col-4'></div>
                            </div>
                        </div> 
                    </div>
            </section>  
        </>
    );
}
export default Home; 
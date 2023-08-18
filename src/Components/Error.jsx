import React from 'react';
import errorImg from '../images/vUmMyG7Nho.gif'
import Button from '@mui/material/Button';
import ReplyIcon from '@mui/icons-material/Reply';
import { NavLink } from 'react-router-dom';

const Error = () =>{
    return(
        <>
            <section>
                <div className='w-100 d-flex align-items-center justify-content-center'>
                    <img src={errorImg} alt='errorGiph' width='430' height='430'/>
                    <NavLink to='/'>
                        <Button type='submit' variant="contained" startIcon={<ReplyIcon/>}>
                                Back Home
                        </Button>
                    </NavLink>
                </div>
            </section>
        </>
    );
}
export default Error; 
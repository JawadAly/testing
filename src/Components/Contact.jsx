import React, { useState } from 'react';
// mui comps
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import DoneIcon from '@mui/icons-material/Done';


const Contact = () =>{
    // js here
    // fileds state var obj
    const[info ,setInfo] = useState({
        userName : '',
        userPhone : '',
        userEmail : '',
        userMessage : ''
    });
    const fetchInfo = (event) =>{
        const fieldName = event.target.name;
        const fieldValue = event.target.value;
        // console.log(fieldName);
        // console.log(fieldValue);
        // updating fields state constantly
        setInfo((previousVal)=>{
            return{
                ...previousVal,
                [fieldName] : fieldValue
            };
        });
    }
    const getFormData = (e) =>{
        e.preventDefault();
        const userRes = prompt('Your information has been submitted successfully ! \n Press "Y" to view it or else Press "N" ');
        // if(userRes === 'y' || userRes === 'Y'){
            // alert(`Name : ${info.userName} \n 
            // Phone Number : ${info.userPhone} \n
            // Email : ${info.userEmail} \n
            // Message : ${info.userMessage} \n
            // `);
        // }
        // else{
        //     alert('Thanks for connecting with us have a nice day!');
        // }
        // by using ternary operator
        (userRes === 'y' || userRes === 'Y') ? alert(`Name : ${info.userName}\nPhone Number : ${info.userPhone}\nEmail : ${info.userEmail}\nMessage : ${info.userMessage} \n`) : alert('Thanks for connecting with us have a nice day!');
    }
    return(
        <>
            <section className='contactSection'>
                {/* <h1>Contact page here !</h1> */}
                <div className='container'>
                    <h3 className='contactHeading py-4'>Get In Touch !</h3>
                    <div className='formHolder mt-3'>
                        <form onSubmit={getFormData}>
                            <div className='row'>
                                <div className='col-md-5 col-sm-10 col-12 mx-auto'>
                                    <TextField name='userName' value={info.userName} onChange={fetchInfo} required fullWidth size='small' className='mb-4' id="outlined-basic" label="Your Name" variant="outlined" />
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-md-5 col-sm-10 col-12 mx-auto'>
                                    <TextField name='userPhone' value={info.userPhone} onChange={fetchInfo} required fullWidth size='small' className='mb-4' id="outlined-basic" label="Your Phone" variant="outlined" />
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-md-5 col-sm-10 col-12 mx-auto'>
                                    <TextField name='userEmail' type='email' value={info.userEmail} onChange={fetchInfo} required fullWidth size='small' className='mb-4' id="outlined-basic" label="Your Email" variant="outlined" />
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-md-5 col-sm-10 col-12 mx-auto'>
                                <textarea name='userMessage' value={info.userMessage} onChange={fetchInfo} required  className='form-control contactTextArea mb-3' placeholder='Your text here'/>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-md-5 col-sm-10 col-12 mx-auto'>
                                    <div className='w-100'>
                                    <Button type='submit' variant="contained" endIcon={<DoneIcon/>}>
                                        Submit
                                    </Button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
}
export default Contact; 
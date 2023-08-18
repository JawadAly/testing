import React from 'react';

const Footer = () =>{
    // js here
    const currentDate = new Date().getFullYear();
    
    return(
        <>
            <footer className='myFooter'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className= 'col-12'>
                            <p className='text-center pt-2'>CopyRight © {currentDate} Js Dev. All Rights Reserved | Terms and Conditions applied.</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
export default Footer;
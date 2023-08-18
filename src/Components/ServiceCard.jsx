import React from 'react';
import Button from '@mui/material/Button';

const ServiceCard = (props) =>{
    return(
        <>
            <div className='col-sm-6 col-md-4 col-12'>
                <div class="card mb-4 mx-auto serviceCard" style={{width:'18rem'}}>
                    <img src={props.cardImgUrl} height='180px' class="card-img-top" alt="serviceImg"/>
                    <div class="card-body">
                        <h5 class="card-title">{props.cardTitle}</h5>
                        <p class="card-text">{props.cardDesc}</p>
                        <Button variant="contained">
                            Avail Service
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
}
export default ServiceCard;
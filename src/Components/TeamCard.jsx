import React from 'react';

const TeamCard = (props) =>{
    return(
        <>
            <div className='col-md-4 col-sm-6 col-12'>
                <div className='teamCard p-2 mx-auto mb-5 d-flex align-items-center justify-content-center flex-column'>
                    <div className='personImgHolder d-flex align-items-center justify-content-center'>
                        <img src={props.personImg} alt='teamSoldierImg' className='img-fluid'/>
                    </div>
                    <h4 className='teamPersonName my-3'>{props.personFullName}</h4>
                <div className='cardCover py-4 ps-3 text-white'>
                    <p>Name : {props.personFullName}</p>
                    <p>Age : {props.personAge}</p>
                    <p className='text-capitalize'>Gender : {props.personGender}</p>
                    <p>Phone : {props.personPhone}</p>
                    <p>Email : {props.personEmail}</p>
                </div>
                </div>
            </div>
        </>
    );
}
export default TeamCard;
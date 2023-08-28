import React, { useEffect, useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Input from '@mui/material/Input';
import Preloader from './Preloader';
import TeamCard from './TeamCard';

const Error = () =>{
    return <p className='text-danger'>Please type in a number</p>;
}

const Team = () =>{
    // js here
    const [teamNumber,setTeamNumber] = useState({
        value : "",
        isTouched : false
    });
    const [finalNumber,setFinalNumber] = useState(4);
    
    const submitNumber = () =>{
        return !isNaN(teamNumber.value) && teamNumber.value > 0  ? setFinalNumber(teamNumber.value) : null;
    }
    // now fetching persons data according to user quantity from RandomAPI
    const [apiData,setAPIData] = useState([]);

    const fetchAPIData = async () =>{
        try{
            const data = await fetch(`https://randomuser.me/api/?results=${finalNumber}`);
            const jsonData = data.json();
            return jsonData;
        }
        catch(error){
            alert(`Connection to API failed due to an unexpected Error : ${error}`);
        }   
    }


    useEffect(()=>{
        fetchAPIData().then((finalData)=>{
            // console.log(finalData);
            setAPIData(finalData);
            
        });
    },[finalNumber]);
    console.log(apiData);
    
    return(
        <>
            <section className=''>
                <div className='container'>
                    <h3 className='teamHeading py-4'>
                        Our Dedicated Formation!
                    </h3>
                    <h5 className='teamQuestion mb-3'>Q: How many of our smart and dedicated soldiers you want to review ?</h5>
                    <div className='row'>
                        <div className='col-md-4 col-sm-8 col-10'>
                            <Input
                               onChange={(event)=>{
                                const incomingVal = event.target.value;
                                setTeamNumber(()=>{
                                    return{
                                        value : incomingVal,
                                        isTouched : incomingVal.length > 0 ? true : false
                                    };
                                });
                               }}
                               value={teamNumber.value}
                                id="input-with-icon-adornment"
                                endAdornment={
                                <InputAdornment position="start">
                                    <IconButton aria-label="delete" onClick={submitNumber}>
                                        <SearchIcon/>
                                    </IconButton>
                                </InputAdornment>
                                }
                            />
                            {isNaN(teamNumber.value) && teamNumber.isTouched ? <Error/> : null}
                        </div>
                    </div>
                    <div className='teamHolder w-100 py-5 '>
                        <div className='row'>
                            {
                                apiData && Object.keys(apiData).length > 0 ? apiData.results.map((value)=>{ 
                                    {/* return <h2>{value.name.title}{value.name.first}</h2>; */}
                                    return <TeamCard personFullName={`${value.name.title} ${value.name.first} ${value.name.last}`} personImg={value.picture.large} personAge={value.dob.age} personGender={value.gender} personEmail={value.email} personPhone={value.phone}/>;
                            }) : <Preloader/>
                            }
                        </div>
                    </div>
                    


                </div>
            </section>
        </>
    );
}
export default Team; 
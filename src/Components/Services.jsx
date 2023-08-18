import React from 'react';
// other comps
import ServiceCard from './ServiceCard';
import servicesData from './serviceData'

const Services = () =>{
    return(
        <>
            <section>
                <div className='container-fluid'>
                    <h3 className='servicesHeading pt-4 pb-5'>Pleased To Serve With Excellence</h3>
                    <div className='row serviceFlexer'> 
                        {servicesData.map((value,index)=>{
                            return <ServiceCard key={index} cardImgUrl={value.serviceImg} cardTitle={value.serviceTitle} cardDesc={value.serviceDesc}/>;
                        })}
                    </div>
                </div>
            </section>
        </>
    );
}
export default Services; 
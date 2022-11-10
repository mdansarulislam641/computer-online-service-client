import React, { useEffect, useState } from 'react';
import ServiceCart from '../../Shared/ServiceCard/ServiceCart';

const AllServices = () => {
    const [services, setServices] = useState([])
    useEffect(()=>{
        fetch('https://assignment-server-omega.vercel.app/services/allServices')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    return (
       <div className='my-10 max-w-[1300px] mx-auto'>
        <div className='text-center m-10'>
            <h2 className='lg:text-5xl md:text-3xl text-2xl font-extrabold font-mono'>Our All Service</h2>
        </div>
         <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1'>
        {
         services.map(service=><ServiceCart
             key={service._id}
             service={service}
         ></ServiceCart>)
        }
     </div>
       </div>
    );
};

export default AllServices;
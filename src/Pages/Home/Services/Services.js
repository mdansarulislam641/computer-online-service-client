import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCart from '../../../Shared/ServiceCard/ServiceCart';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/service')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    return (
       <div className='max-w-[1300px] mx-auto '>
        <div className=' lg:mt-40 md:20 mb-10 text-center'>
            <h2 className='lg:text-5xl md:text-3xl text-2xl font-extrabold font-mono'>Our Online Services</h2>
            <p className='text=xl'>What do i provide and Some Details Our Services</p>
        </div>
         <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1'>
           {
            services.map(service=><ServiceCart
                key={service._id}
                service={service}
            ></ServiceCart>)
           }
        </div>
        <div className='text-center m-10 '>
            <Link to='/services'>
            <button className='btn btn-primary lg:text-3xl md:text-2xl text-xl font-mono font-extrabold'>See All</button>
            </Link>
        </div>
       </div>
    );
};

export default Services;
import React, { useEffect, useState } from 'react';
import useTitle from '../../hooks/useTitle';
import ServiceCart from '../../Shared/ServiceCard/ServiceCart';

const AllServices = () => {
    useTitle('services')
    const [loading, setLoading] = useState(true);
    const [services, setServices] = useState([])
    useEffect(()=>{
        fetch('https://assignment-server-omega.vercel.app/services/allServices')
        .then(res=>res.json())
        .then(data=>{
            setServices(data)
            setLoading(false)
        })
    },[])
    if(loading){
        <div className='flex items-center justify-center h-[100vh]'>
            <button className='btn btn-primary mx-10'>loading.........</button>
        </div>
    }
    return (
       <div className='my-10 max-w-[1300px] mx-auto'>
        <div className='text-center m-10'>
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
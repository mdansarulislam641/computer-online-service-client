import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './Details.css';
const ServiceDetails = () => {
    const {id} = useParams();
    const [details, setDetails] = useState({})
    const {img, name, price, description} = details ;
    useEffect(()=>{
        fetch(`http://localhost:5000/service/${id}`)
        .then(res=>res.json())
        .then(data=>setDetails(data))
    },[id])
    console.log(details)


    return (
      <div className='bg-black py-10 '>
        <div className='text-center lg:text-5xl md:text-3xl text-2xl font-extrabold font-mono text-white my-5 mx-2'>
            <h4>WellCome {name} Details Page</h4>
        </div>
         <div className='details-container bg-base-200  max-w-[1300px] mx-auto'>
            <div className='w-full'>
                <img className='w-full h-full object-fill' src={img} alt="" />
            </div>
            <div className='py-10 px-5 flex flex-col justify-center'>
                <h2 className='lg:text-4xl md:text-3xl text-2xl font-extrabold font-mono'>{name}</h2>
                <h3 className='text-2xl font-bold'>Service Fee: {price}</h3>
                <p className='text-xl py-4'>{description}</p>
                <div>
                    <Link to='/review'>
                        <button className='btn btn-primary'>Review This Service</button>
                    </Link>
                </div>
            </div>
         </div>
      </div>
    );
};

export default ServiceDetails;
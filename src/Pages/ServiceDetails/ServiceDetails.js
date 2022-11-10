import React, { useContext, useEffect, useState } from 'react';
import {  useNavigate, useParams } from 'react-router-dom';

import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';


import './Details.css';
const ServiceDetails = () => {
    useTitle('servicedetails')
    const {user,loading} = useContext(AuthContext)
    const {id} = useParams();
    const [details, setDetails] = useState({})
    const {img, name, price, description ,_id} = details ;
  
    useEffect(()=>{
        fetch(`https://assignment-server-omega.vercel.app/service/${id}`)
        .then(res=>res.json())
        .then(data=>setDetails(data))
    },[id])

    const navigate = useNavigate();
    // review all user 
    const [reviews, setReviews] = useState([])
    useEffect(()=>{
        fetch(`https://assignment-server-omega.vercel.app/review/${_id}`)
        .then(res=>res.json())
        .then(data=>setReviews(data))
    },[_id])

    if(loading){
        return <div>Loading......</div>
    }
    const handleUserReview =(id)=>{
        if(!user){
            return navigate('/unknownUser')
        }
        else{
            return navigate(`/userReview/${id}`)
        }
    }

  
    return (
      <div className=' py-10 bg-gray-500'>
        <div className='text-center lg:text-5xl md:text-3xl  text-xl font-extrabold font-mono text-white my-5 mx-2'>
            <h4>WellCome {name} Details Page</h4>
        </div>
         <div className='max-w-[1300px] mx-auto'>
         <section>
         <div className='details-container bg-base-200 w-full mx-auto'>
            <div className='w-full'>
                <img className='w-full h-full  object-fill' src={img} alt="" />
            </div>
            <div className='py-10 px-5 flex flex-col justify-center'>
                <h2 className='lg:text-4xl md:text-3xl text-2xl font-extrabold font-mono'>{name}</h2>
                <h3 className='text-2xl font-bold'>Service Fee: {price}</h3>
                <p className='text-xl py-4'>{description}</p>
            </div>
         </div>
         </section>

        <section className='bg-gray-400'>
            <div className='pt-10 md:mx-auto'>
                <h2 onClick={()=>handleUserReview(_id)} className='lg:text-3xl text-2xl ml-9 lg:ml-5 btn btn-primary'>Review this service</h2>
            </div>
            <div className='mt-10'>
                <h2 className='lg:text-4xl text-xl md:2xl text-center font-extrabold font-mono pt-5 text-white'>Users Reviews {name}</h2>
            </div>

       <div>
       { reviews.length === 0 ? <p className='text-center mt-5 text-4xl text-red-700 font-extrabold font-mono'>No Review Yet</p>: <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mx-5 rounded-lg shadow-md shadow-white'>
                {
                    reviews.map(review=><div key={review._id} className='rounded-lg border-2 py-5 bg-gray-700 text-white my-5 shadow-md shadow-white'> 
                        <div className='text-center'>
                            <img className='w-[50px] rounded-full mx-auto' src={review.image} alt="" />
                            <p>Name: {review.name}</p>
                            <h2>Email: {review.email}</h2>
                            <p className=''><span className='font-bold'>Comment</span>: {review.message}</p>
                            <h3>Rating: {review?.rating}</h3>
                        </div>

                    </div>)
                }
            </div>}
       </div>
        </section>
         </div>
      </div>
    );
};

export default ServiceDetails;
import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import './Details.css';
const ServiceDetails = () => {
    const {user} = useContext(AuthContext)
    const {id} = useParams();
    const [details, setDetails] = useState({})
    const {img, name, price, description} = details ;
    useEffect(()=>{
        fetch(`http://localhost:5000/service/${id}`)
        .then(res=>res.json())
        .then(data=>setDetails(data))
    },[id])

    const handleReview = event =>{
        event.preventDefault()
        const name = event.target.name.value;
        const rating = event.target.rating.value ;
        const message = event.target.yourMessage.value ;
        console.log(name,rating,message)

    }

    return (
      <div className=' py-10 bg-gray-500'>
        <div className='text-center lg:text-5xl md:text-3xl  text-2xl font-extrabold font-mono text-white my-5 mx-2'>
            <h4>WellCome {name} Details Page</h4>
        </div>
         <div className='max-w-[1300px] mx-auto'>
         <section>
         <div className='details-container bg-base-200 w-full mx-auto'>
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
         </section>
         {/* review section */}
         <section className='my-24'>
            <h1 className='text-center text-white font-extrabold font-mono lg:text-4xl text-2xl'>Review This Service</h1>
            <div className='text-center mx-5'>
                <form onSubmit={handleReview}>
                   <div className='lg:flex gap-5 items-center justify-center'>
                   <div className='border-2  lg:w-1/2 w-full my-3  rounded-lg'>
                   <input className='w-full py-2 bg-gray-200 text-2xl px-5' type="text" name='name' placeholder='Your Name' id="" required />
                    </div>
                    <div className='border-2 lg:w-1/2 w-full rounded-lg'>
                    <input className='w-full py-2 bg-gray-200 text-2xl px-5' type="text" name='rating' placeholder='Your Ratings' id="" />
                    </div>
                   </div>
                    <div className='my-2'>
                    <textarea className='w-full my-2 py-2 text-red-900 bg-gray-200 text-2xl px-5 resize-none' name="yourMessage" placeholder='Your Message Here....' id="" cols="30" rows="5" required></textarea>
                    </div>
                    <div className='text-center my-5'>
                        <button className="btn btn-primary px-10" type='submit'>Submit Review</button>
                    </div>
                </form>
            </div>
         </section>
         </div>
      </div>
    );
};

export default ServiceDetails;
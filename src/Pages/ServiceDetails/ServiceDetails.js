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
    console.log(details)

    const handleReview = event =>{
        event.preventDefault()
        const name = event.target.name.value;
        const rating = event.target.rating.value ;
        const message = event.target.yourMessage.value ;
        console.log(name,rating,message)

    }

    return (
      <div className=' py-10 '>
        <div className='text-center lg:text-5xl md:text-3xl text-2xl font-extrabold font-mono text-white my-5 mx-2'>
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
         <section>
            <h1>Review This Service</h1>
            <div>
                <form onSubmit={handleReview}>
                    <div>
                   <input type="text" name='name' placeholder='Your Name' id="" required />
                    </div>
                    <div>
                    <input type="text" name='rating' placeholder='Your Ratings' id="" />
                    </div>
                    <div>
                    <textarea name="yourMessage" id="" cols="30" rows="5" required></textarea>
                    </div>
                    <div>
                        <button className="btn btn-primary" type='submit'>Submit Review</button>
                    </div>
                </form>
            </div>
         </section>
         </div>
      </div>
    );
};

export default ServiceDetails;
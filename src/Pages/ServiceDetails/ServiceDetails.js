import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';


import './Details.css';
const ServiceDetails = () => {
    const {user} = useContext(AuthContext)
    const {id} = useParams();
    const [details, setDetails] = useState({})
    const {img, name, price, description ,_id} = details ;
    useEffect(()=>{
        fetch(`http://localhost:5000/service/${id}`)
        .then(res=>res.json())
        .then(data=>setDetails(data))
    },[id])
    const navigate = useNavigate();
    console.log(details)
    // review all user 
    const [reviews, setReviews] = useState([])
    useEffect(()=>{
        fetch(`http://localhost:5000/review/${_id}`)
        .then(res=>res.json())
        .then(data=>setReviews(data))
    },[_id])



    const handleReview = event =>{
        event.preventDefault()
        const userName = event.target.name.value;
        const rating = event.target.rating.value ;
        const message = event.target.yourMessage.value ;
        const userReview = {
            name:userName,
            email:user?.email || "not a email",
            image:user?.photoURL,
            service_id:_id,
            rating,
            message,
            service_title:name
        }


        if(!user){
            return navigate('/unknownUser')
        
        }

      else{
        fetch('http://localhost:5000/review',{
            method:"POST",
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify(userReview)
        })
        .then(res=>res.json())
        .then(data=>console.log(data))
      }

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
            </div>
         </div>
         </section>

        <section className='bg-gray-400'>
            <div className='mt-32'>
                <h2 className='text-4xl text-center font-extrabold font-mono pt-5 text-white'>All User Reviews This Service</h2>
            </div>
        <div className="overflow-x-auto max-w-[1300px] mx-auto my-10">
  <table className="table w-full">
  
    <thead>
      <tr className='text-center'>
        
        <th>Name</th>
        <th>User Comments</th>
        <th>Ratings</th>
      
      </tr>
    </thead>
        <tbody className='text-center'>
                {
                    reviews?.map(review=> { 
                        return (
                            <tr key={review._id}>
                            <td>
                              <div className="flex items-center space-x-3">
                                <div className="avatar">
                                  <div className="mask mask-squircle w-12 h-12">
                                    <img src={review.image} alt="Avatar Tailwind CSS Component" />
                                  </div>
                                </div>
                                <div>
                                  <div className="font-bold">{review.name}</div>
                                  <div className="text-sm opacity-50">{review.email}</div>
                                </div>
                              </div>
                            </td>
                           
                            <td>
                             {review.message}
                            </td>
                            <td>{review.rating}</td>
                          
                            
                          </tr>
                        )
                    })
                }
        </tbody>
  
  </table>
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
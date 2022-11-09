import { async } from '@firebase/util';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateReview = () => {
    const {id} = useParams();
    const [review, setReview] = useState({})
    const [refresh, setRefresh] = useState(false)
    const navigate = useNavigate()
    useEffect(()=>{
        fetch(`http://localhost:5000/reviewUpdate/${id}`)
        .then(res=>res.json())
        .then(data => setReview(data))
    },[id])

    const handleUpdateReview =async event =>{
        event.preventDefault()
        const message = event.target.message.value ;
        const rating = event.target.rating.value ;
        console.log(message, rating)
        const updateValue = {
            message,
            rating
        }
        console.log(updateValue)
        fetch(`http://localhost:5000/reviews/${id}`,{
            method:"PATCH",
            headers:{
                "content-type":"application/json"
            },
            body: JSON.stringify(updateValue)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.matchedCount){
                toast.success("successfully updated review")
                navigate('/review')
                setRefresh(!refresh)
            }
        })
        
    }
 
    return (
        <div className='pb-20  bg-base-200'>
            <h1 className='text-center py-10 text-4xl'>Update Your Review</h1>
           <div className='text-center mb-5'>
           <h3>Your Service Review name</h3>
            <h4 className='text-2xl'>{review.service_title}</h4>
           </div>
            <div  className='text-center'>
                <form  onSubmit={handleUpdateReview} >
                   <div className='mx-5'>
                    <p className='text-xl'>Your Message</p>
                   <textarea className='border-2 p-5 resize-none lg:w-1/2 w-full '  defaultValue={review.message} name="message" placeholder='your message' id="" cols="30" rows="5"></textarea>
                   </div>
                    <div className='my-3 mb-10 mx-5'>
                    <p className='text-xl'>Your Rating</p>
                    <input className='border-2 p-3 lg:w-1/2 w-full' type="text" defaultValue={review.rating} placeholder='your rating number only' name="rating" />
                    </div>
                    <div>
                        <button className='btn btn-primary mx-10'>update review</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateReview;
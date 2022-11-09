import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import ReviewList from './ReviewList';

const ReviewUser = () => {
    const {user} = useContext(AuthContext)
    const [reviews, setReviews] = useState([])
    useEffect(()=>{
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
        .then(res=>res.json())
        .then(data=>setReviews(data))
    },[user?.email])


    const handleDeleteReview = (id) =>{
        const proceed = window.confirm("are you sure delete this review")
        if(proceed)
        {
            fetch(`http://localhost:5000/review/${id}`,{
                method:"DELETE",
            })
            .then(res=>res.json())
            .then(data=>{
                if(data.deletedCount){
                    toast.success('successfully deleted review')
                    const remaining = reviews.filter(n=> n._id !==id)
                    setReviews(remaining)
                }
             }
                )
        }
       
    }

    return (
<div className="overflow-x-auto max-w-[1300px] mx-auto my-20">
  <table className="table w-full">
  
    <thead>
      <tr className='text-center'>
        
        <th>Name</th>
        <th>service name</th>
        <th>User Comments</th>
        <th>Ratings</th>
        <th className='pl-5'>Operation</th>
      
      </tr>
    </thead>
        <tbody className='text-center'>
                {
                    reviews?.map(review=><ReviewList
                        key={review._id}
                        review={review}
                        handleDeleteReview={handleDeleteReview}
                    ></ReviewList>)
                }
        </tbody>
  
  </table>
</div>

    );
};

export default ReviewUser;
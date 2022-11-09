import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import ReviewList from './ReviewList';

const ReviewUser = () => {
    const {user} = useContext(AuthContext)
    const [reviews, setReviews] = useState([])
    const navigate = useNavigate();
    useEffect(()=>{
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
        .then(res=>res.json())
        .then(data=>setReviews(data))
    },[user?.email])

    // update user review 
    const handleUpdateReview = id =>{
        navigate(`/updateReview/${id}`)
    }


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
      <tr >
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
                        handleUpdateReview={handleUpdateReview}
                        handleDeleteReview={handleDeleteReview}
                    ></ReviewList>)
                }
        </tbody>
  
  </table>
</div>

    );
};

export default ReviewUser;
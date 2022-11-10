import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';
import ReviewList from './ReviewList';

const ReviewUser = () => {
    useTitle('reviewuser')
    const {user,signOutUser} = useContext(AuthContext)
    const [reviews, setReviews] = useState([])
    const navigate = useNavigate();
    useEffect(()=>{
     
        fetch(`https://assignment-server-omega.vercel.app/reviews?email=${user?.email}`,{
            headers:{
                authorization:`Bearer ${JSON.parse(localStorage.getItem('online-service'))}`
            }
        })
        .then(res=>{
            if(res.status === 401 || res.status ===403){
               return signOutUser();
            }
            return res.json()
        })
        .then(data=>{
            console.log(data)
            setReviews(data)
        })
    },[user?.email,signOutUser])

    // update user review 
    const handleUpdateReview = id =>{
        navigate(`/updateReview/${id}`)
    }


    const handleDeleteReview = (id) =>{
        const proceed = window.confirm("are you sure delete this review")
        if(proceed)
        {
            fetch(`https://assignment-server-omega.vercel.app/review/${id}`,{
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
<div className="overflow-x-auto max-w-[1300px] mx-auto my-20 min-h-[100vh]">
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
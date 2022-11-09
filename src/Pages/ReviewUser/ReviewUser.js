import React, { useEffect, useState } from 'react';
import ReviewList from './ReviewList';

const ReviewUser = () => {
    const [reviews, setReviews] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/review')
        .then(res=>res.json())
        .then(data=>setReviews(data))
    },[])
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
                    ></ReviewList>)
                }
        </tbody>
  
  </table>
</div>

    );
};

export default ReviewUser;
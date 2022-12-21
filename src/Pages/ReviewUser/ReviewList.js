import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import Loading from '../../Shared/Loading';


const ReviewList = ({review,handleUpdateReview,handleDeleteReview}) => {
  const {loading} = useContext(AuthContext)
    // console.log(review)
    const {name,_id, image,service_title, message, rating, email} = review ;
    if(loading){
        return <Loading></Loading>
    }
    return (
        <tr>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={image} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{name}</div>
              <div className="text-sm opacity-50">{email}</div>
            </div>
          </div>
        </td>
        <td>
         {service_title}
        </td>
        <td>
         {message}
        </td>
        <td>{rating}</td>
        <th>
           <button onClick={()=>handleUpdateReview(_id)} className='border-2 px-5 bg-[#1C315E] text-white rounded-lg mr-2'> Edit</button>
            <button onClick={()=>handleDeleteReview(_id)} className='border-2 px-2 bg-[#1C315E] text-white rounded-lg'>Delete</button>
        </th>
        
      </tr>
    
    );
};

export default ReviewList;
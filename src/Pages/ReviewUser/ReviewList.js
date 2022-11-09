import React from 'react';

const ReviewList = ({review}) => {
    const handleDeleteReview = () =>{
        fetch('http://localhost:5000/review',{
            method:"DELETE",
        })
        .then(res=>res.json())
        .then(data=>console.log(data))
    }

    console.log(review)
    const {name, image,service_title, message, rating, email} = review ;
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
           <button className='border-2 px-5 bg-gray-500 text-white rounded-lg mr-2'> Edit</button>
            <button onClick={handleDeleteReview} className='border-2 px-2 bg-gray-500 text-white rounded-lg'>Delete</button>
        </th>
        
      </tr>
    
    );
};

export default ReviewList;
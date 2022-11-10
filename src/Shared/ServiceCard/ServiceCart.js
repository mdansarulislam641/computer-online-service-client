import React, { useContext } from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import 'react-photo-view/dist/react-photo-view.css';
const ServiceCart = ({service}) => {
  const {loading} = useContext(AuthContext)
  if(loading){
    return <>Loading....</>
  }
    const {_id,name,img, price, description} = service ;
    return (
        <div className="card my-5 card-compact w-50 mx-5 bg-base-100 shadow-xl">
        <figure>
          <PhotoProvider>

        <PhotoView src={img}>
        <img className='h-[250px] w-full' src={img} style={{ objectFit: 'cover' }} alt="" />
        </PhotoView>
          </PhotoProvider>
         </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl font-bold font-mono">{name}</h2>
          <h3 className='text-xl font-semibold m-0'>Service Fee: {price}</h3>
          <p className='text-xl'>{`${description.slice(0,100)}.........`}</p>
          <div className="card-actions justify-end">
            <Link to={`/service/${_id}`}>
            <button className="btn btn-primary">view details</button>
            </Link>
          </div>
        </div>
      </div>
    );
};

export default ServiceCart;
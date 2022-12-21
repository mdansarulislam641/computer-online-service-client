import React from 'react';
import { Link } from 'react-router-dom';
import bannerImage from '../../../assests/banner.jpg';
const Banner = () => {
 
    return (
        
        <div className="hero min-h-[70vh] relative" style={{ backgroundImage: `url(${bannerImage})`, backgroundPosition:'center', backgroundRepeat:'no-repeat', backgroundSize:'cover', height:'100%'}}>
        <div className="hero-overlay  bg-[#677491] bg-opacity-50"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-2xl">
            <h1 className="mb-5 text-3xl md:text-5xl font-bold">WELCOME TO OUR ONLINE COMPUTER HELP SERVICES</h1>
            <p className="mb-5">We All time Stay with you to Provide Our best services. We give special priority to service delivery</p>
            <Link to='/services'><button className="btn btn-primary">Go Services</button></Link>
            
          </div>
        </div>
      </div>

    );
};

export default Banner;
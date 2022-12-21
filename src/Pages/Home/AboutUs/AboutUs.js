import React from 'react';

const AboutUs = () => {
    return (
      <div className='bg-[#1C315E] py-20 px-5'>
          <div className='grid lg:grid-cols-2 grid-cols-1 items-center max-w-[1300px] mx-auto gap-5 '>
            <div>
                <h5 className='text-2xl text-blue-800 font-bold'>ABOUT US</h5>
                <h2 className='lg:text-6xl md:text-4xl text-3xl text-white font-extrabold font-mono'>We're On Mission To Help Business Grow Faster Than ever.</h2>
                <p className='text-xl text-white'>We provide various online based services. You can see our services from our service page. We do everything with utmost care and we are always economical with the client.</p>
                <button className='btn mt-5 btn-primary px-10'>Learn More</button>
            </div>
            <div>
                <img src="https://i.ibb.co/c8hG2YK/about-sect-puhjksm2lu4f1zq1nmzjuocvg38aocc5vwetj6wfw8.jpg" alt="" />
            </div>
        </div>
      </div>
    );
};

export default AboutUs;
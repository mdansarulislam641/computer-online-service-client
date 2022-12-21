import React from 'react';

const JoinUs = () => {
    return (
      <div className='bg-[#283d6b] py-10 px-5'>
          <div className='grid lg:grid-cols-2 grid-cols-1 gap-5 items-center max-w-[1300px] mx-auto'>
            <div className='lg:h-[600px] h-[300px]'>
            <img className='h-full object-fill lg:w-3/2 w-full' src="https://i.ibb.co/WKY1q1j/join2-puhotymp07htaozt1stzaf4dy0kbkswe1znj6nmpxw.jpg" alt="" />
            </div>
            <div>
                <p className='text-2xl text-blue-600'>JOIN US</p>
                <h2 className='lg:text-7xl md:text-4xl text-2xl text-white font-extrabold font-mono '>Several Things Define Us As a Company</h2>
                <p className='text-xl text-white my-4'>join us with a good service provide if you agree with us and our helpful all service</p>
                <button className='btn btn-primary px-10'>Join Us Now</button>
            </div>
        </div>
      </div>
    );
};

export default JoinUs;
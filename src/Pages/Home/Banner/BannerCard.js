import React from 'react';
const BannerCard = ({bannerItem}) => {
    const {banner_id, prev, next, img, title} = bannerItem;
    // console.log(bannerItem)
    return (
        <div id={`slide${banner_id}`} className="carousel-item  relative w-full">
      
        <img  src={img} className="w-full " alt='' />
     
     
        <div className='absolute lg:top-[200px] top-[150px] lg:left-[20%] left-[10%] text-yellow-900'>
            <p className='lg:text-6xl md:text-3xl text-center text-2xl font-extrabold text-white '>{title}</p>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 lg:top-1/2 bottom-5">
            <a href={`#slide${prev}`} className="btn btn-circle">❮</a> 
            <a href={`#slide${next}`} className="btn btn-circle">❯</a>
        </div>
    </div> 
    );
};

export default BannerCard;
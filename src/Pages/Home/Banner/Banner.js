import React from 'react';
import BannerCard from './BannerCard';
const Banner = () => {
    const bannerItem = [
        {
            banner_id:1,
            prev:4,
            next:2,
            title:"We Provide Fasted Online Service at Home",
            img:"https://i.ibb.co/PWJMg5d/pexels-photo-845451.jpg",
        },
        {
            banner_id:2,
            prev:1,
            next:3,
            title:"We Provide Highly Low Cost Service",
            img:"https://i.ibb.co/Nm1mtMM/pexels-photo-7709270.webp",
        },
        {
            banner_id:3,
            prev:2,
            next:4,
            title:"We Provide 24 Hours Service",
            img:"https://i.ibb.co/hCtCNND/pexels-photo-7709191.webp",
        },
        {
            banner_id:4,
            prev:3,
            next:1,
            title:"We are Carefully Handle all customer",
            img:"https://i.ibb.co/CQn5s07/pexels-photo-4350084.jpg" ,
        },
    ]
    return (
       
        <div className="carousel w-full h-[80vh]">
          
            {
                bannerItem.map(item=><BannerCard
                    key={item.banner_id}
                    bannerItem={item}
                ></BannerCard>)
            }
      </div>

    );
};

export default Banner;
import React from 'react';
import useTitle from '../../../hooks/useTitle';
import AboutUs from '../AboutUs/AboutUs';
import Banner from '../Banner/Banner';
import JoinUs from '../JoinUs/JoinUs';
import Services from '../Services/Services';

const Home = () => {
    useTitle('home')
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <AboutUs></AboutUs>
            <JoinUs></JoinUs>
        </div>
    );
};

export default Home;
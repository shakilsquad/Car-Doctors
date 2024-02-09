import React from 'react';
import Banner from '../Banner/Banner';
import About from '../About/About';
import Service from '../Service/Service';
import Information from '../Information/Information';
import Products from '../Products/Products';
import ChooseUs from '../ChooseUs/ChooseUs';
import Testimonial from '../Testimonial/Testimonial';
import Team from '../Team/Team';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Service></Service>
            <Information></Information>
            <Products></Products>
            <Team></Team>
            <ChooseUs></ChooseUs>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;

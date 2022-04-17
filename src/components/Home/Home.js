import React from 'react';
import Banner from '../../Banner/Banner';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div id='home'>
            <h2>Home</h2>
            <Banner></Banner>
            <Services></Services>
        </div>
    );
};

export default Home;
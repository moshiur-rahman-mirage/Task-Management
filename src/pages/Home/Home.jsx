import React from 'react';
import Hero from '../../component/Hero/Hero';
import PossibleUser from '../../component/PossibleUser/PossibleUser';

const Home = () => {
    return (
        <div className='min-h-screen'>
            <Hero/>
            <PossibleUser/>
        </div>
    );
};

export default Home;
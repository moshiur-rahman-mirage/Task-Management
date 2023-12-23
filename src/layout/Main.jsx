import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../shared/Navbar';
import Footer from '../shared/Footer';



const Main = () => {
    return (
        <div className='bg-white'>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Main;
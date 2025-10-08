import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
       <>
        <div className='flex flex-col min-h-screen bg-[#F5F5F5]'>
            <Navbar></Navbar>
        <div className='flex-1'>
            <Outlet></Outlet>
        </div>
        <Footer></Footer>
        </div>
        </>
    );
};

export default MainLayout;
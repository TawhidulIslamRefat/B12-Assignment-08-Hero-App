import React from 'react';
import ErrorImg from '../../assets/error-404.png'
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import { Link } from 'react-router';
const ErrorPage = () => {
    return (
        <div className='flex flex-col min-h-screen bg-[#F5F5F5]'>
            <Navbar></Navbar>
            <div className='flex-1 flex flex-col justify-center items-center my-20'>
                <div>
                    <img className='w-[90%] sm:w-full mx-auto sm:mx-0' src={ErrorImg} alt="Error 404" />
                </div>
                <h1 className='font-semibold text-2xl sm:text-4xl mb-2 mt-10'>Oops, page not found!</h1>
                <p className='text-[#627382] font-medium mb-10 mt-2 text-[14px] sm:text-[16px]'>The page you are looking for is not available.</p>
                <div>
                    <Link to='/' className='bg-gradient-to-r from-[#632ee3] to-[#9f62f2] text-white p-4 px-10 mb-8 rounded-[8px] text-[18px]'>Go Back!</Link>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ErrorPage;
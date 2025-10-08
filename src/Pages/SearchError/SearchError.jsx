import React from 'react';
import searchErrorImg from '../../assets/App-Error.png'
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import { Link } from 'react-router';
const SearchError = () => {
    return (
        <div className='flex flex-col min-h-screen bg-[#F5F5F5]'>
            <div className='flex-1 flex flex-col justify-center items-center my-20'>
                <div>
                    <img src={searchErrorImg} alt="Error 404" />
                </div>
                <h1 className='font-semibold text-4xl mb-2 mt-10'>OPPS!! APP NOT FOUND</h1>
                <p className='text-[#627382] font-medium mb-10 mt-2'>The App you are requesting is not found on our system.  please try another apps</p>
                <div>
                    <Link to='/apps' className='bg-gradient-to-r from-[#632ee3] to-[#9f62f2] text-white p-4 px-10 mb-8 rounded-[8px] text-[18px]'>Go Back!</Link>
                </div>
            </div>
        </div>
    );
};

export default SearchError;
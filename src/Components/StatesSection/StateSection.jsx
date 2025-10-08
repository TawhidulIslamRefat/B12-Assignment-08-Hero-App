import React from 'react';

const StateSection = () => {
    return (
        <div className='bg-gradient-to-r from-[#632ee3] to-[#9f62f2] py-20 text-white'>
               <h1 className='text-5xl font-bold text-white text-center'>Trusted by Millions, Built for You</h1>
            <div className='container mx-auto flex justify-center items-center mt-10 gap-50'>
             <div>
                <p className='text-[18px] font-normal text-center'>Total Downloads</p>
                <h1 className='text-6xl font-extrabold text-center my-3'>29.6M</h1>
                <p className='text-[18px] font-normal text-center'>21% more than last month</p>
             </div>
             <div>
                <p className='text-[18px] font-normal text-center'>Total Reviews</p>
                <h1 className='text-6xl font-extrabold text-center my-3'>906K</h1>
                <p className='text-[18px] font-normal text-center'>46% more than last month</p>
             </div>
             <div>
                <p className='text-[18px] font-normal text-center'>Active Apps</p>
                <h1 className='text-6xl font-extrabold text-center my-3'>132+</h1>
                <p className='text-[18px] font-normal text-center'>31 more will Launch</p>
             </div>

            </div>
        </div>
    );
};

export default StateSection;
import React, { } from 'react';
import Banner from '../../Components/Banner/Banner';
import StateSection from '../../Components/StatesSection/StateSection';
import { useLoaderData } from 'react-router';
import AppsCard from '../../Components/AppsCard/AppsCard';
import { Link } from 'react-router';

const Home = () => {
    
    const appsData = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <StateSection></StateSection>
            <div className='mt-20'>
               <h1 className='text-3xl sm:text-5xl font-bold text-center mb-4 '>Trending Apps</h1>
               <p className='text-[16px] sm:text-xl font-normal text-[#627382] text-center'>Explore All Trending Apps on the Market developed by us</p>
               <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 container mx-auto my-10 '>
                {  
                appsData.slice(0,8).map(app =><AppsCard key={app.id} app={app} ></AppsCard>)
                }
               </div>
               <div className='flex justify-center items-center'>
                <Link to='/apps' className='bg-gradient-to-r from-[#632ee3] to-[#9f62f2] text-white p-4 px-10 mb-20 rounded-[8px] text-[18px]'>Show All</Link>
               </div>
            </div>
        </div>
    );
};

export default Home;
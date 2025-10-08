import React from 'react';
import Banner from '../../Components/Banner/Banner';
import StateSection from '../../Components/StatesSection/StateSection';
import { useLoaderData } from 'react-router';
import AppsCard from '../../Components/AppsCard/AppsCard';

const Home = () => {
    const appsData = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <StateSection></StateSection>
            <div className='mt-20'>
               <h1 className='text-5xl font-bold text-center mb-4'>Trending Apps</h1>
               <p className='text-xl font-normal text-[#627382] text-center'>Explore All Trending Apps on the Market developed by us</p>
               <div>
                {  
                appsData.slice(0,8).map(app =><AppsCard key={app.id} app={app} ></AppsCard>)
                }
               </div>
            </div>
        </div>
    );
};

export default Home;
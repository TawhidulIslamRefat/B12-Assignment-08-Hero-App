import React from 'react';
import { IoIosSearch } from "react-icons/io";
import { useLoaderData } from 'react-router';
import AppsCard from '../../Components/AppsCard/AppsCard';
const Apps = () => {
    const allAppsData = useLoaderData();
    console.log(allAppsData);
    return (
        <div className='container mx-auto mt-20'>
            <h1 className='text-5xl font-bold text-center'>Our All Applications</h1>
            <p className='text-xl font-normal text-[#627382] text-center mt-4 mb-[46px]'>Explore All Apps on the Market developed by us. We code for Millions</p>
            <div className='flex justify-between'>
                <h1 className='text-2xl font-semibold text-[#001931]'>(132) Apps Found</h1>
                    <input className='border-2 border-[#d2d2d2] text-[18px] font-normal text-[#627382] py-2 px-10 rounded-[4px]' type="search" name="" id="search" placeholder='search  Apps' />
            </div>
            <div>
                {
                    allAppsData.map(app => <AppsCard key={app.id} app={app} ></AppsCard>)
                }
            </div>
        </div>
    );
};

export default Apps;
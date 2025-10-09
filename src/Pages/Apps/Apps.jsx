import React, { useEffect, useState } from 'react';
import { IoIosSearch } from "react-icons/io";
import { useLoaderData, useNavigate } from 'react-router';
import AppsCard from '../../Components/AppsCard/AppsCard';
import {PacmanLoader } from "react-spinners";
const Apps = () => {
    const allAppsData = useLoaderData();
    const navigate = useNavigate();
    const [searchApps,setSearchApps] =useState('');
    const [filterApps,setFilterApps] = useState(allAppsData);
    const [showLoading,setShowLoading] = useState(false);
    useEffect(() =>{
        window.scrollTo(0,0);
    },[])
    const handleSearch = (e) =>{
        const appsTitle = e.target.value.toLowerCase();
        setSearchApps(appsTitle);
          setShowLoading(true);
        setTimeout(() => {
            const filteredApps = allAppsData.filter(app => app.title.toLowerCase().includes(appsTitle));
        setFilterApps(filteredApps);
        setShowLoading(false);
        if(filteredApps.length === 0){
       navigate('/appsError');}
        },1000)
         };

    return (
        <div className='container mx-auto mt-20'>
            <h1 className='text-3xl sm:text-5xl font-bold text-center'>Our All Applications</h1>
            <p className='text-[16px] sm:text-xl font-normal text-[#627382] text-center mt-4 mb-[46px]'>Explore All Apps on the Market developed by us. We code for Millions</p>
            <div className='flex flex-col sm:flex-row justify-center gap-5 sm:gap-0 sm:justify-between items-center sm:items-start'>
                <h1 className='text-2xl font-semibold text-[#001931]'>({filterApps.length}) Apps Found</h1>
                   <div className='relative'>
                    <IoIosSearch  className='absolute text-xl sm:text-2xl top-3 left-1 sm:left-3 text-gray-600'/>
                     <input  className='border-2 border-[#979292] text-[16px] sm:text-[18px] font-normal text-gray-600 py-2 px-6 sm:px-10 rounded-[4px]' type="search" value={searchApps} onChange={handleSearch} name="" id="search" placeholder='search  Apps'  />
                   </div>
            </div>
                { showLoading ? (
                  <div className="flex justify-center items-center gap-25 h-[80vh] ">
                <PacmanLoader color="#9f62f2" size={40} />
                <p className="text-4xl font-semibold ml-10 text-[#632ee3] hidden sm:flex">LOADING...</p>
              </div>
                ):(
                    <div className='grid grid-cols-1 sm:grid-cols-4 gap-4 container justify-center mx-auto mt-10 mb-15 sm:mb-20'>
                    {filterApps.map((app) => <AppsCard key={app.id} app={app} ></AppsCard>)}
                    </div>
                )   
                }
            
        </div>
    );
};

export default Apps;
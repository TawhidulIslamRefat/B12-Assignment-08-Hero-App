import React, { useEffect, useState } from 'react';
import { IoIosSearch } from "react-icons/io";
import { useLoaderData, useNavigate } from 'react-router';
import AppsCard from '../../Components/AppsCard/AppsCard';
const Apps = () => {
    const allAppsData = useLoaderData();
    const navigate = useNavigate();
    const [searchApps,setSearchApps] =useState('');
    const [filterApps,setFilterApps] = useState(allAppsData);
    useEffect(() =>{
        window.scrollTo(0,0);
    },[])
    const handleSearch = (e) =>{
        const appsTitle = e.target.value.toLowerCase();
        setSearchApps(appsTitle);

        const filteredApps = allAppsData.filter(app => app.title.toLowerCase().includes(appsTitle) || app.companyName.toLowerCase().includes(appsTitle));
        setFilterApps(filteredApps);
         if(filteredApps.length === 0){
        navigate('/appsError');
         }
    }


    return (
        <div className='container mx-auto mt-20'>
            <h1 className='text-5xl font-bold text-center'>Our All Applications</h1>
            <p className='text-xl font-normal text-[#627382] text-center mt-4 mb-[46px]'>Explore All Apps on the Market developed by us. We code for Millions</p>
            <div className='flex justify-between'>
                <h1 className='text-2xl font-semibold text-[#001931]'>({filterApps.length}) Apps Found</h1>
                   <div className='relative'>
                    <IoIosSearch  className='absolute text-2xl top-3 left-3 text-gray-600'/>
                     <input  className='border-2 border-[#979292] text-[18px] font-normal text-gray-600 py-2 px-10 rounded-[4px]' type="search" value={searchApps} onChange={handleSearch} name="" id="search" placeholder='search  Apps'  />
                   </div>
            </div>
            <div className='grid grid-cols-4 gap-4 container mx-auto mt-10 mb-20'>
                {
                   
                   filterApps.map(app => <AppsCard key={app.id} app={app} ></AppsCard>)
                }
            </div>
        </div>
    );
};

export default Apps;
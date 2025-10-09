import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { getStoreApp, removeStoredDb } from "../../Utility/addToLSR";
import { IoMdArrowDropdown } from "react-icons/io";
import InstallAppCard from "../../Components/InstallAppCard/InstallAppCard";
import { ToastContainer, toast } from 'react-toastify';
const Installation = () => {
  const [appList, SetAppList] = useState([]);
  const [sort,setSort] = useState();
  const appsData = useLoaderData();
   useEffect(() =>{
           window.scrollTo(0,0);
       },[]);
  useEffect(() => {
    const storedAppData = getStoreApp();
    const convertedStoredApps = storedAppData.map((id) => parseInt(id));
    const myInstallList = appsData.filter((app) =>
      convertedStoredApps.includes(app.id)
    );
    SetAppList(myInstallList);
  }, [appsData]);

    const handleSort =(type) => {
        setSort(type);
       if (type === "downloads") {
        const sortedByDownloads = [...appList].sort((a,b) => a.downloads - b.downloads);
        SetAppList(sortedByDownloads);
       }else if(type === "downloads-desc"){
         const sotredByDownloadsDesc = [...appList].sort((a,b) => b.downloads - a.downloads);
         SetAppList(sotredByDownloadsDesc);
       }
    }

    const handleUninstall = (id) =>{
        removeStoredDb(id);
        SetAppList(apps => apps.filter(app => app.id !== id));
        toast.error("UnInstall Complete")
    }
  return (
    <div className="pt-10 container mx-auto">
         <ToastContainer />
      <h1 className="text-3xl sm:text-5xl font-bold text-center">Your Installed Apps</h1>
      <p className="text-[18px] px-2 sm:px-0 sm:text-xl font-normal text-[#627382] text-center mt-4 mb-11">
        Explore All Trending Apps on the Market developed by us
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-5 sm:gap-0 sm:justify-between items-center sm:items-start">
        <h1 className="text-2xl font-semibold text-[#001931]">{appList.length} App{appList.length!== 1 ? "s" : ""}
              Found </h1>
        <div className="dropdown">
          <div tabIndex={0} role="button" className="m-1 border-1 border-gray-400 px-4 py-2 rounded-[4px]">
            <div className="flex gap-1 items-center">
                Sort By Downloads
            <IoMdArrowDropdown />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li>
              <a onClick={() => handleSort("downloads")}>Low To High</a>
            </li>
            <li>
              <a onClick={() => handleSort("downloads-desc")}>High To Low</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="my-10">
        {
          appList.map((app) => <InstallAppCard key={app.id} app={app} onUninstall={handleUninstall}></InstallAppCard>)  
        }
      </div>
    </div>
  );
};

export default Installation;

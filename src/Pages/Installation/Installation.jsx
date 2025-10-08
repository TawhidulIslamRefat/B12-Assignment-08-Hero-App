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
       if (type === "size") {
        const sortedBySize = [...appList].sort((a,b) => a.size - b.size);
        SetAppList(sortedBySize);
       }else if(type === "size-desc"){
         const sotredBySizeDesc = [...appList].sort((a,b) => b.size - a.size);
         SetAppList(sotredBySizeDesc);
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
      <h1 className="text-5xl font-bold text-center">Your Installed Apps</h1>
      <p className="text-xl font-normal text-[#627382] text-center mt-4 mb-11">
        Explore All Trending Apps on the Market developed by us
      </p>
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-[#001931]">{appList.length} App{appList.length!== 1 ? "s" : ""}
              Found </h1>
        <div className="dropdown">
          <div tabIndex={0} role="button" className="m-1 border-1 border-gray-400 px-4 py-2 rounded-[4px]">
            <div className="flex gap-1 items-center">
                Sort By Size
            <IoMdArrowDropdown />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li>
              <a onClick={() => handleSort("size")}>Low To High</a>
            </li>
            <li>
              <a onClick={() => handleSort("size-desc")}>High To Low</a>
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

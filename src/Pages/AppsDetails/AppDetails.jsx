import React, { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router";
import download from "../../assets/download.png";
import star from "../../assets/star.png";
import like from "../../assets/like.png";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";
import { addToStoredDB, getStoreApp } from "../../Utility/addToLSR";
 import { ToastContainer, toast } from 'react-toastify';
const AppDetails = () => {
  const { id } = useParams();
  const appID = parseInt(id);
  const allAppsData = useLoaderData();
  const [isInstall,setIsInstall] =useState(false)
  const singleApp = allAppsData.find((app) => app.id === appID);
  const FormatNum = (value) => {
    if (value >= 1000000) {
      return (value / 1000000).toFixed(1) + "M+";
    } else if (value >= 1000) {
      return (value / 1000).toFixed(1) + "K+";
    }
  };
  const {
    image,
    companyName,
    description,
    downloads,
    ratingAvg,
    reviews,
    size,
    title,
    ratings,
  } = singleApp;
  useEffect(() =>{
          window.scrollTo(0,0);
      },[]);

      useEffect (()=>{
        const installApps = getStoreApp();
        if(installApps.includes(appID)){
            setIsInstall(true)
        }
      },[])

      const handleInstallApp = (id) => {
         addToStoredDB(id);
         setIsInstall(true);
         toast.success('Installed Complete')
         
      }
  return (
    
    <div className="container mx-auto mt-10 sm:mt-20">
      <div className="flex flex-col sm:flex-row gap-10 border-b-2 border-gray-300 pb-7 sm:pb-10">
        <div>
            <ToastContainer />
          <img className="w-80 h-80 mx-auto" src={image} alt="App Image" />
        </div>
        <div>
          <div className="">
            <h1 className="text-2xl text-center sm:text-left sm:text-3xl font-bold mb-2">{title}</h1>
            <p className="text-[16px] text-center sm:text-left sm:text-xl font-medium text-[#627382] border-b-2 border-gray-300 pb-7 ">
              Developed by{" "}
              <span className="bg-gradient-to-b from-[#632ee3] to-[#9f62f2] bg-clip-text text-transparent">
                {companyName}
              </span>{" "}
            </p>
          </div>
          <div className="grid grid-cols-3 gap-15 mt-4 sm:mt-7">
            <div className="ml-2">
              <img className="w-5 sm:w-10 mx-auto sm:mx-0" src={download} alt="" />
              <p className="text-[12px] sm:text-[16px] font-normal text-[#001931] my-2 text-center sm:text-left">
                Downloads
              </p>
              <h1 className="text-[18px] sm:text-4xl font-extrabold text-[#001931] text-center sm:text-left">
                {FormatNum(downloads)}
              </h1>
            </div>
            <div>
              <img className="w-5 sm:w-10 mx-auto sm:mx-0" src={star} alt="" />
              <p className="text-[12px] sm:text-[16px] font-normal text-[#001931] my-2 text-center sm:text-left">
                Average Ratings
              </p>
              <h1 className="text-[18px] sm:text-4xl font-extrabold text-[#001931] text-center sm:text-left">
                {ratingAvg}
              </h1>
            </div>
            <div className="mr-2">
              <img className="w-5 sm:w-10 mx-auto sm:mx-0" src={like} alt="" />
              <p className="text-[12px] sm:text-[16px] font-normal text-[#001931] my-2 text-center sm:text-left">
                Total Reviews
              </p>
              <h1 className="text-[18px] sm:text-4xl font-extrabold text-[#001931] text-center sm:text-left">
                {FormatNum(reviews)}
              </h1>
            </div>
          </div>
          <div className="mt-5 sm:mt-4 flex justify-center items-center sm:justify-start sm:items-start ">
            <button onClick={()=> handleInstallApp(appID)}
            disabled={isInstall} className="text-[14px] sm:text-[16px] text-white bg-[#00D390] py-3 px-5 rounded-[4px]">
              {isInstall ? "Installed ✅" : `Install Now (${size}MB)`}
            </button>
          </div>
        </div>
      </div>
      <div className="mt-10 border-b-2 border-gray-300 pb-10"> 
        <h1 className="text-2xl font-semibold mb-5 ml-3 sm:ml-0">Ratings</h1>
        <div className="w-[98%] h-[400px]">
           <ResponsiveContainer width="100%" height="100%">
                <BarChart width={1500} height={400} data={[...ratings].reverse()} layout="vertical">
    <XAxis type="number" dataKey="count" />
    <YAxis type="category" dataKey="name" />
    <Bar dataKey="count" barSize={30} fill="#F81"/>
        </BarChart>
           </ResponsiveContainer>
        </div>
        
      </div>
      <div className="my-10">
        <h1 className="text-2xl font-semibold mb-6 ml-3 sm:ml-0">Description</h1>
        <p className="text-[16px] px-2 sm:text-xl font-normal text-[#627382] leading-8">{description}</p>
      </div>
    </div>
  );
};

export default AppDetails;

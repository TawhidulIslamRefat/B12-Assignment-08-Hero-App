import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import { Outlet, useNavigation } from "react-router";
import {PacmanLoader } from "react-spinners";
const MainLayout = () => {
  const navigation = useNavigation();
  const [showLoader,setShowLoader] = useState(false);
  useEffect(()=> {
    let timeOut = null;
    if(navigation.state === "loading"){
      setShowLoader(true);
    }else{
      timeOut = setTimeout(() =>{
         setShowLoader(false)},1000);
      }
      return () => clearTimeout(timeOut);
    },[navigation.state]);
  return (
    <>
      <div className="flex flex-col min-h-screen bg-[#F5F5F5] overflow-x-hidden">
        <Navbar></Navbar>
           <div className="flex-1">
            {showLoader ? (
              <div className="flex justify-center items-center min-h-screen gap-15 sm:gap-25 ">
                <PacmanLoader color="#9f62f2" size={40} />
                <p className="text-4xl font-semibold ml-10 text-[#632ee3] hidden sm:flex">LOADING...</p>
              </div>
            ) :(<Outlet />)}
          
         </div>
        <Footer></Footer>
      </div>
    </>
  );
};

export default MainLayout;

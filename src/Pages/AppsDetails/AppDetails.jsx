import React, { useEffect } from "react";
import { Link, useLoaderData, useParams } from "react-router";
import download from "../../assets/download.png";
import star from "../../assets/star.png";
import like from "../../assets/like.png";
import { BarChart, Bar, XAxis, YAxis } from "recharts";
const AppDetails = () => {
  const { id } = useParams();
  const appID = parseInt(id);
  const allAppsData = useLoaderData();
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
      },[])
  return (
    <div className="container mx-auto mt-20">
      <div className="flex gap-10 border-b-2 border-gray-300 pb-10">
        <div>
          <img className="w-80 h-80" src={image} alt="App Image" />
        </div>
        <div>
          <div className="">
            <h1 className="text-3xl font-bold mb-2">{title}</h1>
            <p className="text-xl font-medium text-[#627382] border-b-2 border-gray-300 pb-7 ">
              Developed by{" "}
              <span className="bg-gradient-to-b from-[#632ee3] to-[#9f62f2] bg-clip-text text-transparent">
                {companyName}
              </span>{" "}
            </p>
          </div>
          <div className="grid grid-cols-3 gap-15 mt-7">
            <div>
              <img className="" src={download} alt="" />
              <p className="text-[16px] font-normal text-[#001931] my-2">
                Downloads
              </p>
              <h1 className="text-4xl font-extrabold text-[#001931]">
                {FormatNum(downloads)}
              </h1>
            </div>
            <div>
              <img src={star} alt="" />
              <p className="text-[16px] font-normal text-[#001931] my-2">
                Average Ratings
              </p>
              <h1 className="text-4xl font-extrabold text-[#001931]">
                {ratingAvg}
              </h1>
            </div>
            <div>
              <img src={like} alt="" />
              <p className="text-[16px] font-normal text-[#001931] my-2">
                Total Reviews
              </p>
              <h1 className="text-4xl font-extrabold text-[#001931]">
                {FormatNum(reviews)}
              </h1>
            </div>
          </div>
          <div className="mt-4">
            <button className="text-white bg-[#00D390] py-3 px-5 rounded-[4px]">
              Install Now ({size} MB){" "}
            </button>
          </div>
        </div>
      </div>
      <div className="mt-10 border-b-2 border-gray-300 pb-10"> 
        <h1 className="text-2xl font-semibold mb-5">Ratings</h1>
        <BarChart width={1500} height={400} data={[...ratings].reverse()} layout="vertical">
    <XAxis type="number" dataKey="count" />
    <YAxis type="category" dataKey="name" />
    <Bar dataKey="count" barSize={30} fill="#F81"/>
        </BarChart>
      </div>
      <div className="my-10">
        <h1 className="text-2xl font-semibold mb-6">Description</h1>
        <p className="text-xl font-normal text-[#627382] leading-8">{description}</p>
      </div>
    </div>
  );
};

export default AppDetails;

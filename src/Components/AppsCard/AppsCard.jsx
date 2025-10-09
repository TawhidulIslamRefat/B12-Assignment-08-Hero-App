import React from 'react';
import { MdOutlineFileDownload } from "react-icons/md";
import { GoStarFill } from "react-icons/go";
import { Link } from 'react-router';
const AppsCard = ({app}) => {
    
    const {image,title,downloads,ratingAvg,id} = app;

    const FormatNum = (value) =>{
        if(value >= 1000000){
            return(value/1000000).toFixed(1) + "M+";
        }else if(value >= 1000){
           return(value /1000).toFixed(1) +"K+";
        }
    }
    return (
        <Link to={`/appDetails/${id}`} className='w-[90%] sm:w-full mx-auto' >
        <div className='bg-white p-4 rounded-[4px] shadow-xl'>
            <img className='w-[270px] h-[270px] sm:w-[316px] sm:h-[316px] mx-auto rounded-[8px] mb-4' src={image} alt="" />
            <h1 className='text-[20px] font-medium text-[#001931] text-center'>{title}</h1>
            <div className='flex justify-between mt-4 px-3'>
                <p className='flex justify-center items-center gap-1 text-[16px] font-medium text-[#00d390] bg-[#F1F5E8] py-0.5 px-1 rounded-[4px]'><MdOutlineFileDownload className='text-xl' /> {FormatNum(downloads)}</p>
            <p className='flex justify-center items-center gap-1 text-[16px] font-medium text-[#ff8811] bg-[#FFF0E1] py-0.5 px-1 rounded-[4px]'><GoStarFill  /> {ratingAvg}</p>
            </div>
        </div>
        </Link>
    );
};

export default AppsCard;
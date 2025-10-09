import React from 'react';
import { MdOutlineFileDownload } from "react-icons/md";
import { GoStarFill } from "react-icons/go";
const InstallAppCard = ({app,onUninstall}) => {
    const {image,title,ratingAvg,size,downloads,id} = app;

      const FormatNum = (value) =>{
        if(value >= 1000000){
            return(value/1000000).toFixed(1) + "M+";
        }else if(value >= 1000){
           return(value /1000).toFixed(1) +"K+";
        }
    }
    return (
        <div className='bg-white shadow-sm mt-6 p-4 rounded-[4px] w-[97%] sm:w-full mx-auto sm:mx-0'>
            <div  className='flex justify-between items-center'>
                <div className='flex gap-3'>
                    <div>
                        <img src={image} className='w-12 h-12 sm:w-20 sm:h-20' alt="" />
                    </div>
                    <div className=''>
                        <h1 className='text-[12px] sm:text-xl font-medium'>{title}</h1>
                        <div className='flex gap-2 sm:gap-4 items-center mt-4'>    
                        <p className='flex gap-1 text-[10px] sm:text-[16px] font-medium text-[#00d390]  py-0.5 px-1 rounded-[4px]'><MdOutlineFileDownload className=' text-[14px] sm:text-xl' /> {FormatNum(downloads)}</p>
                        <p className='flex items-center  gap-1 text-[10px] sm:text-[16px] font-medium text-[#ff8811]  py-0.5 px-1 rounded-[4px]'><GoStarFill  /> {ratingAvg}
                        </p>
                        <p className='text-[10px] sm:text-[16px]'>{size} MB</p>
                        </div>
                    </div>
                </div>
                <div>
                    <button onClick={() => onUninstall(id)} className="text-white bg-[#00D390] sm:py-3 sm:px-5 text-[14px] sm:text-[16px] py-1.5 px-2 rounded-[4px]">Uninstall</button>
                </div>
            </div>
        </div>
    );
};

export default InstallAppCard;
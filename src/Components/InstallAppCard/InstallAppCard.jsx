import React from 'react';
import { MdOutlineFileDownload } from "react-icons/md";
import { GoStarFill } from "react-icons/go";
const InstallAppCard = ({app}) => {
    const {image,title,ratingAvg,size,downloads} = app;

      const FormatNum = (value) =>{
        if(value >= 1000000){
            return(value/1000000).toFixed(1) + "M+";
        }else if(value >= 1000){
           return(value /1000).toFixed(1) +"K+";
        }
    }
    return (
        <div className='bg-white shadow-sm mt-6 p-4 rounded-[4px]'>
            <div  className='flex justify-between items-center'>
                <div className='flex gap-3'>
                    <div>
                        <img src={image} className='w-20 h-20' alt="" />
                    </div>
                    <div className=''>
                        <h1 className='text-xl font-medium'>{title}</h1>
                        <div className='flex gap-4 items-center mt-4'>    
                        <p className='flex gap-1 text-[16px] font-medium text-[#00d390]  py-0.5 px-1 rounded-[4px]'><MdOutlineFileDownload className='text-xl' /> {FormatNum(downloads)}</p>
                        <p className='flex items-center  gap-1 text-[16px] font-medium text-[#ff8811]  py-0.5 px-1 rounded-[4px]'><GoStarFill  /> {ratingAvg}</p>
                        <p>{size} MB</p>
                        </div>
                    </div>
                </div>
                <div>
                    <button className="text-white bg-[#00D390] py-3 px-5 rounded-[4px]">Uninstall</button>
                </div>
            </div>
        </div>
    );
};

export default InstallAppCard;
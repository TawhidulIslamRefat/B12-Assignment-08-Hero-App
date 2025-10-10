import React from "react";
import { FaGithub } from "react-icons/fa";
import Logo from "../../assets/logo.png";
import { Link, NavLink } from "react-router";
import '../../index.css'
const Navbar = () => {
   const links = <>
    <NavLink to=''><li className=' text-[18px] '>Home</li></NavLink>
    <NavLink to='/apps'><li className='mx-5 sm:mx-12 text-[18px] '>Apps</li></NavLink>
    <NavLink to='/installation'><li className=' text-[18px] '>Installation</li></NavLink>
    </>
      
  return (
    
    <div className="bg-white">
       <div  className="md:hidden fixed bottom-0 left-0 right-0 shadow-2xl bg-gray-300 backdrop-blur-xl backdrop-saturate-250 text-white z-10">
              <ul className="flex justify-center items-center py-0.5">
             {links}
            </ul>
            </div>
      <div className="normal md:fixed top-0 left-0 right-0 bg-white z-20">
        <div className="navbar container mx-auto">
        <div className="navbar-start">
          <a href="/">
          <div className="flex  items-center gap-1.5">
            <img className="w-10 h-10" src={Logo} alt="Logo" />
          <h1 className=" text-[16px] font-bold bg-gradient-to-b from-[#632ee3] to-[#9f62f2] bg-clip-text text-transparent">HERO.IO</h1>
          </div>
          </a>
        </div>
        <div className="navbar-center hidden md:flex gap-10">
          <ul className="menu menu-horizontal px-1 ">
           {links}
          </ul>
        </div>
        <div className="navbar-end">
          <a href="https://github.com/TawhidulIslamRefat" className="btn bg-gradient-to-b from-[#632ee3] to-[#9f62f2] text-white"> <FaGithub /> Contribute</a>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Navbar;

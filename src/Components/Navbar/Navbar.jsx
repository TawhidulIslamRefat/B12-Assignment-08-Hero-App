import React from "react";
import { FaGithub } from "react-icons/fa";
import Logo from "../../assets/logo.png";
import { Link, NavLink } from "react-router";
import '../../index.css'
const Navbar = () => {
   const links = <>
    <NavLink to=''><li className=' text-[17px] '>Home</li></NavLink>
    <NavLink to='/apps'><li className='mx-12 text-[17px] '>Apps</li></NavLink>
    <NavLink to='/installation'><li className=' text-[17px] '>Installation</li></NavLink>
    </>
      
  return (
    <div className="bg-white">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
             {links}
            </ul>
          </div>
          <a href="/">
          <div className="flex  items-center gap-1.5">
            <img className="w-10 h-10" src={Logo} alt="Logo" />
          <h1 className=" text-[16px] font-bold bg-gradient-to-b from-[#632ee3] to-[#9f62f2] bg-clip-text text-transparent">HERO.IO</h1>
          </div>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex gap-10">
          <ul className="menu menu-horizontal px-1 ">
           {links}
          </ul>
        </div>
        <div className="navbar-end">
          <a href="https://github.com/TawhidulIslamRefat" className="btn bg-gradient-to-b from-[#632ee3] to-[#9f62f2] text-white"> <FaGithub /> Contribute</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

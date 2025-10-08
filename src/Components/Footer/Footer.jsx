import React from 'react';
import Logo from "../../assets/logo.png";
import { RiTwitterXLine } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
const Footer = () => {
    return (
        <div>
            <footer className="  bg-neutral text-neutral-content py-8">
  
     <div className='container mx-auto grid grid-cols-1 gap-3 sm:gap-0  sm:grid-cols-5 sm:footer-horizontal mb-7'>
      <nav className='flex items-center gap-2' >
    <img className='w-10 h-10' src={Logo} alt="" />
    <h6 className="footer-title">HERO.IO</h6>
    
  </nav>
  <nav className='flex flex-col gap-1'>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Our Apps</a>
  </nav>
  <nav className='flex flex-col gap-1'>
    <h6 className="footer-title">Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
    <nav className='flex flex-col gap-1'>
    <h6 className="footer-title">Apps</h6>
    <a className="link link-hover">Mac</a>
    <a className="link link-hover">Windows</a>
    <a className="link link-hover">iPhone</a>
    <a className="link link-hover">Android</a>
  </nav>
  <nav>
    <h6 className="footer-title">Social</h6>
    <div className='flex gap-3 text-xl'>
      <a className="link link-hover"><RiTwitterXLine /></a>
    <a className="link link-hover"><FaLinkedin /></a>
    <a className="link link-hover"><FaFacebookSquare /></a>
    <a className="link link-hover"><FaGithub /></a>
    </div>
  </nav>
     </div>
  
    <div>
      <p className='text-center text-[16px] font-normal text-[#FAFAFA] border-t-1 border-[#E5E7EB] pt-7'>Copyright © 2025 - All right reserved</p>
    </div>
</footer>
        </div>
    );
};

export default Footer;
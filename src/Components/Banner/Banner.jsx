import React from "react";
import heroImg from '../../assets/hero.png'
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaAppStoreIos } from "react-icons/fa";
import { Link } from "react-router";
const Banner = () => {
  return (
    <div className="bg-[#F5F5F5] pt-10 sm:pt-20">
      <div className="container mx-auto flex flex-col justify-center items-center">
        <h1 className="text-4xl sm:text-7xl font-bold text-center leading-12 sm:leading-21">We Build <br /> <span className="bg-gradient-to-r from-[#632ee3] to-[#9f62f2] bg-clip-text text-transparent">Productive</span> Apps</h1>
        <p className="text-[16px] sm:text-xl font-normal text-[#627382] text-left sm:text-center mt-4 px-2.5 sm:px-3.5 md:px-4 lg:px-25 leading-8">
            Hero.io is your digital stage — a place where creators, artists, and dreamers can share their journey and inspire the world. Whether you design, write, perform, or build, Hero.io helps you present your work with elegance and impact.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 my-10">
            <a href="https://play.google.com/store/games?hl=en" className="flex gap-2 items-center text-xl font-semibold border-2 border-[#d2d2d2] rounded-[4px] px-6 py-3"> <IoLogoGooglePlaystore /> Google Play</a>
            <a href="https://www.apple.com/app-store/" className="flex gap-2 items-center text-xl font-semibold border-2 border-[#d2d2d2] rounded-[4px] px-6 py-3"> <FaAppStoreIos /> App Store</a>
        </div>
        <div>
              <img className="w-[90%] sm:w-full mx-auto" src={heroImg} alt="Hero image" />
        </div>
      </div>
    </div>
  );
};

export default Banner;

import React, { useState, useEffect } from "react";

//import Logo
import Logo from "../assets/img/white-logo.png";

const Header = () => {
  // const [bg, setBg] = useState(false);

  // useEffect(() => {
  //   window.addEventListener("scroll", () => {
  //     return window.scrollY > 50 ? setBg(true) : setBg(false);
  //   });
  // });

  return (
    <header
      className='flex items-center fixed top-0 w-full h-24 text-white bg-tertiary z-10 transition-all duration-300'
    >
      <div className="container mx-auto h-full flex items-center justify-between">
        {/* Logo */}
        <a href="#">
          <img className='w-[145px] h-[50px]' src={Logo} alt="" />
        </a>
        <div className="hidden lg:block"></div>
        {/* Greeting */}
        <div className="text-[16px] font-bold">
          Welcome, Kaung Pyae Mg 
          <p className="text-[12px] font-normal text-end">1 October, 2022 | 11:59 AM</p>
        </div>
        
      </div>
    </header>
  );
};

export default Header;

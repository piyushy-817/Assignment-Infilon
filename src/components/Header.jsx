import React, { useState } from "react";
import MainLogo from "../assets/MainLogo.png";
import { FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white p-4 w-full flex items-center justify-between px-4 md:px-40 md:container md:mx-auto">
      
      <div className="flex items-center flex-1">
        <img alt="MainLogo" className="mr-2" src={MainLogo} />

        
        <h3 className="text-BrownDefault font-Gluten text-[20px] font-[400] hidden md:block">
          Central Texas Fly Fishing
        </h3>
      </div>

      
      <button className="md:hidden text-2xl pr-4" onClick={toggleMenu}>
        {isOpen ? <FiX /> : <FiMenu />}
      </button>

      
      <ul className="hidden md:flex space-x-4">
        <li><a href="#" className="hover:underline">Home</a></li>
        <li><a href="#" className="hover:underline">About</a></li>
        <li><a href="#" className="hover:underline">Services</a></li>
        <li><a href="#" className="hover:underline">Contact</a></li>
      </ul>

     
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md md:hidden">
          <ul className="flex flex-col space-y-4 p-4">
            <li><a href="#" className="hover:underline block">Home</a></li>
            <li><a href="#" className="hover:underline block">About</a></li>
            <li><a href="#" className="hover:underline block">Services</a></li>
            <li><a href="#" className="hover:underline block">Contact</a></li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;

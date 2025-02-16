import React from "react";
import SecImg1 from "../assets/sec-1-img.png";

const CentralTexas = () => {
  return (
    <section className="text-center px-4 md:px-44 py-15">
      <div className="flex flex-col md:flex-row items-center justify-between">
        
        <div className="w-full md:w-1/2 order-1 md:order-2 ">
          <img 
            alt="sec-1 Image" 
            className="w-full h-auto md:w-[400px] md:h-[300px] object-cover"
            src={SecImg1} 
          />
        </div>

       
        <div className="text-left w-full md:w-1/2 order-2 md:order-1 mt-4 md:mt-0">
          <h2 className="text-4xl md:text-[56px] font-[600]">
            Central Texas Fly Fishing
          </h2>
          <p className="text-[#65625E] text-[16px] md:text-[20px] font-[400] mt-2">
            At lacus vitae nulla sagittis scelerisque nisl. Pellentesque duis cursus vestibulum, facilisi ac, sed faucibus.
          </p>
          <button className="mt-4 px-4 py-2 bg-[#514432] text-[#F7F7F6] rounded">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default CentralTexas;

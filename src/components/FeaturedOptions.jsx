import { useState } from "react";
import sec2Img from "../assets/sec-2-img.png";

const FeaturedOptions = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="px-44 py-15 bg-sec2 font-Inter">
  <div className="rounded-lg bg-sec2">
    <div className="text-left mb-8">
      <h2 className="text-4xl  text-[48px] font-[600] text-gray-900 font-Inter">Featured Options</h2>
    </div>

    <div className="font-Inter">
     
      <div className="border-b border-black">
        <button
          onClick={() => toggleAccordion(1)}
          className="w-full text-left **px-10** py-4 font-[400] text-[20px] font-Inter text-[#1C1812] flex justify-between items-center"
        >
          Explore By Fishing
          <span
            className={`transform transition-transform duration-300 ${
              openIndex === 1 ? "rotate-180" : ""
            }`}
          >
            ▼
          </span>
        </button>
        {openIndex === 1 && (
          <div className="flex border-t border-black **px-10**">
            <div>
              <img alt="sec-2 image" className="" src={sec2Img} />
            </div>
            <div className="text-left w-1/2 ml-10 mt-4">
              <h2 className="text-4xl text-[32px] font-[600]">Explore By Fishing</h2>
              <p className="text-[#65625E] text-[20px] font-[400] font-Inter mt-2">
                Proin nibh nisl condimentum id venenatis a condimentum vitae sapien.
                Tellus in metus vulputate eu sc
              </p>
              <button className="mt-4 px-2 py-2 bg-[#DFDEDD] text-[14px] text-[#1C1812] rounded">
                Learn More
              </button>
            </div>
          </div>
        )}
      </div>

     
      <div className="border-b border-black">
        <button
          onClick={() => toggleAccordion(2)}
          className="w-full text-left font-Inter font-[400] text-[20px] **px-10** py-4  text-[#1C1812] flex justify-between items-center"
        >
          Fly Fishing Experiences
          <span
            className={`transform transition-transform duration-300 ${
              openIndex === 2 ? "rotate-180" : ""
            }`}
          >
            ▼
          </span>
        </button>
        {openIndex === 2 && (
          <div className="**px-10** font-Inter py-4 text-gray-600 border-t border-black">
            Details about option 2 go here.
          </div>
        )}
      </div>

      
      <div className="border-b border-black">
        <button
          onClick={() => toggleAccordion(3)}
          className="w-full text-left font-Inter font-[400] text-[20px] **px-10** py-4  text-[#1C1812] flex justify-between items-center"
        >
          Gear Up and Catch More
          <span
            className={`transform transition-transform duration-300 ${
              openIndex === 3 ? "rotate-180" : ""
            }`}
          >
            ▼
          </span>
        </button>
        {openIndex === 3 && (
          <div className="**px-10** font-Inter py-4 text-gray-600 border-t border-black">
            Details about option 3 go here.
          </div>
        )}
      </div>
    </div>
  </div>
</section>

  );
};

export default FeaturedOptions;

import { useState } from "react";
import sec2Img from "../assets/sec-2-img.png";
import mobImg1 from "../assets/mob-img1.png";
import mobImg2 from "../assets/mob-img2.png";
import mobImg3 from "../assets/mob-img3.png";

const FeaturedOptions = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="px-6 md:px-44 py-15 bg-sec2 font-Inter">
      <div className="rounded-lg bg-sec2">
        <div className="text-left mb-8">
        <h2 className="text-[40px] md:text-[48px] font-[600] text-gray-900 font-Inter whitespace-nowrap text-left">
  Featured Options
</h2>


        </div>

        
        <div className="grid grid-cols-1 gap-6 md:hidden">
          {/* Card 1 */}
          <div
            className="relative bg-cover bg-center  h-[260px] flex items-center justify-center text-white p-6"
            style={{ backgroundImage: `url(${mobImg1})` }}
          >
            <div className="absolute inset-0 bg-black/20 "></div>
            <div className="relative z-10 text-left">
              <h2 className="text-2xl font-Inter text-[32px] text-[#1C1812] font-[600]">Explore By Fishing</h2>
              <p className="text-[16px] font-Inter text-left text-[#65625E] font-[400] mt-1">
              Proin nibh nisl condimentum id venenatis a condimentum vitae sapien. Tellus in metus vulputate eu sc
              </p>
              <button className="mt-4 px-4 py-2 bg-[#DFDEDD] font-[400] text-[#1C1812] text-[14px] rounded">
                Learn More
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div
            className="relative bg-cover bg-center rounded-lg h-[260px] flex items-center justify-center text-white p-6"
            style={{ backgroundImage: `url(${mobImg2})` }}
          >
            <div className="absolute inset-0 bg-black/20 "></div>
            <div className="relative z-10 text-left">
              <h2 className="text-2xl text-[#1C1812] font-Inter text-[32px] font-[600]">Fly Fishing Experiences</h2>
              <p className="text-[16px]  text-[#65625E] font-[400] mt-1">
              Elit pellentesque habitant morbi tristique senectus et netus et. In hendrerit gravida rutrum quisque
              </p>
              <button className="mt-4 px-4 py-2 bg-[#DFDEDD] font-[400] text-[#1C1812] text-[14px] rounded">
                Learn More
              </button>
            </div>
          </div>

          {/* Card 3 */}
          <div
            className="relative bg-cover bg-center rounded-lg h-[260px] flex items-center justify-center text-white p-6"
            style={{ backgroundImage: `url(${mobImg3})` }}
          >
            <div className="absolute inset-0 bg-black/20 "></div>
            <div className="relative z-10 text-left">
              <h2 className="text-2xl text-[#1C1812] font-Inter text-[32px] font-[600]">Gear Up and Catch More</h2>
              <p className="text-[16px] text-[#65625E] font-[400] mt-1">
                Upgrade your fishing gear and techniques to maximize your chances of a great catch.
              </p>
              <button className="mt-4 px-4 py-2 bg-[#DFDEDD] font-[400] text-[#1C1812] text-[14px] rounded">
                Learn More
              </button>
            </div>
          </div>
        </div>

      
        <div className="hidden md:block">
          <div className="border-b border-black">
            <button
              onClick={() => toggleAccordion(1)}
              className="w-full text-left py-4 font-[400] text-[20px] font-Inter text-[#1C1812] flex justify-between items-center"
            >
              Explore By Fishing
              <span className={`transform transition-transform duration-300 ${openIndex === 1 ? "rotate-180" : ""}`}>
                ▼
              </span>
            </button>
            {openIndex === 1 && (
              <div className="flex border-t border-black ">
                <div>
                  <img alt="Fishing Adventure" className="w-full " src={sec2Img} />
                </div>
                <div className="text-left w-1/2 ml-10 mt-4">
                  <h2 className="text-4xl text-[32px] font-[600]">Explore By Fishing</h2>
                  <p className="text-[#65625E] text-[20px] font-[400] font-Inter mt-2">
                    Discover unique fishing locations and techniques that will enhance your experience on the water.
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
              className="w-full text-left font-Inter font-[400] text-[20px]  py-4 text-[#1C1812] flex justify-between items-center"
            >
              Fly Fishing Experiences
              <span className={`transform transition-transform duration-300 ${openIndex === 2 ? "rotate-180" : ""}`}>
                ▼
              </span>
            </button>
            {openIndex === 2 && (
              <div className="px-10 font-Inter py-4 text-gray-600 border-t border-black">
                Experience the thrill of fly fishing with expert guides and top-tier equipment.
              </div>
            )}
          </div>

          <div className="border-b border-black">
            <button
              onClick={() => toggleAccordion(3)}
              className="w-full text-left font-Inter font-[400] text-[20px]  py-4 text-[#1C1812] flex justify-between items-center"
            >
              Gear Up and Catch More
              <span className={`transform transition-transform duration-300 ${openIndex === 3 ? "rotate-180" : ""}`}>
                ▼
              </span>
            </button>
            {openIndex === 3 && (
              <div className="px-10 font-Inter py-4 text-gray-600 border-t border-black">
                Upgrade your fishing gear and techniques to maximize your chances of a great catch.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedOptions;

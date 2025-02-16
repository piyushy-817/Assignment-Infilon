import fbLogo from "../assets/fb.png";
import instaLogo from "../assets/insta.png";
import linkdLogo from "../assets/linkd.png";
import lightMainLogo from "../assets/LightMainLogo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#1C1812] text-white py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row md:justify-between md:items-center">
        
       
        <div className="flex flex-col md:flex-row items-center md:justify-start md:h-[80px]">
          <img src={lightMainLogo} className="w-[72px] h-[40px] md:w-auto" />

          <ul className="flex flex-wrap justify-center md:ml-6 text-sm space-x-4 md:space-x-6 mt-4 md:mt-0">
            <li>
              <Link to="/faq" className="hover:underline">FAQ</Link>
            </li>
            <li>
              <Link to="/privacy" className="hover:underline">Privacy</Link>
            </li>
            <li>
              <Link to="/support" className="hover:underline">Support</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline">Contact</Link>
            </li>
          </ul>
        </div>

      
        <div className="flex justify-center md:justify-end space-x-4 mt-4 md:mt-0 w-full md:w-auto">
          <a href="">
            <img src={fbLogo} alt="Facebook" className="w-[30px] md:w-[40px]" />
          </a>
          <a href="">
            <img src={instaLogo} alt="Instagram" className="w-[30px] md:w-[40px]" />
          </a>
          <a href="">
            <img src={linkdLogo} alt="LinkedIn" className="w-[30px] md:w-[40px]" />
          </a>
        </div>
      </div>

      
      <p className="text-sm text-center font-Inter text-[#AEADAA] mt-4">
        © 2024 Central Texas Fly Fishing. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;

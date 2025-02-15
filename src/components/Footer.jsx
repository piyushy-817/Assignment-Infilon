import fbLogo from "../assets/fb.png";
import instaLogo from "../assets/insta.png";
import linkdLogo from "../assets/linkd.png";
import lightMainLogo from "../assets/LightMainLogo.png";

const Footer = () => {
  return (
    <footer className="bg-[#1C1812] text-white py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        
        <ul className="flex space-x-6 text-sm mb-4 md:mb-0">
          <img src={lightMainLogo} />
          <div className="flex items-center justify-center ">
            <li>
              <a href="" className="hover:underline mx-6">
                FAQ
              </a>
            </li>
            <li>
              <a href="" className="hover:underline mx-6">
                Privacy
              </a>
            </li>
            <li>
              <a href="" className="hover:underline mx-6">
                Support
              </a>
            </li>
            <li>
              <a href="" className="hover:underline mx-6">
                Contact
              </a>
            </li>
          </div>
        </ul>

        
        <div className="flex space-x-4 -mr-20">
          <a href="">
            <img src={fbLogo} alt="Facebook" className="w-[40px] h-[40px]" />
          </a>
          <a href="">
            <img
              src={instaLogo}
              alt="Instagram"
              className="w-[40px] h-[40px]"
            />
          </a>
          <a href="">
            <img src={linkdLogo} alt="LinkedIn" className="w-[40px] h-[40px]" />
          </a>
        </div>
      </div>
      <p className="text-sm text-center font-Inter text-[#AEADAA] mt-8">
        © 2024 Central Texas Fly Fishing. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;

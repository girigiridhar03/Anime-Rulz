import { FaFacebook } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaTelegram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa";

import "./CSS/Footer.css"

const Footer = () =>{
      return (
         <div className="footer bg-[#1B1B1B] w-[100%] mt-10 py-5 px-5 xl:px-0 relative">
            <div className="w-[100%] max-w-[1800px] mx-auto relative">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:border-b-[1px] sm:border-b-[#ffffff79]">
                   <img src="https://animerulz.pro/images/Animerulzlogo.webp" className="w-[300px] sm:border-r-[1px] sm:border-r-[#ffffff79] pr-3" alt="" />
                <div className="text-[#ffffffa9] flex items-center gap-4 px-3 md:text-lg xl:text-xl">
                    <p className="text-sm md:text-lg mx:text-xl">Follow Us</p>
                    <div className="flex items-center gap-3">
                    <FaFacebook />
                    <IoLogoInstagram />
                    <FaTelegram />
                    <FaTwitter />
                    </div>

                </div>
                </div>

                <div className="text-[#ffffffa9] text-sm px-3 flex gap-4 font-bold my-8 md:text-lg xl:text-xl">
                    <p>Animerulz App</p>
                    <p>Terms of Service</p>
                    <p>DMCA</p>
                    <p>Contact</p>
                </div>

                  <div className="text-[#ffffffa9] text-sm font-bold flex flex-col gap-3 px-3 md:text-lg xl:text-xl">
                    <p>Animerulz does not store any files on our server,we only linked to the media which is hosted on 3rd party services.</p>
                    <p className="flex items-center gap-1"><FaRegCopyright /> 2024 Animerulz.pro All right reserved</p>
                  </div>

             </div>
         </div>
      );
}

export default Footer;
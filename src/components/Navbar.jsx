import { IoMenu } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
const Navbar = () =>{
     return (
        // Navbar Container
        <div className="w-full  py-4 px-5 flex items-center justify-between bg-[#00000096] absolute top-0 left-0 z-10">
           
           {/* Icons and heading */}
            <div className="text-white text-2xl flex items-center gap-3 cursor-pointer">
              <IoMenu />
              <img src="https://animerulz.pro/images/Animerulzlogo.webp" alt="" className="h-[43px] lg:h-[50px]"/>
            </div>

            {/* Search icons and social media icons */}
            <div className="text-white flex gap-5 items-center">
                {/* searchicon and text */}
                <div className="flex items-center gap-5">
                    <div className="text-2xl cursor-pointer">
                    <FaSearch />
                    </div>
                 <div className="hidden md:flex md:flex-col  h-[40px]">
                     <p className="text-sm text-[#ffffff83] cursor-pointer">Follow Us</p>
                     <h5 className="text-base text-[#FA9E12] cursor-pointer">AnimeRulz Group</h5>
                 </div>
                </div>

                {/* Social media */}
                <div className="hidden md:flex items-center gap-2">
                    <div className=" bg-[#1877F2] rounded-full p-2 text-2xl cursor-pointer">
                      <FaFacebook /> 
                    </div>
                    <div className=" bg-[#D41C75] rounded-full p-2 text-2xl cursor-pointer">
                    <FaInstagram />
                    </div>
                    <div className=" bg-[#29B6F6] rounded-full p-2 text-2xl cursor-pointer">
                    <FaTelegram />
                    </div>
                    <div className=" bg-blue-500 rounded-full p-2 text-2xl cursor-pointer">
                    <FaTwitter />
                    </div>
                  
                </div>


            </div>

        </div>
     );
}

export default Navbar;
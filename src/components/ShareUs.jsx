import { FaFacebook } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaShareAlt } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const ShareUs = () =>{
     return (
        <div className="flex flex-col gap-2 lg:px-12">
            <div className=" flex items-center gap-3">
                
                    <img className="w-[90px] " src="https://animerulz.pro/images/share.webp" alt="" />
                
                 <div className="flex flex-col gap-2">
                     <p className="text-[#FAA300] text-lg ">Share Us</p>
                     <p className="text-white text-lg">To your Friends</p>
                 </div>
            </div>
            <div className="px-3 flex items-center gap-3 lg:px-8">
                <button className="bg-[#527ccf] text-white text-[15px] rounded-md min-w-[80px] h-[30px] flex items-center justify-center gap-2 py-1 px-2 hover:-translate-y-1 transition duration-100 ease-linear"><FaFacebook /><span>Share</span></button>
                <button className="bg-[#8d8c8c] text-white text-[15px] rounded-md min-w-[50px] h-[30px] flex items-center justify-center gap-2 py-1 px-2 hover:-translate-y-1 transition duration-100 ease-linear"><MdEmail /><span className="hidden sm:block">Email</span></button>
                <button className="bg-[#96ca48] text-white text-[15px] rounded-md min-w-[70px] h-[30px] flex items-center justify-center gap-2 py-1 px-2 hover:-translate-y-1 transition duration-100 ease-linear"><FaShareAlt /><span className="hidden sm:block">Share</span></button>
                <button className="bg-[#4dd37e] text-white text-[15px] rounded-md min-w-[70px] h-[30px] flex items-center justify-center gap-2 py-1 px-2 hover:-translate-y-1 transition duration-100 ease-linear"><FaWhatsapp /><span className="hidden sm:block">Whatsapp</span></button>
                <button className="bg-[#348db9] text-white text-[15px] rounded-md min-w-[70px] h-[30px] flex items-center justify-center gap-2 py-1 px-2 hover:-translate-y-1 transition duration-100 ease-linear"><FaTelegram /><span className="hidden md:block">Telegram</span></button>
                <button className="bg-[black] text-white text-[15px] rounded-md min-w-[70px] h-[30px] flex items-center justify-center gap-2 py-1 px-2 hover:-translate-y-1 transition duration-100 ease-linear"><FaXTwitter /><span className="hidden md:block">Twitter</span></button>
            </div>
        </div>
     );
}


export default ShareUs;
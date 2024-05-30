import './CSS/NewAdd.css'
import { LuClock4 } from "react-icons/lu";
const NewlyAdded = ()=>{
     return (
        <div className="mt-10">
              <h2 className="text-[#FAA300] py-4 px-5 xl:px-12
         font-bold flex items-center gap-2 text-xl md:text-3xl">Newly Added Series</h2>
         <div className="w-[100%] px-5 xl:px-12 rounded-xl overflow-hidden">
          <div className="anime-bg-image rounded-xl">
              <div className='anime-bg-image2 w-[100%] md:rounded-xl'>
                 <div className='container'>
                     <ul className='text-white flex items-center gap-2'>
                         <li className='border-r-[1px] border-r-[#ffffffa1] text-[#ffffffa1] text-sm pr-2 sm:text-lg'>Action</li>
                         <li className='border-r-[1px] border-r-[#ffffffa1] text-[#ffffffa1] text-sm pr-2 sm:text-lg'>Adventure</li>
                         <li className='border-r-[1px] border-r-[#ffffffa1] text-[#ffffffa1] text-sm pr-2 sm:text-lg'>Comedy</li>
                         <li className='border-r-[1px] border-r-[#ffffffa1] text-[#ffffffa1] text-sm pr-2 sm:text-lg'>Drama</li>
                         <li className='text-[#ffffffa1] text-sm'>Fantasy</li>
                     </ul>
                     <h2 className='text-[#FAA300] text-2xl font-extrabold sm:text-3xl md:text-4xl hover:-translate-y-2 cursor-pointer transition-all duration-300 ease-linear'>One Piece Live Action Netflix Series Season 1</h2>
                     <div className='flex items-center gap-3'> 
                        <button className='bg-[#ffffffc0] text-sm p-1 cursor-pointer min-w-[50px]'>Hindi</button>
                        <button className='bg-[#ffffffc0] text-sm p-1 cursor-pointer min-w-[50px]'>Telugu</button>
                        <button className='bg-[#ffffffc0] text-sm p-1 cursor-pointer min-w-[50px]'>Tamil</button>
                        <button className='bg-[#ffffffc0] text-sm p-1 cursor-pointer min-w-[50px]'>Malayalam</button>
                        <button className='bg-[#ffffffc0] text-sm p-1 cursor-pointer min-w-[50px]'>Bengal</button>
                        <button className='bg-[#ffffffc0] text-sm p-1 cursor-pointer min-w-[50px]'>English</button>
                     </div>
                     <p className='text-[#ffffffc0] text-sm flex items-center gap-1'><span><LuClock4 /></span>Released in 2023</p>
                 </div>
              </div>
          </div>
         </div>
        </div>
     );
}

export default NewlyAdded;
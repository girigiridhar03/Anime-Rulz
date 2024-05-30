import './CSS/TeluguDubb.css'

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';



// import required modules
import { FreeMode } from 'swiper/modules';


const TamilDubbAnime = () =>{

    const Posters = [
        {
            animePoster : 'https://img.flawlessfiles.com/_r/300x400/100/26/f1/26f103d66ca00753a9ee4f3f5bed8754/26f103d66ca00753a9ee4f3f5bed8754.jpg',
            title:'Shangri-La Frontier',
            generes:["Hindi","Tamil"]
        },
        {
            animePoster : 'https://img.flawlessfiles.com/_r/300x400/100/69/08/6908f85a069414d40530042f2cdd8c8a/6908f85a069414d40530042f2cdd8c8a.jpg',
            title:'Dragon Ball Super',
            generes:["Hindi","Telugu","Tamil"]
        },
        {
            animePoster : 'https://img.flawlessfiles.com/_r/300x400/100/8e/66/8e66cc3601ab396c90b1550ef39cfa7f/8e66cc3601ab396c90b1550ef39cfa7f.jpg',
            title:'Darling in the FranXX',
            generes:["Hindi","Telugu","Tamil"]
        },
        {
            animePoster : 'https://img.flawlessfiles.com/_r/300x400/100/9c/c8/9cc864ccccce7f38f7a100627ef21516/9cc864ccccce7f38f7a100627ef21516.jpg',
            title:'Vinland Saga Season2',
            generes:["Hindi","Telugu","Tamil"]
        },
    ]

     return (
        <div className='mt-10'>
        <h2 className="text-[#FAA300] py-4 px-5 xl:px-12
         font-bold flex items-center gap-2 text-xl md:text-3xl">Tamil Dubbed Animes</h2>

        <div className='image-slider hidden lg:block'> 
        <Swiper
        slidesPerView={3}
        spaceBetween={5}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode]}
        className="mySwiper"
        style={{height:"40vh"}}
      >
        {Posters.map(item=>{
          return   <SwiperSlide className=' group hover:bg-[#ffffff1a] rounded-xl'>
            <div className='img-container  '>
            <img src={item.animePoster} className='group-hover:scale-105' alt="" />
            </div>
            <div>
               <h3 className='text-[#FAA300] text-3xl font-bold'>{item.title}</h3>
               
               <div className='flex items-center gap-2'>
               {item.generes.map(elem=>{
                return <p className='text-[#ffffff9d]'>{elem}</p>
               })}
               </div>
              
            </div>
            </SwiperSlide>
        })}
      
       
      </Swiper>
    </div>

    {/* mobile */}
        <div className='image-slider hidden md:block lg:hidden'> 
        <Swiper
        slidesPerView={2}
        spaceBetween={5}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode]}
        className="mySwiper"
        style={{height:"30vh"}}
      >
        {Posters.map(item=>{
          return   <SwiperSlide className=' group hover:bg-[#ffffff1a] rounded-xl'>
            <div className='img-container  '>
            <img src={item.animePoster} className='group-hover:scale-105' alt="" />
            </div>
            <div>
               <h3 className='text-[#FAA300] text-3xl font-bold'>{item.title}</h3>
               
               <div className='flex items-center gap-2'>
               {item.generes.map(elem=>{
                return <p className='text-[#ffffff9d]'>{elem}</p>
               })}
               </div>
              
            </div>
            </SwiperSlide>
        })}
      
       
      </Swiper>
    </div>
      
      {/* small mobile */}
        <div className='image-slider block md:hidden'> 
        <Swiper
        slidesPerView={1}
        spaceBetween={0}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode]}
        className="mySwiper"
        style={{height:"35vh"}}
      >
        {Posters.map(item=>{
          return   <SwiperSlide className=' group hover:bg-[#ffffff1a] rounded-xl'>
            <div className='img-container  '>
            <img src={item.animePoster} className='group-hover:scale-105 object-center' alt="" />
            </div>
            <div>
               <h3 className='text-[#FAA300] text-xl font-bold'>{item.title}</h3>
               
               <div className='flex items-center gap-1'>
               {item.generes.map(elem=>{
                return <p className='text-[#ffffff9d] text-sm'>{elem}</p>
               })}
               </div>
              
            </div>
            </SwiperSlide>
        })}
      
       
      </Swiper>
    </div>

       </div>
     );
};


export default TamilDubbAnime;
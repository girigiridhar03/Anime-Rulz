import './CSS/TeluguDubb.css'

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';



// import required modules
import { FreeMode } from 'swiper/modules';


const HindiDubbAnime = () =>{

    const Posters = [
        {
            animePoster : 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx145064-oNJZtLWdXtvy.jpg',
            title:'Jujutsu kaisen Season 2',
            generes:["Hindi","Telugu","Tamil"]
        },
        {
            animePoster : 'https://img.flawlessfiles.com/_r/300x400/100/3e/13/3e13d0ab2ce8799c9da8ed59548b96e9/3e13d0ab2ce8799c9da8ed59548b96e9.jpg',
            title:'Demon Slayer...',
            generes:["Hindi","Telugu","Tamil"]
        },
        {
            animePoster : 'https://img.flawlessfiles.com/_r/300x400/100/53/d2/53d283223e562b22a14023d8dc1e934d/53d283223e562b22a14023d8dc1e934d.jpg',
            title:'Spy X Family Season 2',
            generes:["Hindi","Telugu","Tamil"]
        },
        {
            animePoster : 'https://cdn.noitatnemucod.net/thumbnail/300x400/100/5e766fbd23e796462040a67203345a7b.jpg',
            title:'Frieren:Beyond Journeys End',
            generes:["Hindi"]
        },
    ]

     return (
        <div className='mt-10'>
        <h2 className="text-[#FAA300] py-4 px-5 xl:px-12
         font-bold flex items-center gap-2 text-xl md:text-3xl">Hindi Dubbed Animes</h2>

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


export default HindiDubbAnime;
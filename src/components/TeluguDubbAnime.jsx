import './CSS/TeluguDubb.css'

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';



// import required modules
import { FreeMode } from 'swiper/modules';


const TeluguDubbAnime = () =>{

    const Posters = [
        {
            animePoster : 'https://animerulz.pro/images/Naruto-img.jpg',
            title:'Naruto',
            generes:["Hindi","Telugu","Bengali","Malayalam"]
        },
        {
            animePoster : 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx151807-m1gX3iwfIsLu.png',
            title:'Solo Leveling',
            generes:["Hindi","Telugu","Tamil"]
        },
        {
            animePoster : 'https://m.media-amazon.com/images/M/MV5BMTMwMDM4N2EtOTJiYy00OTQ0LThlZDYtYWUwOWFlY2IxZGVjXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_QL75_UX380_CR0,4,380,562_.jpg',
            title:'Jujutsu Kaisen',
            generes:["Hindi","Telugu","Tamil"]
        },
        {
            animePoster : 'https://img.flawlessfiles.com/_r/300x400/100/f6/f0/f6f0a1657b0f119bb850fe3b1bbf81b5/f6f0a1657b0f119bb850fe3b1bbf81b5.jpg',
            title:'That Time I Got Reincarnate...',
            generes:["Telugu","Tamil"]
        },
    ]

     return (
        <div className='mt-10'>
        <h2 className="text-[#FAA300] py-4 px-5 xl:px-12
         font-bold flex items-center gap-2 text-xl md:text-3xl">Telugu Dubbed Animes</h2>

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
        style={{height:"45vh"}}
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


export default TeluguDubbAnime;
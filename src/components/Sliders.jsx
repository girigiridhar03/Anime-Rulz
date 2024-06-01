import { MdNotStarted } from "react-icons/md";
import { FaClock } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';


import { Pagination } from 'swiper/modules';

const Sliders = () =>{

    const ImagesArr = [
         {
           tags:"#1 Spotlight",
           bgImage : 'https://animerulz.pro/images/kaijuno8.jpg',
           title: "Kaiju No.8 Telugu Hindi Tamil",
           serie:"T.V.Series",
           time:"24min",
           body:"",
           watchButton : "Watch Now",
           detailsButton : "Details",
           updateTime : "Updated on 13/04/2024"
         },
         {
           tags:"#2 Spotlight",
           bgImage : 'https://animerulz.pro/images/NarutoShippudenSlider.jpg',
           title: "Naruto Shippuden Hindi Tamil Malayalam",
           serie:"T.V.Series",
           time:"24min",
           watchButton : "Watch Now",
           detailsButton : "Details",
           updateTime : "Updated on 13/04/2024"
         },
         {
           tags:"#3 Spotlight",
           bgImage : 'https://animerulz.pro/images/sololevelingSlider.png',
           title: "Solo Leveling Hindi Telugu Tamil Dub",
           serie:"T.V.Series",
           time:"24min",
           watchButton : "Watch Now",
           detailsButton : "Details",
           updateTime : "Updated on 13/04/2024"
         },
         {
           tags:"#4 Spotlight",
           bgImage : 'https://animerulz.pro/images/JujutsuKaisenSlider3.jpg',
           title: "Jujutsu Kaisen Hindi Telugu Tamil Dub",
           serie:"T.V.Series",
           time:"23min",
           watchButton : "Watch Now",
           detailsButton : "Details",
           updateTime : "Updated on 13/04/2024"
         },
         {
           tags:"#5 Spotlight",
           bgImage : 'https://animerulz.pro/images/hunterxhunter.jpg',
           title: "Hunter X Hunter Hindi Dub",
           serie:"T.V.Series",
           time:"24min",
           watchButton : "Watch Now",
           detailsButton : "Details",
           updateTime : "Updated on 13/04/2024"
         },
         {
           tags:"#6 Spotlight",
           bgImage : 'https://animerulz.pro/images/MyHeroAcademiaSlider.jpg',
           title: "My Hero Academia Hindi Telugu Tamil Malayalam Dub",
           serie:"T.V.Series",
           time:"24min",
           watchButton : "Watch Now",
           detailsButton : "Details",
           updateTime : "Updated on 13/04/2024"
         },
         {
           tags:"#7 Spotlight",
           bgImage : 'https://animerulz.pro/images/SpyXFamilySlider.jpg',
           title: "Spy X Family Hindi Telugu Tamil Dub",
           serie:"T.V.Series",
           time:"24min",
           watchButton : "Watch Now",
           detailsButton : "Details",
           updateTime : "Updated on 13/04/2024"
         },
         {
           tags:"#8 Spotlight",
           bgImage : 'https://animerulz.pro/images/OnePieceLiveActionSlider.jpg',
           title: "One Piece Live Action Season 1 Netflix Dub [Hindi, Telugu, Tamil, Malayalam...",
           serie:"T.V.Series",
           time:"60min",
           watchButton : "Watch Now",
           detailsButton : "Details",
           updateTime : "Updated on 13/04/2024"
         },
         {
           tags:"#9 Spotlight",
           bgImage : 'https://animerulz.pro/images/demonslayerslider.jpg',
           title: "Demon Slayer Entertainment District Arc Hindi Telugu Tamil Dub",
           serie:"T.V.Series",
           time:"24min",
           watchButton : "Watch Now",
           detailsButton : "Details",
           updateTime : "Updated on 13/04/2024"
         },
    ]


    return (
        <div className='Swiper-Container'>
          <Swiper
            direction={'vertical'}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {ImagesArr.map(item=> <SwiperSlide key={item.bgImage} style={{background:`url(${item.bgImage})`,backgroundRepeat:'no-repeat',backgroundPosition:'center',width:'100%',height:'100%',backgroundSize:'cover'}} >

              <p className='text-[#ffffff63] text-[.8rem] font-bold'>{item.tags}</p>
              <h2 className='text-[#FAA300] text-2xl font-bold md:text-4xl'>{item.title}</h2>

              <div className='flex items-center gap-1'>
             
              <div className='bg-[#ffffffd8] w-[6px] h-[6px] rounded-full'></div>
              <span className='text-[#ffffffc0] font-bold text-[10px] sm:text-sm'>{item.serie}</span>
               
               
              <div className='bg-[#ffffffd8] w-[6px] h-[6px] rounded-full'></div>
              <span className='text-[#ffffffc0] font-bold text-[10px] sm:text-sm'>{item.time}</span>
                
              </div>
              <div className="text-[#ffffffc0] flex items-center gap-2">
                 <button className="flex items-center bg-[#fAA300] min-w-[80px] py-1 px-5 rounded-3xl gap-2 text-[#000000a6] font-bold cursor-pointer text-[12px] sm:text-sm"><MdNotStarted className="text-black" />{item.watchButton}</button>
                 <button className="flex items-center bg-[#D6D2D0] min-w-[80px] py-1 px-5 rounded-3xl gap-2 text-[#000000a6] font-bold cursor-pointer text-[12px] sm:text-sm">{item.detailsButton}</button>
              </div>
              <div className="text-[#ffffffa9] flex items-center gap-1 text-[10px] sm:text-[.8rem]">
              <FaClock />
              <p className=" font-bold">{item.updateTime}</p>
              </div>
            </SwiperSlide>)}
          </Swiper>
          
        </div>
      );
    
}



export default Sliders
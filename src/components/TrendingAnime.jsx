import './CSS/Slider.css';


import { FaFireAlt } from "react-icons/fa";
import { MdNotStarted } from "react-icons/md";

import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';



import { FreeMode } from 'swiper/modules';


const TrendingAnime = () =>{

    const TrendingAnimeImg = [
        {
            animeimg:"https://cdn.noitatnemucod.net/thumbnail/300x400/100/edfc7fe935b6eac2d704cf5b0a60e356.jpg",
            nextEp:"Next Episode-8 in 3d 2h",
            tv: "T.V",
            ep:"7 episode",
            title:"Kaiju No.8",
            genres:["Action","Adventure","Sci-Fi"],
            watchNow : "Watch Now"
        },
        {
            animeimg:"https://s.yimg.com/ny/api/res/1.2/kwgFlI04miUYlOnDKTuZNQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTEzNTk7Y2Y9d2VicA--/https://media.zenfs.com/en/parade_250/7a3b14711f20dca472b3ee99a37b5e21",
            nextEp:"Next Episode-1107 in 3d 2h",
            tv: "T.V",
            ep:"1106 episode",
            title:"ONE PIECE",
            genres:["Action","Adventure","Comedy"],
            watchNow : "Watch Now"
        },
        {
            animeimg:"https://cdn.noitatnemucod.net/thumbnail/300x400/100/1f06eb0baf5520aa639b546fc189400d.jpg",
            nextEp:"Next Episode-4 in 3d 2h",
            tv: "T.V",
            ep:"3 episode",
            title:"Demonslayer:Kimetsu no Yaiba Hasira...",
            genres:["Action","Adventure","Drama"],
            watchNow : "Watch Now"
        },
        {
            animeimg:"https://cdn.noitatnemucod.net/thumbnail/300x400/100/af4938d7388aad3438e443e74b02531e.jpg",
            nextEp:"Next Episode-5 in 3d 2h",
            tv: "T.V",
            ep:"4 episode",
            title:"My Hero Academia Season 7",
            genres:["Action","Adventure","Sci-Fi"],
            watchNow : "Watch Now"
        },
        {
            animeimg:"https://cdn.noitatnemucod.net/thumbnail/300x400/100/d9bb23228e5a641b5a3e9386382dae3a.jpg",
            nextEp:"Next Episode-9 in 3d 2h",
            tv: "T.V",
            ep:"8 episode",
            title:"WIND BREAKER",
            genres:["Action","Comedy","Drama"],
            watchNow : "Watch Now"
        },
        {
            animeimg:"https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx151807-m1gX3iwfIsLu.png",
            nextEp:"Next Episode-8 in 3d 2h",
            tv: "T.V",
            ep:"12 episode",
            title:"Solo Leveling",
            genres:["Action","Adventure","Fantasy"],
            watchNow : "Watch Now"
        },
        {
            animeimg:"https://cdn.noitatnemucod.net/thumbnail/300x400/100/a7ab15fb2281cce25179cd739112f426.jpg",
            nextEp:"Next Episode-8 in 3d 2h",
            tv: "T.V",
            ep:"9 episode",
            title:"Re:Monster",
            genres:["Action","Adventure","Fantasy"],
            watchNow : "Watch Now"
        },
        {
            animeimg:"https://cdn.noitatnemucod.net/thumbnail/300x400/100/2dc00291c4fcaed8675d6efb7260b916.jpg",
            nextEp:"Next Episode-8 in 3d 2h",
            tv: "T.V",
            ep:"13 episode",
            title:"Ninja Kamui",
            genres:["Action","Adventure","Drama"],
            watchNow : "Watch Now"
        },
        {
            animeimg:"https://cdn.noitatnemucod.net/thumbnail/300x400/100/edfc7fe935b6eac2d704cf5b0a60e356.jpg",
            nextEp:"Next Episode-8 in 3d 2h",
            tv: "T.V",
            ep:"7 episode",
            title:"Kaiju No.8",
            genres:["Action","Adventure","Sci-Fi"],
            watchNow : "Watch Now"
        },
        {
            animeimg:"https://img.flawlessfiles.com/_r/300x400/100/2a/b9/2ab9559ff33e75938f66f35413f67100/2ab9559ff33e75938f66f35413f67100.jpg",
            nextEp:"Next Episode-13 in 3d 2h",
            tv: "T.V",
            ep:"12 episode",
            title:"Blue Exorcist-Shimane Illuminati saga-",
            genres:["Action","Comeedy","Fantasy"],
            watchNow : "Watch Now"
        },
    ];

    const mouseHover = (e) =>{
        e.preventDefault();
        let bodyImg = e.target.style.backgroundImage.split(" ");
 
        let bgBody =  document.body;
         bgBody.style.background = bodyImg;
         bgBody.style.backgroundRepeat = "no-repeat";
         bgBody.style.backgroundPosition = "center";
         bgBody.style.backgroundSize = "cover";
         bgBody.style.backdropFilter = "blur(10px)";
         let animecontent = e.target.querySelectorAll(".anime-content");
        animecontent.forEach(item=>{
           item.style.display = "flex"
        })
        
    };

    const mouseLeave = () =>{
        let bgBody =  document.body;
        bgBody.style.background = "black";
        let animecontent = document.querySelectorAll(".anime-content");
        animecontent.forEach(item=>{
           item.style.display = "none"
        })
    }

     return(
        <>
          <h2 className="text-[#FAA300] py-4 px-5 xl:px-12
           font-bold flex items-center gap-2 text-xl md:text-3xl mt-6">Trending Anime <span><FaFireAlt /></span></h2>

          {/* Images div */}
          {/* large laptop */}
          <div className="slider-container hidden xl:block">

          <Swiper
        slidesPerView={7}
        spaceBetween={10}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode]}
        className="mySwiper"
        style={{height:"30vh"}}
      >
        
        {TrendingAnimeImg.map(item=>{
            return <>
            <SwiperSlide key={item.animeimg} className='relative ' onMouseEnter={mouseHover} onMouseLeave={mouseLeave} style={{background : `url(${item.animeimg})`,backgroundRepeat:'no-repeat',backgroundPosition:'center',width:'20%' ,height: " 100%" ,backgroundSize:"cover"}}>
            <div className='anime-content'>
                <h4 className='border-b-[1px] border-b-black text-md font-semibold pb-2'>{item.nextEp}</h4>
                <div className='flex  gap-2 items-center'>
                   <p>{item.tv}</p>
                   <div className='w-[8px] h-[8px] bg-[#000000d3]  rounded-full'></div>
                   <p>{item.ep}</p>
                </div>
                <h3 className=' text-lg font-bold'>{item.title}</h3>
                <div className='flex mt-2  gap-2 border-b-[1px] border-b-black pb-1'>
                  {item.genres.map(elem=><p key={elem}>{elem}</p>)}
                </div>

                <div className='inline-block mt-auto mx-auto'>
                <button className="flex  items-center bg-[#fAA300] min-w-[80px] py-1 px-5 rounded-3xl gap-2 text-[#000000a6] font-bold cursor-pointer text-sm"><MdNotStarted className="text-black" />{item.watchNow}</button>

                </div>
             </div>
            </SwiperSlide>
            </> 
        })}
      </Swiper>
          </div>

        {/* medium laptop */}
          <div className="slider-container hidden lg:block xl:hidden px-10">

          <Swiper
        slidesPerView={5}
        spaceBetween={10}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode]}
        className="mySwiper"
        style={{height:"30vh"}}
      >
        
        {TrendingAnimeImg.map(item=>{
            return <>
            <SwiperSlide key={item.animeimg} onMouseEnter={mouseHover} onMouseLeave={mouseLeave} style={{background : `url(${item.animeimg})`,backgroundRepeat:'no-repeat',backgroundPosition:'center',width:'20%' ,height: " 100%" ,backgroundSize:"cover"}}>
            <div className='anime-content' style={{gap:"10px"}}>
                <h4 className='border-b-[1px] border-b-black text-sm font-bold pb-2'>{item.nextEp}</h4>
                <div className='flex  gap-2 text-sm items-center'>
                   <p>{item.tv}</p>
                   <div className='w-[8px] h-[8px] bg-[#000000d3]  rounded-full'></div>
                   <p>{item.ep}</p>
                </div>
                <h3 className=' text-md font-bold'>{item.title}</h3>
                <div className='flex mt-1 text-sm gap-2 border-b-[1px] border-b-black pb-1'>
                  {item.genres.map(elem=><p key={elem}>{elem}</p>)}
                </div>

                <div className='inline-block mt-auto mx-auto'>
                <button className="flex  items-center bg-[#fAA300] min-w-[80px] py-1 px-5 rounded-3xl gap-2 text-[#000000a6] font-bold cursor-pointer text-sm"><MdNotStarted className="text-black" />{item.watchNow}</button>

                </div>
             </div>
            </SwiperSlide>
            </> 
        })}
      </Swiper>
          </div>

          {/* Tablets */}
          <div className="slider-container hidden md:block  lg:hidden">

          <Swiper
        slidesPerView={4}
        spaceBetween={10}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode]}
        className="mySwiper"
        style={{height:"30vh"}}
      >
        
        {TrendingAnimeImg.map(item=>{
          return <>
           <SwiperSlide key={item.animeimg} className='relative' onMouseEnter={mouseHover} onMouseLeave={mouseLeave} style={{background : `url(${item.animeimg})`,backgroundRepeat:'no-repeat',backgroundPosition:'center',width:'20%' ,height: " 100%" ,backgroundSize:"cover"}}>
            <div className="overlay1">
           <div className='anime-content'>
                <h4 className='border-b-[1px] border-b-black text-md font-semibold pb-2'>{item.nextEp}</h4>
                <div className='flex  gap-2 items-center'>
                   <p>{item.tv}</p>
                   <div className='w-[8px] h-[8px] bg-[#000000d3]  rounded-full'></div>
                   <p>{item.ep}</p>
                </div>
                <h3 className=' text-lg font-bold'>{item.title}</h3>
                <div className='flex mt-2 gap-2 border-b-[1px] border-b-black pb-1'>
                  {item.genres.map(elem=><p key={elem}>{elem}</p>)}
                </div>

                <div className='inline-block mt-auto mx-auto'>
                <button className="flex  items-center bg-[#fAA300] min-w-[80px] py-1 px-5 rounded-3xl gap-2 text-[#000000a6] font-bold cursor-pointer text-sm"><MdNotStarted className="text-black" />{item.watchNow}</button>

                </div>
             </div>
            </div>
           </SwiperSlide>
          </> 
        })}
      </Swiper>
          </div>

          {/* mobiles */}
          <div className="slider-container  md:hidden">

          <Swiper
        slidesPerView={3}
        spaceBetween={20}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode]}
        className="mySwiper"
        style={{height:"25vh"}}
      >
        
        {TrendingAnimeImg.map(item=>{
            return  <>
            <SwiperSlide key={item.animeimg} className='backgroudImages relative' style={{background : `url(${item.animeimg})`,backgroundRepeat:'no-repeat',backgroundPosition:'center',width:'20%' ,height: " 100%" ,backgroundSize:"cover"}}>
              <div className="overlay1"></div>
            </SwiperSlide>
            
            </>
        })}
      </Swiper>
          </div>
        </>
     );
}


export default TrendingAnime
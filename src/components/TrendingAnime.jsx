import './CSS/Slider.css';


import { FaFireAlt } from "react-icons/fa";


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
            gener:["Action","Adventure","Sci-Fi"],
            watchNow : "Watch Now"
        },
        {
            animeimg:"https://s.yimg.com/ny/api/res/1.2/kwgFlI04miUYlOnDKTuZNQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTEzNTk7Y2Y9d2VicA--/https://media.zenfs.com/en/parade_250/7a3b14711f20dca472b3ee99a37b5e21",
            nextEp:"Next Episode-1107 in 3d 2h",
            tv: "T.V",
            ep:"1106 episode",
            title:"ONE PIECE",
            gener:["Action","Adventure","Comedy"],
            watchNow : "Watch Now"
        },
        {
            animeimg:"https://cdn.noitatnemucod.net/thumbnail/300x400/100/1f06eb0baf5520aa639b546fc189400d.jpg",
            nextEp:"Next Episode-4 in 3d 2h",
            tv: "T.V",
            ep:"3 episode",
            title:"Demonslayer:Kimetsu no Yaiba Hasira...",
            gener:["Action","Adventure","Drama"],
            watchNow : "Watch Now"
        },
        {
            animeimg:"https://cdn.noitatnemucod.net/thumbnail/300x400/100/af4938d7388aad3438e443e74b02531e.jpg",
            nextEp:"Next Episode-5 in 3d 2h",
            tv: "T.V",
            ep:"4 episode",
            title:"My Hero Academia Season 7",
            gener:["Action","Adventure","Sci-Fi"],
            watchNow : "Watch Now"
        },
        {
            animeimg:"https://cdn.noitatnemucod.net/thumbnail/300x400/100/d9bb23228e5a641b5a3e9386382dae3a.jpg",
            nextEp:"Next Episode-9 in 3d 2h",
            tv: "T.V",
            ep:"8 episode",
            title:"WIND BREAKER",
            gener:["Action","Comedy","Drama"],
            watchNow : "Watch Now"
        },
        {
            animeimg:"https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx151807-m1gX3iwfIsLu.png",
            nextEp:"Next Episode-8 in 3d 2h",
            tv: "T.V",
            ep:"12 episode",
            title:"Solo Leveling",
            gener:["Action","Adventure","Fantasy"],
            watchNow : "Watch Now"
        },
        {
            animeimg:"https://cdn.noitatnemucod.net/thumbnail/300x400/100/a7ab15fb2281cce25179cd739112f426.jpg",
            nextEp:"Next Episode-8 in 3d 2h",
            tv: "T.V",
            ep:"9 episode",
            title:"Re:Monster",
            gener:["Action","Adventure","Fantasy"],
            watchNow : "Watch Now"
        },
        {
            animeimg:"https://cdn.noitatnemucod.net/thumbnail/300x400/100/2dc00291c4fcaed8675d6efb7260b916.jpg",
            nextEp:"Next Episode-8 in 3d 2h",
            tv: "T.V",
            ep:"13 episode",
            title:"Ninja Kamui",
            gener:["Action","Adventure","Drama"],
            watchNow : "Watch Now"
        },
        {
            animeimg:"https://cdn.noitatnemucod.net/thumbnail/300x400/100/edfc7fe935b6eac2d704cf5b0a60e356.jpg",
            nextEp:"Next Episode-8 in 3d 2h",
            tv: "T.V",
            ep:"7 episode",
            title:"Kaiju No.8",
            gener:["Action","Adventure","Sci-Fi"],
            watchNow : "Watch Now"
        },
        {
            animeimg:"https://img.flawlessfiles.com/_r/300x400/100/2a/b9/2ab9559ff33e75938f66f35413f67100/2ab9559ff33e75938f66f35413f67100.jpg",
            nextEp:"Next Episode-13 in 3d 2h",
            tv: "T.V",
            ep:"12 episode",
            title:"Blue Exorcist-Shimane Illuminati saga-",
            gener:["Action","Comeedy","Fantasy"],
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
        
    };

    const mouseLeave = () =>{
        let bgBody =  document.body;
        bgBody.style.background = "black";
    }

     return(
        <>
          <h2 className="text-[#FAA300] py-4 px-5 xl:px-12
           font-bold flex items-center gap-2 text-xl md:text-3xl">Trending Anime <span><FaFireAlt /></span></h2>

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
            return  <SwiperSlide onMouseEnter={mouseHover} onMouseLeave={mouseLeave} style={{background : `url(${item.animeimg})`,backgroundRepeat:'no-repeat',backgroundPosition:'center',width:'20%' ,height: " 100%" ,backgroundSize:"cover"}}></SwiperSlide>
        })}
      </Swiper>
          </div>

        {/* medium laptop */}
          <div className="slider-container hidden lg:block xl:hidden">

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
            return  <SwiperSlide onMouseEnter={mouseHover} onMouseLeave={mouseLeave} style={{background : `url(${item.animeimg})`,backgroundRepeat:'no-repeat',backgroundPosition:'center',width:'20%' ,height: " 100%" ,backgroundSize:"cover"}}></SwiperSlide>
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
            return  <SwiperSlide onMouseEnter={mouseHover} onMouseLeave={mouseLeave} style={{background : `url(${item.animeimg})`,backgroundRepeat:'no-repeat',backgroundPosition:'center',width:'20%' ,height: " 100%" ,backgroundSize:"cover"}}></SwiperSlide>
        })}
      </Swiper>
          </div>

          {/* mobiles */}
          <div className="slider-container  md:hidden">

          <Swiper
        slidesPerView={3}
        spaceBetween={10}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode]}
        className="mySwiper"
        style={{height:"26vh"}}
      >
        
        {TrendingAnimeImg.map(item=>{
            return  <SwiperSlide className='backgroudImages' style={{background : `url(${item.animeimg})`,backgroundRepeat:'no-repeat',backgroundPosition:'center',width:'20%' ,height: " 100%" ,backgroundSize:"cover"}}></SwiperSlide>
        })}
      </Swiper>
          </div>
        </>
     );
}


export default TrendingAnime
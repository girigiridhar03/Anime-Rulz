import './CSS/Slider.css';





import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';



import { FreeMode } from 'swiper/modules';


const BestRatedAnime = () =>{

    const TrendingAnimeImg = [
        {
            animeimg:"https://img.flawlessfiles.com/_r/300x400/100/83/da/83da53919d7a20332be01686141f18f6/83da53919d7a20332be01686141f18f6.jpg",
            title:"Attack on Titan..",
        },
        {
            animeimg:"https://img.zorores.com/_r/300x400/100/0d/2d/0d2d0a1d4276e7e2595702dc4cebbda9/0d2d0a1d4276e7e2595702dc4cebbda9.jpeg",
            title:"Fullmetal..",
        },
        {
            animeimg:"https://img.zorores.com/_r/300x400/100/99/3c/993c0361975cce4c7fbb11f8558f9664/993c0361975cce4c7fbb11f8558f9664.jpg",
            title:"Hunter X Hunter",
        },
        {
            animeimg:"https://img.zorores.com/_r/300x400/100/68/35/6835ff30fa46da5612e3adc81f51724e/6835ff30fa46da5612e3adc81f51724e.jpg",
            title:"Steins,Gate",
        },
        {
            animeimg:"https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx140960-vN39AmOWrVB5.jpg",
            title:"Spy X Family",
        },
        {
            animeimg:"https://img.zorores.com/_r/300x400/100/5e/61/5e61f3e7c0045e46b670d31a5bb39c68/5e61f3e7c0045e46b670d31a5bb39c68.jpg",
            title:"Death Note",
        },
        {
            animeimg:"https://img.zorores.com/_r/300x400/100/ce/5e/ce5e539af63e42431621fc66a47fbec1/ce5e539af63e42431621fc66a47fbec1.jpg",
            title:"Cowboy Bebop"
        },
        {
            animeimg:"https://img.zorores.com/_r/300x400/100/9c/c8/9cc864ccccce7f38f7a100627ef21516/9cc864ccccce7f38f7a100627ef21516.jpg",
            title:"Vinland Saga",
        },
        {
            animeimg:"https://img.zorores.com/_r/300x400/100/9d/be/9dbe9a5ae53e4e3ab262ffed4b057670/9dbe9a5ae53e4e3ab262ffed4b057670.jpg",
            title:"Berserk",
        },
        {
            animeimg:"https://img.flawlessfiles.com/_r/300x400/100/10/1e/101ecbb80baf2e42cfb22595e0bee368/101ecbb80baf2e42cfb22595e0bee368.jpg",
            title:"Bleach",
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
           font-bold flex items-center gap-2 text-xl md:text-3xl mt-6">Best Rated Anime</h2>

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
            <div className='overlay1 text-[#ffffff9d]'>
               <p className='bg-[#00000067] w-[100%] text-center  lg:hidden text-sm p-2'>{item.title}</p>
            </div>
            </SwiperSlide>
            
            </>
        })}
      </Swiper>
          </div>
        </>
     );
}


export default BestRatedAnime
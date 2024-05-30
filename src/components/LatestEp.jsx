import './CSS/Slider.css';


import { MdNotStarted } from "react-icons/md";

import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';



import { FreeMode } from 'swiper/modules';


const LastestEp = () =>{

    const LastestEp = [
        {
            animeimg:"https://cdn.noitatnemucod.net/thumbnail/300x400/100/edf74a5bdd04e0764cb71390f83857ad.jpg",
            nextEp:"Next Episode-9 in 3d 2h",
            tv: "T.V",
            ep:"8 episode",
            title:"Viral Hit",
            genres:["Action","Adventure","Comedy"],
            watchNow : "Watch Now"
        },
        {
            animeimg:"https://cdn.noitatnemucod.net/thumbnail/300x400/100/3575eb0dcb2cddf901d19bc62aef9ac8.jpg",
            nextEp:"Next Episode-10 in 3d 2h",
            tv: "T.V",
            ep:"9 episode",
            title:"BARTENDER GLASS of God",
            genres:["Action","Adventure","Comedy"],
            watchNow : "Watch Now"
        },
        {
            animeimg:"https://cdn.noitatnemucod.net/thumbnail/300x400/100/c534bc3db886ec705a2e17fe8e8d0069.jpg",
            nextEp:"Next Episode-9 in 3d 2h",
            tv: "T.V",
            ep:"8 episode",
            title:"KONOSUBA-God's Blessing on This WonderFul..",
            genres:["Action","Adventure","Drama"],
            watchNow : "Watch Now"
        },
        {
            animeimg:"https://cdn.noitatnemucod.net/thumbnail/300x400/100/987156345df524528ff0001d350c407e.jpg",
            nextEp:"Next Episode-59 in 3d 2h",
            tv: "T.V",
            ep:"8 episode",
            title:"Date a Live V",
            genres:["Action","Comedy","Sci-Fi"],
            watchNow : "Watch Now"
        },
        {
            animeimg:"https://cdn.noitatnemucod.net/thumbnail/300x400/100/7cf93a1492ba1cb5d8c76af676267a18.jpg",
            nextEp:"Next Episode-9 in 3d 2h",
            tv: "T.V",
            ep:"8 episode",
            title:"Mysterious Disappearances",
            genres:["Action","Mystery","Romance"],
            watchNow : "Watch Now"
        },
        {
            animeimg:"https://cdn.noitatnemucod.net/thumbnail/300x400/100/a165e967ca566b006c06422df6f99b1f.jpg",
            nextEp:"Next Episode-9 in 3d 2h",
            tv: "T.V",
            ep:"8 episode",
            title:"The Many Sides of Voice Actor Radio",
            genres:["Comedy","Drama","Sci-Fi"],
            watchNow : "Watch Now"
        },
        {
            animeimg:"https://cdn.noitatnemucod.net/thumbnail/300x400/100/bd6bb9ae992618b22c01b1f51e180198.jpg",
            nextEp:"Next Episode-12 in 3d 2h",
            tv: "T.V",
            ep:"12 episode",
            title:"I'm Quitting Heroing",
            genres:["Action","Adventure","Comedy"],
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
            animeimg:"https://cdn.noitatnemucod.net/thumbnail/300x400/100/4bce0354a0a8564007fd97bc7ef41bc8.jpg",
            nextEp:"Next Episode-12 in 3d 2h",
            tv: "T.V",
            ep:"11 episode",
            title:"The Most Heretical Last Boss Queen...",
            genres:["Action","Adventure","Romance"],
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
        console.log(bodyImg)
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
           font-bold flex items-center gap-2 text-xl md:text-3xl mt-6">Latest Epoisde</h2>

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
        
        {LastestEp.map(item=>{
            return <>
            <SwiperSlide className='relative ' onMouseEnter={mouseHover} onMouseLeave={mouseLeave} style={{background : `url(${item.animeimg})`,backgroundRepeat:'no-repeat',backgroundPosition:'center',width:'20%' ,height: " 100%" ,backgroundSize:"cover"}}>
            <div className='anime-content'>
                <h4 className='border-b-[1px] border-b-black text-md font-semibold pb-2'>{item.nextEp}</h4>
                <div className='flex  gap-2 items-center'>
                   <p>{item.tv}</p>
                   <div className='w-[8px] h-[8px] bg-[#000000d3]  rounded-full'></div>
                   <p>{item.ep}</p>
                </div>
                <h3 className=' text-lg font-bold'>{item.title}</h3>
                <div className='flex mt-2  gap-2 border-b-[1px] border-b-black pb-1'>
                  {item.genres.map(elem=><p>{elem}</p>)}
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
        
        {LastestEp.map(item=>{
            return <>
            <SwiperSlide onMouseEnter={mouseHover} onMouseLeave={mouseLeave} style={{background : `url(${item.animeimg})`,backgroundRepeat:'no-repeat',backgroundPosition:'center',width:'20%' ,height: " 100%" ,backgroundSize:"cover"}}>
            <div className='anime-content' style={{gap:"10px"}}>
                <h4 className='border-b-[1px] border-b-black text-sm font-bold pb-2'>{item.nextEp}</h4>
                <div className='flex  gap-2 text-sm items-center'>
                   <p>{item.tv}</p>
                   <div className='w-[8px] h-[8px] bg-[#000000d3]  rounded-full'></div>
                   <p>{item.ep}</p>
                </div>
                <h3 className=' text-md font-bold'>{item.title}</h3>
                <div className='flex mt-1 text-sm gap-2 border-b-[1px] border-b-black pb-1'>
                  {item.genres.map(elem=><p>{elem}</p>)}
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
        
        {LastestEp.map(item=>{
          return <>
           <SwiperSlide className='relative' onMouseEnter={mouseHover} onMouseLeave={mouseLeave} style={{background : `url(${item.animeimg})`,backgroundRepeat:'no-repeat',backgroundPosition:'center',width:'20%' ,height: " 100%" ,backgroundSize:"cover"}}>
           <div className='anime-content'>
                <h4 className='border-b-[1px] border-b-black text-md font-semibold pb-2'>{item.nextEp}</h4>
                <div className='flex  gap-2 items-center'>
                   <p>{item.tv}</p>
                   <div className='w-[8px] h-[8px] bg-[#000000d3]  rounded-full'></div>
                   <p>{item.ep}</p>
                </div>
                <h3 className=' text-lg font-bold'>{item.title}</h3>
                <div className='flex mt-2 gap-2 border-b-[1px] border-b-black pb-1'>
                  {item.genres.map(elem=><p>{elem}</p>)}
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
        style={{height:"25vh"}}
      >
        
        {LastestEp.map(item=>{
            return  <>
            <SwiperSlide className='backgroudImages relative' style={{background : `url(${item.animeimg})`,backgroundRepeat:'no-repeat',backgroundPosition:'center',width:'20%' ,height: " 100%" ,backgroundSize:"cover"}}>
             
            </SwiperSlide>
            
            </>
        })}
      </Swiper>
          </div>
        </>
     );
}


export default LastestEp
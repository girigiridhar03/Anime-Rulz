import './CSS/Slider.css';





import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';



import { FreeMode } from 'swiper/modules';


const MostView = () =>{

    const MostViewImg = [
        {
            animeimg:"https://img.zorores.com/_r/300x400/100/9c/bc/9cbcf87f54194742e7686119089478f8/9cbcf87f54194742e7686119089478f8.jpg",
            title:"Naruto Shippuden",
        },
        {
            animeimg:"https://img.zorores.com/_r/300x400/100/de/bf/debf027d032c6d40b91fab16b2ff9bd4/debf027d032c6d40b91fab16b2ff9bd4.jpg",
            title:"Attack on Titan",
        },
        {
            animeimg:"https://img.flawlessfiles.com/_r/300x400/100/2a/c3/2ac32c050b4dff7747fcc7f64c01edbd/2ac32c050b4dff7747fcc7f64c01edbd.jpg",
            title:"Dragon Ball z",
        },
        {
            animeimg:"https://img.flawlessfiles.com/_r/300x400/100/5d/b4/5db400c33f7494bc8ae96f9e634958d0/5db400c33f7494bc8ae96f9e634958d0.jpg",
            title:"Naruto",
        },
        {
            animeimg:"https://img.zorores.com/_r/300x400/100/bd/5a/bd5ae1d387a59c5abcf5e1a6a616728c/bd5ae1d387a59c5abcf5e1a6a616728c.jpg",
            title:"Bleach",
        },
        {
            animeimg:"https://img.zorores.com/_r/300x400/100/69/08/6908f85a069414d40530042f2cdd8c8a/6908f85a069414d40530042f2cdd8c8a.jpg",
            title:"Dargon Ball Super",
        },
        {
            animeimg:"https://img.zorores.com/_r/300x400/100/82/40/82402f796b7d84d7071ab1e03ff7747a/82402f796b7d84d7071ab1e03ff7747a.jpg",
            title:"Jujutsu Kaisen",
        },
        {
            animeimg:"https://img.flawlessfiles.com/_r/300x400/100/d1/ae/d1ae1f3d3324e24dfdfa64e4c2e687f8/d1ae1f3d3324e24dfdfa64e4c2e687f8.jpg",
            title:"My Hero..",
          
        },
        {
            animeimg:"https://img.zorores.com/_r/300x400/100/f5/8b/f58b0204c20ae3310f65ae7b8cb9987e/f58b0204c20ae3310f65ae7b8cb9987e.jpg",
            title:"Black Cover",
           
        },
        {
            animeimg:"https://img.flawlessfiles.com/_r/300x400/100/f5/d1/f5d173f8317f592c6c70d594829b89e4/f5d173f8317f592c6c70d594829b89e4.jpg",
            title:"One Punch Man",
           
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
           font-bold flex items-center gap-2 text-xl md:text-3xl mt-6">Most Viewed on Animerulz</h2>

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
        
        {MostViewImg.map(item=>{
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
        
        {MostViewImg.map(item=>{
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
        
        {MostViewImg.map(item=>{
          return <>
           <SwiperSlide key={item.animeimg} className='relative' onMouseEnter={mouseHover} onMouseLeave={mouseLeave} style={{background : `url(${item.animeimg})`,backgroundRepeat:'no-repeat',backgroundPosition:'center',width:'20%' ,height: " 100%" ,backgroundSize:"cover"}}>
           <div className='overlay1 text-[#ffffffbd]'>
            
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
        
        {MostViewImg.map(item=>{
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


export default MostView;
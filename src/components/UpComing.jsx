import AnimeCards from "./AnimeCards";



const UpComing = ()=>{

    const UpcomingAnimeImg = [
        {
            animeImg : "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx153800-DoZMzBojzwHz.png",
            title: "One Punch Man"
        },
        {
            animeImg : "https://img.flawlessfiles.com/_r/300x400/100/c1/d2/c1d2716062a2c6fd9b64789dd9817a0e/c1d2716062a2c6fd9b64789dd9817a0e.jpg",
            title: "Haikyu!! Movie:Battie of the..."
        },
        {
            animeImg : "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx156822-Jzo2ITWgm4kM.jpg",
            title: "Tensei Shitara slime Datta ken 3rd..."
        },
        {
            animeImg : "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx166531-jaVlZXnFVIGp.jpg",
            title: "Oshi no Ko Season 2"
        },
        {
            animeImg : "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx139518-WcmNURAvhZTc.png",
            title: "Tsuki ga Michibiku isekai Douchuu.."
        },
        {
            animeImg : "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx168013-t54JWTotNbu9.jpg",
            title: "My Hero Academic Movie-4"
        },
        {
            animeImg : "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx139095-Il3CdEbNuk4N.jpg",
            title: "Failry Tail 100 years Quest"
        },
        {
            animeImg : "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx162796-VddCUfyXLPYH.jpg",
            title: "Kinnikuman Kanpeki Choujin.."
        },
        {
            animeImg : "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx157371-K122OMMSKhXK.jpg",
            title: "Bye Bye,Earth"
        },
    ]


    return(
      <div className="w-[100%] max-w-[1800px] mx-auto mt-10 px-5 xl:px-12">

           <div className="md:flex md:flex-row w-[100%]">

            <div className="w-100% md:w-[80%]">
            <h2 className="text-[#FAA300] py-4 
           font-bold flex items-center gap-2 text-xl md:text-3xl mt-6">UpComing Anime</h2>
              <div className="flex flex-wrap gap-4 w-[100%]">
             {UpcomingAnimeImg.map(item=> <AnimeCards data={item} />)}
              </div>
            </div>


              <div className="w-[100%] md:w-[20%] xl:w-[30%]">
              <h2 className="text-[#FAA300] py-4 
               font-bold flex items-center gap-2 text-xl md:text-3xl mt-6">Genres</h2>
                <div className="w-[100%] flex flex-wrap items-center bg-[#1B1B1B] py-8 px-5 gap-4 rounded-lg">
                    <p className="text-sm text-[#FFDD95] hover:text-[black] hover:bg-[#FFDD95] p-1 rounded-lg font-bold md:text-md">Adventure</p>
                    <p className="text-sm text-[#FC887B] hover:text-[black] hover:bg-[#FC887B] p-1 rounded-lg font-bold md:text-md">Action</p>
                    <p className="text-sm text-[#CCABDA] hover:text-[black] hover:bg-[#CCABDA] p-1 rounded-lg font-bold md:text-md">Comedy</p>
                    <p className="text-sm text-[#A9C9D5] hover:text-[black] hover:bg-[#A9C9D5] p-1 rounded-lg font-bold md:text-md">Drama</p>
                    <p className="text-sm text-[#D0E6A5] hover:text-[black] hover:bg-[#D0E6A5] p-1 rounded-lg font-bold md:text-md">Ecchi</p>
                    <p className="text-sm text-[#FFDD95] hover:text-[black] hover:bg-[#FFDD95] p-1 rounded-lg font-bold md:text-md">Fantacy</p>
                    <p className="text-sm text-[#FC887B] hover:text-[black] hover:bg-[#FC887B] p-1 rounded-lg font-bold md:text-md">Horror</p>
                    <p className="text-sm text-[#CCABDA] hover:text-[black] hover:bg-[#CCABDA] p-1 rounded-lg font-bold md:text-md">Mahou Shoujo</p>
                    <p className="text-sm text-[#A9C9D5] hover:text-[black] hover:bg-[#A9C9D5] p-1 rounded-lg font-bold md:text-md">Macha</p>
                    <p className="text-sm text-[#D0E6A5] hover:text-[black] hover:bg-[#D0E6A5] p-1 rounded-lg font-bold md:text-md">Music</p>
                    <p className="text-sm text-[#FFDD95] hover:text-[black] hover:bg-[#FFDD95] p-1 rounded-lg font-bold md:text-md">Mystery</p>
                    <p className="text-sm text-[#FC887B] hover:text-[black] hover:bg-[#FC887B] p-1 rounded-lg font-bold md:text-md">Psycological</p>
                    <p className="text-sm text-[#CCABDA] hover:text-[black] hover:bg-[#CCABDA] p-1 rounded-lg font-bold md:text-md">Romance</p>
                    <p className="text-sm text-[#A9C9D5] hover:text-[black] hover:bg-[#A9C9D5] p-1 rounded-lg font-bold md:text-md">Sci-Fi</p>
                    <p className="text-sm text-[#D0E6A5] hover:text-[black] hover:bg-[#D0E6A5] p-1 rounded-lg font-bold md:text-md">Slice of Life</p>
                    <p className="text-sm text-[#FFDD95] hover:text-[black] hover:bg-[#FFDD95] p-1 rounded-lg font-bold md:text-md">Sports</p>
                    <p className="text-sm text-[#FC887B] hover:text-[black] hover:bg-[#FC887B] p-1 rounded-lg font-bold md:text-md">Super Natural</p>
                    <p className="text-sm text-[#CCABDA] hover:text-[black] hover:bg-[#CCABDA] p-1 rounded-lg font-bold md:text-md">Thriller</p>
                </div>
              </div>
           </div>
      </div>
    );
}

export default UpComing
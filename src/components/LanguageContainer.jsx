import Card from "./Card";


const LanguageContainer = () =>{

    const hindiDub = [
        {
            animeImg : 'https://img.flawlessfiles.com/_r/300x400/100/2a/c3/2ac32c050b4dff7747fcc7f64c01edbd/2ac32c050b4dff7747fcc7f64c01edbd.jpg',
            title:"Dargon Ball Z",
            ep: "Ep-291",
            tv : "T.V",
            anime:"Anime"
        },
        {
            animeImg : 'https://anime-world.in/files/Poster/2837.webp',
            title:"Avatar The Last Airbender",
            ep: "Ep-20",
            tv : "T.V",
            anime:"Anime"
        },
        {
            animeImg : 'https://anime-world.in/files/Poster/2846.webp',
            title:"Oggy and the Cockroaches",
            ep: "Ep-39",
            tv : "T.V",
            anime:"Anime"
        },
        {
            animeImg : 'https://img.flawlessfiles.com/_r/300x400/100/f2/89/f289c589d1ad9748c16b7d5525a003d7/f289c589d1ad9748c16b7d5525a003d7.jpg',
            title:"Bey Blade Burst",
            ep: "Ep-51",
            tv : "T.V",
            anime:"Anime"
        },
        {
            animeImg : 'https://anime-world.in/files/Poster/467.webp',
            title:"Ben 10 Alien Force",
            ep: "Ep-13",
            tv : "T.V",
            anime:"Anime"
        },
        {
            animeImg : 'https://img.flawlessfiles.com/_r/300x400/100/bf/97/bf976d430933c1d513b263a37b42bc9c/bf976d430933c1d513b263a37b42bc9c.jpg',
            title:"Pokemon The Series:XY",
            ep: "Ep-40",
            tv : "T.V",
            anime:"Anime"
        },
    ];

    const teluguDub = [
        {
            animeImg : 'https://anime-world.in/files/Poster/2750.webp',
            title:"Doremon Season 04",
            ep: "Ep-36",
            tv : "T.V",
            anime:"Cartoon"
        },
        {
            animeImg : 'https://img.flawlessfiles.com/_r/300x400/100/f1/d8/f1d8865bb1dd83e9d23dc4087c523b28/f1d8865bb1dd83e9d23dc4087c523b28.jpg',
            title:"Dragon Ball Z kai",
            ep: "Ep-76",
            tv : "T.V",
            anime:"Anime"
        },
        {
            animeImg : 'https://anime-world.in/files/Poster/2746.webp',
            title:"Shinchan",
            ep: "Ep-52",
            tv : "T.V",
            anime:"Cartoon"
        },
        {
            animeImg : 'https://anime-world.in/files/Poster/2851.webp',
            title:"Kick Buttowski Suburban Daredevil",
            ep: "Ep-20",
            tv : "T.V",
            anime:"Cartoon"
        },
        {
            animeImg : 'https://anime-world.in/files/Poster/2770.webp',
            title:"Avengers Assemble",
            ep: "Ep-26",
            tv : "T.V",
            anime:"Cartoon"
        },
        {
            animeImg : 'https://anime-world.in/files/Poster/2779.webp',
            title:"Ultimate Spiderman",
            ep: "Ep-26",
            tv : "T.V",
            anime:"Cartoon"
        },
    ];

    const TamilDub = [
        {
            animeImg : 'https://anime-world.in/files/Poster/2746.webp',
            title:"Shinchan",
            ep: "Ep-52",
            tv : "T.V",
            anime:"Cartoon"
        },
        {
            animeImg : 'https://anime-world.in/files/Poster/7206.webp',
            title:"Sponge Bob Square Pants Movie",
            ep: "Movie",
            tv : "T.V",
            anime:"Cartoon"
        },
        {
            animeImg : 'https://anime-world.in/files/Poster/2778.webp',
            title:"Spiderman",
            ep: "Ep-26",
            tv : "T.V",
            anime:"Cartoon"
        },
        {
            animeImg : 'https://anime-world.in/files/Poster/2775.webp',
            title:"Ninja Hattori 1981",
            ep: "Ep-51",
            tv : "T.V",
            anime:"Cartoon"
        },
        {
            animeImg : 'https://anime-world.in/files/Poster/2845.webp',
            title:"Phineas and Ferb",
            ep: "Ep-26",
            tv : "T.V",
            anime:"Cartoon"
        },
        {
            animeImg : 'https://anime-world.in/files/Poster/3428.webp',
            title:"The Incredible Hulk",
            ep: "Ep-13",
            tv : "T.V",
            anime:"Cartoon"
        },
    ]


    return (
        <div className="mt-10 flex flex-col lg:flex-row  w-[100%] max-w-[1800px] mx-auto">
            {/* Hindi Dub Section */}
            <div className="px-5 xl:px-12 w-[100%] flex flex-col">
            <h2 className="text-[#FAA300] py-4
            font-bold flex items-center gap-2 text-xl md:text-xl border-b-[1px] border-b-[#ffffff25]">Hindi Dub Series</h2>
              <div className="px-5 md:px-9 lg:px-0">
                {hindiDub.map(item=> <Card data={item}/> )}
              </div>
              <button className="text-[#ffffff8a] text-sm bg-[#3434349d] w-[100%] p-2 inline-block mt-auto">View More</button>
            </div>

             {/* Telugu Dub Section */}

             <div className="px-5 xl:px-12 w-[100%] flex flex-col">
            <h2 className="text-[#FAA300] py-4
            font-bold flex items-center gap-2 text-xl md:text-xl border-b-[1px] border-b-[#ffffff25]">Telugu Dub Series</h2>
              <div className="px-5 md:px-9 lg:px-0">
                {teluguDub.map(item=> <Card data={item}/> )}
              </div>
              <button className="text-[#ffffff8a] text-sm bg-[#3434349d] w-[100%]  p-2 inline-block mt-auto">View More</button>
            </div>

            {/* Tamil Dub Section */}

            <div className="px-5 xl:px-12 w-[100%] flex flex-col">
            <h2 className="text-[#FAA300] py-4
            font-bold flex items-center gap-2 text-xl md:text-xl border-b-[1px] border-b-[#ffffff25]">Tamil Dub Series</h2>
              <div className="px-5 md:px-9 lg:px-0">
                {TamilDub.map(item=> <Card data={item}/> )}
              </div>
              <button className="text-[#ffffff8a] text-sm bg-[#3434349d] w-[100%]  p-2 inline-block mt-auto">View More</button>
            </div>

        </div>
    );
}

export default LanguageContainer;
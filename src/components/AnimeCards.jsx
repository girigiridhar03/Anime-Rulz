const AnimeCards = ({data}) =>{
    return (
        <div className="w-[30%] xl:w-[23%] group">
            <div className="w-[100%] h-[190px] md:h-[250px] lg:h-[300px]" style={{background:`url(${data.animeImg})`,backgroundRepeat:"no-repeat" ,backgroundPosition:'center',backgroundSize:"cover"}}>
                <div className="w-[100%] h-[100%] bg-[#00000046] flex items-end">
                    <p className="text-[#ffffffbd] text-[13px]  bg-[#000000c4] w-[100%]  px-1 group-hover:text-[#FAA300] md:text-md lg:text-lg xl:text-xl font-extrabold">{data.title}</p>
                </div>
            </div>
        </div>
    );
}

export default AnimeCards;
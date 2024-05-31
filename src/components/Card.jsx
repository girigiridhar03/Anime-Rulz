const Card = ({data}) =>{
    return(
        <div className="mt-5 group flex items-center gap-3 cursor-pointer pb-6 border-b-[1px] border-b-[#ffffff25]">
            <div className="w-[70px] overflow-hidden rounded-lg">
                <img src={data.animeImg} alt="" className="w-[100%] group-hover:scale-110 transition ease-linear"/>
            </div>
            <div className="flex flex-col gap-2">
                <h5 className="text-[#FAA300] font-medium text-lg lg:text-md lg:font-medium">{data.title}</h5>
                <div className="flex items-center gap-2 text-sm">
                    <p className="text-[#ffffff8c]">{data.ep}</p>
                    <p className="text-[#ffffff8c]">{data.tv}</p>
                    <p className="text-[#ffffff8c]">{data.anime}</p>
                   
                </div>
            </div>
        </div>
    );
}

export default Card;
"use client"


const SearchMusicResult = ({ searchQuery, data, onLoadMore }) => {
    return (
        <main>
            <section id="search-keyword" className="py-5">
                <p className="text-center">
                    <span>Search result for :</span><span className="font-bold text-lg md text-purple ml-2">{searchQuery}</span>
                </p>
            </section>


            <section id="search-results" className="px-5">
                {data?.results?.map((item, index) => {
                    return (
                        <article key={index} className="flex flex-row bg-white shadow-md rounded-2xl mb-5">
                            <div className="p-3 flex-[1.5] flex items-center relative">
                                <img
                                    alt={item?.trackName}
                                    src={item?.artworkUrl100}
                                    className="w-full h-full object-cover rounded-2xl"
                                />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <img
                                        alt="Play"
                                        src="/icon/play.webp"
                                        className="w-[30%] h-auto"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-[5] flex-col justify-between">
                                <div className="p-3 sm:border-l-transparent sm:p-6">
                                    <a href="#">
                                        <h3 className="font-medium text-xs text-base-500">
                                            {item.artistName}
                                        </h3>
                                    </a>
                                    <a href="#">
                                        <h3 className="font-bold text-lg text-base-500">
                                            {item?.trackName}
                                        </h3>
                                    </a>
                                    <div className="flex items-center w-full mt-5">
                                        <div className="bg-green-500 rounded-[20px] px-5 py-2 mr-2">
                                            <p className="text-center text-white text-xs">{item?.primaryGenreName}</p>
                                        </div>
                                        <div className="flex flex-1 justify-end">
                                            {item?.trackPrice && item?.trackPrice > 0 && (
                                                <div className="flex gap-2 items-center">
                                                    <img src="/icon/currency-dollar.svg" alt="dollar" />
                                                    <p className="text-gold-500">{item?.trackPrice}</p>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </article>

                    )
                })}
                <div className="flex items-center py-7">
                    <button className="bg-[#e2e8f0] rounded-[20px] px-5 py-2 left-0 right-0 mx-auto " onClick={onLoadMore}>
                        <p className="text-center text-base-100">Load More</p>
                    </button>

                </div>
            </section>
        </main>
    )
}


export default SearchMusicResult
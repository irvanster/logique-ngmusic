"use client"

const SearchMusicLoading = () => {
    return (
        <main>
            <section id="search-keyword" className="py-5">
                <div className="w-[50%] h-5 rounded-xl bg-slate-200 left-0 right-0 mx-auto"></div>
            </section>


            <section id="search-results" className="px-5">
                {[1, 2, 3, 4].map((item) => (
                    <article className="flex flex-row bg-white shadow-md rounded-2xl mb-5" key={item}>
                        <div className="p-3 flex-[1.5] flex items-center">
                            <div
                                className="w-full h-full rounded-2xl bg-slate-200"
                            />
                        </div>

                        <div className="flex flex-[5] flex-col justify-between">
                            <div className="p-3 sm:border-l-transparent sm:p-6">
                                <div className="bg-slate-200 w-[40%] h-2 rounded-[20px] px-5 py-2 mr-2 mb-2" />
                                <div className="bg-slate-200 w-[80%] h-5 rounded-[20px] px-5 py-2 mr-2" />
                                <div className="flex items-center w-full mt-5">
                                    <div className="bg-slate-200 w-[30%] h-5 rounded-[20px] px-5 py-2 mr-2" />
                                    <div className="flex flex-1 justify-end">
                                        <div className="flex gap-2 items-center">
                                            <div className="bg-slate-200 w-[100%] h-5 rounded-[20px] px-5 py-2 mr-2" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </article>
                ))}
            </section>
        </main>
    )
}


export default SearchMusicLoading
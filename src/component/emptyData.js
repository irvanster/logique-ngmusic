const EmptyData = ({ title = "Data Pencarian Tidak ada", subtitle = "Coba lakukan Pencarian Kembali ya.", searchQuery }) => {
    return (
        <div>
            {searchQuery && (
                <section id="search-keyword" className="py-5">
                    <p className="text-center">
                        <span>Search result for :</span><span className="font-bold text-lg md text-purple ml-2">{searchQuery}</span>
                    </p>
                </section>
            )}
            <div className="flex flex-col justify-center items-center py-10">
                <img src="/logo.webp" alt="ngmusic" className="invert opacity-[0.5] mb-5" />
                <h1 className="font-bold text-xl text-base-100">{title}</h1>
                <h2 className="font-light text-base-100">{subtitle}</h2>
            </div>
        </div>
    )
}


export default EmptyData
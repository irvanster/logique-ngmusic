"use client"


import { useSearchMusic } from "@/queries/music/useGetMusic";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import SearchMusicLoading from "./searchMusicLoading";
import SearchMusicResult from "./searchMusicResult";
import EmptyData from "../emptyData";
import { useAtom } from "jotai";
import { limitQueryAtom, termQueryAtom } from "@/helpers/atoms";

const SearchMusicList = () => {
    const searchParams = useSearchParams()
    const [termSearchAtomValue] = useAtom(termQueryAtom)
    const getSearchParam = searchParams.get('search')


    const [termSearch, setTermSearch] = useState(getSearchParam)
    const [limit, setLimit] = useState(4);

    const { data, isSuccess, isPending, isLoading, error, refetch, isRefetching, } = useSearchMusic({
        term: termSearch,
        country: "US",
        limit: limit
    });

    useEffect(()=> {
        setTermSearch(termSearchAtomValue || getSearchParam)
    },[termSearchAtomValue])
    console.log(termSearchAtomValue, termSearch)
    const handleLoadMore = () => {
        setLimit(limit + 4);
    };

    // useEffect(() => {
    //     if (search !== termSearch) {
    //         setTermSearch(search);
    //         refetch();
    //     }
    // }, [limit, search])

    useEffect(() => {
        refetch()
    }, [limit])
    if (isPending) {
        return (
            <SearchMusicLoading />
        )
    }
    if (!isPending && data?.resultCount === 0) {
        return (
            <EmptyData title="Data Pencarian Tidak ada" subtitle="Coba lakukan Pencarian Kembali ya." searchQuery={termSearch} />
        )
    }
    return (
        <SearchMusicResult searchQuery={termSearch} data={data} onLoadMore={handleLoadMore} />
    )
}


export default SearchMusicList
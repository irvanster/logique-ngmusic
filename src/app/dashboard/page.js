"use client"

import Navbar from "@/component/navbar";
import SearchMusicList from "@/component/searchMusic/searchMusicList";
import { Suspense } from "react";


const Dashboard = () => {

    return (
        <div>
            <Navbar />
            <Suspense>
                <SearchMusicList />
            </Suspense>
        </div>
    )
}


export default Dashboard
"use client"
import SearchMusicForm from "@/component/searchMusic/searchMusicForm"
import { Suspense } from "react"

const Home = () => {

  return (
    <div className="bg-gradient-to-br from-primary-500 to-primary-200 h-[100dvh]">
      <div className="flex flex-col h-full gap-1 p-5">
        <div className="flex justify-center items-center flex-1">
          <img src="/logo.webp" alt="ngmusic" />
        </div>
        <Suspense>
          <SearchMusicForm />
        </Suspense>
      </div>

    </div>
  )
}


export default Home
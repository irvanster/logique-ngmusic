"use client"
import { useRouter } from "next/navigation"
import SearchMusicModal from "./searchMusic/searchMusicModal"
import { useState } from "react"
import { useAtom } from "jotai"
import { openModalAtom } from "@/helpers/atoms"

const Navbar = () => {
    const router = useRouter()
    const [openModal, setOpenModal] = useAtom(openModalAtom)
    return (
        <nav className="bg-gradient-to-br from-primary-500 to-primary-200 rounded-bl-[30%] rounded-br-[30%] shadow-sm shadow-primary-opacity navbar">
            <div className="flex flex-row justify-between p-5 pb-6">
                <div>
                    <img src="/icon/menu.svg" alt="menu" />
                </div>
                <div className="flex items-center text-white" onClick={() => router.replace('/')}>
                    <img src="/icon/ngmusic.svg" alt="ngmusic" />
                </div>
                <button className="flex items-center text-white" onClick={() => {
                    setOpenModal(true)
                }}>
                    <img src="/icon/search.svg" alt="search" />
                </button>
                <SearchMusicModal isOpen={openModal} closeModal={() => setOpenModal(false)} />
            </div>
        </nav>
    )
}

export default Navbar
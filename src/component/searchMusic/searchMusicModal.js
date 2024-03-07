'use client'
import { useState } from 'react';
import SearchMusicForm from './searchMusicForm';

const SearchMusicModal = ({ isOpen = false, openModal = () => { }, closeModal = () => { } }) => {
    if (isOpen) {
        return (
            <div className="fixed inset-0 z-10 overflow-y-auto bg-dark-opacity">
                <button onClick={closeModal} className="text-white right-0 absolute p-5 hover:text-gray-300 focus:outline-none">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>
                <div className="flex items-center justify-center min-h-screen">
                    <div className="relative w-full p-8">
                        <p className='text-center text-white font-bold text-xl mb-10'>Search</p>
                        <SearchMusicForm />
                    </div>
                </div>
            </div>
        )
    }
    return
};

export default SearchMusicModal;

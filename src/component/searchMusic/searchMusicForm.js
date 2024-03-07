
"use client"
import { countryQueryAtom, limitQueryAtom, openModalAtom, termQueryAtom } from "@/helpers/atoms"
import { useSearchMusic } from "@/queries/music/useGetMusic"
import { useAtom } from "jotai"
import { useRouter, useSearchParams } from "next/navigation"
import { useState } from "react"


const SearchMusicForm = () => {
    const router = useRouter()
    const searchParams = useSearchParams()
    const getSearchParam = searchParams.get('search')

    const [termSearchAtomValue, setTermSearchAtom] = useAtom(termQueryAtom)
    const [termSearch, setTermSearch] = useState(termSearchAtomValue || getSearchParam)
    const [countrySearch] = useAtom(countryQueryAtom)
    const [_, setOpenModal] = useAtom(openModalAtom)
    const [limitSearch] = useAtom(limitQueryAtom)

    const { refetch } = useSearchMusic({
        term: termSearch,
        country: countrySearch,
        limit: limitSearch
    });

    const onSearch = async (e) => {
        e.preventDefault()

        let termInput = termSearch?.trim()

        if (termInput?.length == 0) {
            alert("search can't be empty")
        } else {
            refetch()
            setTermSearchAtom(e.target.inputTerm.value)
            router.push(`/dashboard?search=${termSearch}`)
            setOpenModal(false)
        }

    }

    return (
        <form
            className="flex flex-col gap-5 justify-center items-center w-full"
            onSubmit={onSearch}
        >
            <div className="w-full md:max-w-[50%]">
                <input
                    name="inputTerm"
                    className="bg-white rounded-[20px] text-center placeholder-text-base-100 w-full px-5 py-2" placeholder="Artist / Album / Title"
                    required
                    value={termSearch}
                    onChange={(e) => {
                        setTermSearch(e.target.value)
                    }}
                />
            </div>
            <button className="bg-gradient-to-br from-primary-500 to-primary-200 rounded-[20px] w-full md:max-w-[50%] px-5 py-2">
                <p className="text-center text-white ">Search</p>
            </button>
        </form>
    )
}

export default SearchMusicForm
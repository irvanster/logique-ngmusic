import { atom } from "jotai";

export const openModalAtom = atom(false)
export const refetchSearchMusicAtom = atom(false)
export const termQueryAtom = atom('')
export const countryQueryAtom = atom('US')
export const limitQueryAtom = atom(4)
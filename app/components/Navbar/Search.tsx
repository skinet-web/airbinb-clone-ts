'use client'

import React from 'react'
import { BiSearch } from 'react-icons/bi'

const Search = () => {
  return (
    <div
    className='
    border-slate-300
    w-full
    md:w-auto
    shadow-sm
    py-2
    hover:shadow-md
    transition
    border-[1px]
    rounded-full
    cursor-pointer
    '
    >
        <div className='flex flex-row items-center justify-between'>
            <div className='text-sm font-semibold px-6'>
                Anywhere
            </div>
            <div className='hidden sm:block text-sm font-semibold px-6 
            border-x-[1px] flex-1 text-center'>
                Anyweek
            </div>
            <div className='flex flex-row text-sm pl-6 pr-2 text-gray-600 items-center gap-3'>
                <div className='hidden sm:block'>
                    Add guests
                </div>
                <div className='p-2 bg-rose-500 rounded-full text-white'>
                    <BiSearch size={18} />
                </div>
            </div>        
        </div>
        
    </div>
  )
}

export default Search
import React from 'react'
import {BiWorld, BiDotsVerticalRounded} from 'react-icons/bi'
import {AiOutlineMenu} from 'react-icons/ai'
import Image from 'next/image'
import Avatar from '../Avatar'

const UserMenu = () => {
  return (
    <div className='relative'>
      <div className='flex flex-row justify-center items-center gap-3'>
        <div className='hidden md:block text-sm font-semibold py-3 px-4 
        rounded-full hover:bg-neutral-100 transition cursor-pointer'>
            Airbnb your home
        </div>
        <div className='py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer'>
            <BiWorld />
        </div>
        <div className='flex justify-center items-center border-[1px] rounded-full 
        hover:shadow-sm transition cursor-pointer gap-3 border-neutral-200'>
            <AiOutlineMenu/>            
            <div>
                <Avatar />
            </div>
        </div>
      </div>
    </div>
  )
}

export default UserMenu
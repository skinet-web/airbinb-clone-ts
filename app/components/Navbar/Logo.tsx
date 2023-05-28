'use client'

import React from 'react'
import Image from 'next/image'

const Logo = () => {
  return (
    <div className='md:mr-2'>
      <Image 
      className='cursor-pointer hidden md:block'
      src='/images/logo.png' 
      width='100'
      height='100'
      alt = 'Logo'/>
    </div>
  )
}

export default Logo
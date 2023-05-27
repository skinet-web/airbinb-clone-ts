'use client'

import React from 'react'
import Image from 'next/image'

const Avatar = () => {
  return (
    <div>
        <Image 
                className='rounded-full '
                width = '30'
                height = '30'
                src='/images/placeholder.jpg' 
                alt='profile picture'
            />            
    </div>
  )
}

export default Avatar
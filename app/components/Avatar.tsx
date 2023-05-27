import React from 'react'
import Image from 'next/image'

const Avatar = () => {
  return (
    <div>
        <Image 
                className='rounded-full '
                width = '50'
                height = '50'
                src='/images/placeholder.jpg' 
                alt='profile picture'
            />            
    </div>
  )
}

export default Avatar
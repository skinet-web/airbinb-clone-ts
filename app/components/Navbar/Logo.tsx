'use client'

import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const Logo = () => {
  const router = useRouter()

  return (
    <div className='md:mr-2'>
      <Image
      onClick={() => router.push('/')} 
      className='cursor-pointer hidden md:block'
      src='/images/logo.png' 
      width='100'
      height='100'
      alt = 'Logo'/>
    </div>
  )
}

export default Logo
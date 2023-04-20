import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import indoLogo from '../public/indominologo1.png'
import {AiOutlineMenu} from 'react-icons/ai'

function Navbar() {
  return (
    <div>
        <div className='flex items-center justify-between'>
            <Link href='/'>
                <Image className='cursor-pointer'
                src={indoLogo}
                alt='/' 
                width='180' 
                height='60' 
                />
            </Link>
            <h4 className='hidden md:block md:text-[#ddcfcf]'>Indomino Farms</h4>
            <AiOutlineMenu className='text-white text-3xl mr-14 md:hidden' />
        </div>
    </div>
  )
}

export default Navbar;
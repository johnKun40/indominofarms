import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import indoLogo from '../public/indlogo-re.png'
import {AiOutlineMenu} from 'react-icons/ai'
import {TbGridDots} from 'react-icons/tb'

function Navbar() {
  return (
    <div>
        <div className='flex p-10 w-screen items-center justify-between lg:justify-start md:gap-2'>
            <Link href='/'>
                <Image className='cursor-pointer'
                src={indoLogo}
                alt='/' 
                width='100' 
                height='50' 
                />
            </Link>
            <h3 className='hidden lg:block md:text-[#ddcfcf] md:text-xl'>Indomino Farms</h3>
            <AiOutlineMenu className='text-[#ddcfcf] text-3xl md:hidden' />

            <ul className='hidden md:flex md:flex-row lg:max-w-[800px] md:gap-8 md:justify-start lg:ml-32 md:text-[#ddcfcf] md:font-bold'>
              <li className='hover:underline'>Home</li>
              <li>Products</li>
              <li>About Us</li>
              <li>Contact</li>
            </ul>

            <TbGridDots className='hidden cursor-pointer md:block text-3xl text-[#ddcfcf] lg:flex-auto lg:mr-[-500px]' />
        </div>
        <div>
        </div>
    </div>
  )
}

export default Navbar;
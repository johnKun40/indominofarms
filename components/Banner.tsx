import React from 'react'
import Navbar from './Navbar'
import Image from 'next/image'
import roosterpic from '../public/assets/roosterbanner.png'

function Banner() {
  return (
    <div className='bg-[#d73a3a] w-[100%] h-[53vh] md:h-[55vh] lg:h-[95vh] lg:flex lg:flex-col lg:justify-start lg:items-center'>
        <Navbar />
        <div className='md:grid md:grid-cols-2 md:mt-10 lg:mx-20'>
          <div className='hidden md:grid md:grid-cols-3 lg:h-36 md:items-center md:w-[600px] gap-y-6'>
            <div className='oval'>
             <p className='rot'>Organic Eggs</p>
            </div>
            <div className='oval'>
             <p className='rot'>Organic Eggs</p>
            </div>
            <div className='oval'>
             <p className='rot'>Organic Eggs</p>
            </div>
            <div className='oval'>
             <p className='rot'>Organic Eggs</p>
            </div>
            <div className='oval'>
             <p className='rot'>Organic Eggs</p>
            </div>
            <p className='text-[#ddcfcf] md:col-start-1 md:col-span-3 md:pt-10 lg:pt-22'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, dolores culpa provident veniam praesentium eos distinctio alias magnam officiis molestiae ex? Repudiandae ipsa ducimus dicta laboriosam ullam nam accusamus accusantium.</p>
          </div>


          <Image 
          src={roosterpic}
          alt='/' 
          width='200' 
          height='350'
          className='ml-40 md:col-end-7 md:col-span-2  overflow-hidden lg:h-[350px] lg:w-[500px]'
          />
        </div>
        <p className='text-[#ddcfcf] content-stretch text-center uppercase w-[100%] text-6xl font-bold md:pt-8 lg:text-[200px]'>Poultry <span className='text-4xl lg:text-[120px]'>Farm</span></p>
    </div>
  )
}

export default Banner
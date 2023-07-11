import React from 'react'
import Image from 'next/image'
import chickenpic from '../public/assets/chicken.jpg'
import fieldpic from '../public/assets/field.jpg'

function Choose() {
  return (
    <div>
        <div className='w-screen lg:p-10 text-[#268a2d]'>
            <p className='uppercase pt-10 px-3'>choose the best</p>
            <p className='px-3 mt-2 font-bold text-3xl lg:text-5xl lg:w-[800px]'>Here, You Can Find a Range Of Our Products</p>
            <div className='relative w-screen p-3'>
                <Image
                src={chickenpic}
                alt="/"
                width="230"
                height="200"
                className='absolute z-20 top-28 lg:left-[15rem] lg:h-[500px] lg:w-[450px]'
                />
                <Image
                src={fieldpic}
                alt="/"
                width="230"
                height="200"
                className='absolute z-10 left-36 lg:left-[50rem] lg:top-[-8rem] lg:h-[500px] lg:w-[500px] bg-fuchsia-900'
                />
                <p className='absolute z-20 top-[30rem] lg:w-[500px] lg:left-[50rem]'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non, quos quam tempora sapiente molestias quo itaque nulla nihil ducimus libero consectetur labore animi odio, veritatis architecto voluptatibus illo. Unde, dolore.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Choose
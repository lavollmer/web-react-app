import React from 'react'
import { MdWbSunny } from "react-icons/md";
import { FaLocationCrosshairs } from "react-icons/fa6";

type Props = {}

export default function Navbar({}: Props) {
  return (
    // sticky = stick navbar on position, left-0 position of navbar
    <nav className=' shadow-sm sticky top-0 z-50 bg-white'>
      <div className='h-[80px] w-full flex justify-between items-center max-w-7xl px-3 mx-auto'>
        <p className='flex items-center justify-center gap-2'>
          <h2 className='text-gray-500 text-3xl'>
            Weather
            <MdWbSunny className='text-3xl mt-1 text-yellow-300' />
          </h2>
        </p>
        <section className='flex gap-2 items-center'>
<FaLocationCrosshairs className='text-2xl text-gray-400 hover:opacity-80 cursor-pointer' />
        </section>
      </div>
</nav>
  )
}
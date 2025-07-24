import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav className='flex justify-between items-center p-4 bg-violet-500 text-white font-mono' >
        <h1 className='text-white-800 text-3xl font-extrabold'>Tasklet</h1>
        <ul className='flex justify-between items-center p-4 bg-violet-500 text-white gap-6'>
            <li className='font-semibold text-lg transition-all duration-100 hover:font-bold cursor-pointer'>Home</li>
            <li className='font-semibold text-lg transition-all duration-100 hover:font-bold cursor-pointer'>About</li>
            <li className='font-semibold text-lg transition-all duration-100 hover:font-bold cursor-pointer'>Contact Us</li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar

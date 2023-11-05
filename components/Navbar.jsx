import Image from 'next/image'
import React from 'react'
import Logo from '../assets/images/logo.svg';

const Navbar = () => {
  return (
    <div className='navbar bg-base-100'>
      <div className='navbar-start'>
        <button className='btn btn-ghost'>
          <Image src={Logo} alt='logo'/>
        </button>
        {/* Main Navbar */}
        <div className='hidden lg:flex'>
          <ul className='menu menu-horizontal px-1 gap-8'>
            <li><button>Featuring</button></li>
            <li><button>Pricing</button></li>
            <li><button>Resources</button></li>
          </ul>
        </div>
      </div>
      <div className='navbar-end hidden lg:flex gap-2'>
        <button className='btn rounded-full log-in-btn border-2 border-transparent hover:border-slate-700'>Login</button>
        <button className='btn rounded-full sign-up-btn'>Sign Up</button>
      </div>
      {/* Dropdown */}
      <div className='navbar-end lg:hidden'>
        <details  className="dropdown dropdown-end">
          <summary tabIndex={0} className="btn btn-ghost">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
          </summary>
          <ul tabIndex={0} className="menu menu-lg dropdown-content mt-1 z-[1] -translate-x-10 shadow rounded-box w-96 text-white p-8 gap-2">
            <li className='self-center'><a>Featuring</a></li>
            <li className='self-center'><a>Pricing</a></li>
            <li className='self-center'><a>Resources</a></li>
            <div className='h-[1px] bg-gray-500 my-4 w-full'></div>
            <li><button className='btn btn-ghost rounded-full hover:text-white border-2 border-transparent hover:border-white'>Login</button></li>
            <li><button className='btn rounded-full w-full hero-btn border-0 text-white'>Sign Up</button></li>
          </ul>
        </details>
      </div>
    </div>
  )
}

export default Navbar
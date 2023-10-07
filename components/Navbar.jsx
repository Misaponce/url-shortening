import Image from 'next/image'
import React from 'react'
import Logo from '../assets/images/logo.svg';

const Navbar = () => {
  return (
    <div className='navbar bg-base-100'>
      <div className='navbar-start'>
        <button className='btn btn-ghost'>
          <Image src={Logo}/>
        </button>
        {/* Main Navbar */}
        <div className='hidden lg:flex'>
          <ul className='menu menu-horizontal px-1'>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
          </ul>
        </div>
      </div>
      <div className='navbar-end hidden lg:flex'>
        <button className='btn btn-ghost hover:btn-outline rounded-full'>Login</button>
        <button className='btn rounded-full'>Sign Up</button>
      </div>
      {/* Dropdown */}
      <div className='navbar-end lg:hidden'>
        <details  className="dropdown dropdown-end">
          <summary tabIndex={0} className="btn btn-ghost">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
          </summary>
          <ul tabIndex={0} className="menu menu-lg dropdown-content mt-1 z-[1] shadow rounded-box w-60">
            <li><a>Homepage</a></li>
            <li><a>Portfolio</a></li>
            <li><a>About</a></li>
            <li><button className='btn btn-ghost hover:btn-outline rounded-full'>Login</button></li>
            <li><button className='btn rounded-full'>Sign Up</button></li>
          </ul>
        </details>
      </div>
    </div>
  )
}

export default Navbar
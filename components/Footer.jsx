import Image from 'next/image'
import React from 'react'
import Logo from '../assets/images/logo.svg';
import Link from 'next/link';
import { footerLinks } from '@/constants';

const Footer = () => {
  return (
    <footer className='flex flex-col
    text-black-100 border-t 
    border-gray-100'>
      <div className='text-white flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10'>
        <div className="flex flex-col 
              justify-start items-start gap-6 sm:border-r px-5">
              <Link href="/">
                <Image src={Logo} className='mt-4 object-contain'alt='logo'/>
              </Link>                    
              <p className="text-base 
              text-gry-700 sm:me-2">
                  Shortly 2023 <br/>
                  All rights reserved &copy;
              </p>
        </div>
        {/* Links */}
        <div className='flex-1 w-full flex justify-center md:justify-end flex-wrap max-md:mt-10 gap-20 border-t sm:border-r sm:border-t-0 border-gray-100'>
          {footerLinks.map((link) => (
            <div
            key={link.title}
            className='flex flex-col gap-3 mt-3'>
              <h3 className='font-bold'>{link.title}</h3>

              {link.links.map((item) => (
                <Link
                  key={item.title}
                  href={item.url}
                  className='flex flex-col gap-6 text-base min-w-[170px] text-gray-500'
                >
                  {item.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
        {/* Footer Rights */}
        <div className="flex justify-between
              items-center flex-col mt-10 border-t
              border-gray-100 sm:border-t-0 sm:px-16 px-6 py-10">
            <div className="attribution mt-auto mb-1">
                Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
                Coded by <a href="https://portofolio-misaponce.vercel.app/">Misael Ponce</a>.
            </div>
            <div className="flex flex-1 sm:justify-end justify-center max-sm:mt-4 sm:ms-2 gap-10">
                <Link 
                href="/"
                className="text-gray-500 text-sm">
                    Privacy Policy
                </Link>
                <Link 
                href="/"
                className="text-gray-500 text-sm">
                    Terms of Use
                </Link>
            </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
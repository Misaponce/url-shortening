import Image from 'next/image'
import React from 'react'
import Logo from '../assets/images/logo.svg';
import Link from 'next/link';
import { footerLinks } from '@/constants';

const Footer = () => {
  return (
    <div className='footer text-white flex flex-col items-center p-12'>
      <Image src={Logo} className='mt-4'/>
      <div>
        {footerLinks.map((link) => (
          <div
          key={link.title}
          className='flex flex-col justify-center items-center'>
            <h3 className='font-bold'>{link.title}</h3>

            {link.links.map((item) => (
              <Link
                key={item.title}
                href={item.url}
              >
                {item.title}
              </Link>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Footer
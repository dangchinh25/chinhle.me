import Link from 'next/link';
import React from 'react';
import NavbarButton from './NavBarButton';
import { LINK } from '@/const';

export default function Navbar() {
  return (
    <div className='shadow-md w-full md:h-10 rounded mb-5 flex flex-col md:flex-row justify-end'>
      <Link className='md:mr-auto' href='/'>
        <NavbarButton>
          About
        </NavbarButton>
      </Link>
      <Link href='/projects'>
        <NavbarButton>
          Projects
        </NavbarButton>
      </Link>
      <Link href='/likes'>
        <NavbarButton>
          Likes
        </NavbarButton>
      </Link>
      <Link href={LINK.WIKI}>
        <NavbarButton>
          Wiki
        </NavbarButton>
      </Link>
      <Link href='/now'>
        <NavbarButton>
          Now
        </NavbarButton> 
      </Link>
      <Link href='/contact'>
        <NavbarButton>
          Contact
        </NavbarButton> 
      </Link>
    </div>
  );
}



import Link from 'next/link';
import React from 'react';
import NavbarButton from './NavBarButton';

export default function Navbar() {
  return (
    <div className='shadow-md w-full h-10 rounded mb-5 flex flex-row justify-end px-2'>
      <NavbarButton className='mr-auto'>
        <Link href='/'>
          About
        </Link>
      </NavbarButton>
      <NavbarButton className=''>
        <Link href='https://wiki.chinhle.me'>
          Wiki
        </Link>
      </NavbarButton>
      <NavbarButton>
        <Link href='/projects'>
          Projects
        </Link>
      </NavbarButton>
      <NavbarButton>
        <Link href='likes'>
          Likes
        </Link>
      </NavbarButton>
    </div>
  );
}



import Link from 'next/link';
import React from 'react';
import NavbarButton from './NavBarButton';

export default function Navbar() {
  return (
    <div className='shadow-md w-full h-10 rounded mb-5 flex flex-row justify-end'>
      <Link className='mr-auto' href='/'>
        <NavbarButton>
          About
        </NavbarButton>
      </Link>
      <Link href='/projects'>
        <NavbarButton>
          Projects
        </NavbarButton>
      </Link>
      <Link href='likes'>
        <NavbarButton>
          Likes
        </NavbarButton>
      </Link>
      <Link href='https://wiki.chinhle.me'>
        <NavbarButton className=''>
          Wiki
        </NavbarButton>
      </Link>
    </div>
  );
}



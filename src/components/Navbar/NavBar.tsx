import Link from 'next/link';
import React from 'react';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { cn } from '@/lib/utils';
import { LINK } from '@/const';

const NavigationMenuItem = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <NavigationMenu.Item>
    <Link href={href} legacyBehavior passHref>
      <NavigationMenu.Link
        className={cn(
          'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors',
          'hover:bg-notion-gray-light hover:text-notion-text',
          'focus:bg-notion-gray-light focus:text-notion-text',
          'text-notion-text-secondary text-sm font-medium',
        )}
      >
        {children}
      </NavigationMenu.Link>
    </Link>
  </NavigationMenu.Item>
);

export default function Navbar() {
  return (
    <div className='border-b border-notion-border px-6 py-4 bg-notion-bg'>
      <NavigationMenu.Root className='flex flex-col md:flex-row justify-between items-center'>
        <NavigationMenu.List className='flex flex-col md:flex-row items-center gap-1'>
          <NavigationMenuItem href='/'>
            About
          </NavigationMenuItem>
        </NavigationMenu.List>
        
        <NavigationMenu.List className='flex flex-col md:flex-row items-center gap-1'>
          <NavigationMenuItem href='/projects'>
            Projects
          </NavigationMenuItem>
          <NavigationMenuItem href='/likes'>
            Likes
          </NavigationMenuItem>
          <NavigationMenuItem href={LINK.WIKI}>
            Wiki
          </NavigationMenuItem>
          <NavigationMenuItem href='/now'>
            Now
          </NavigationMenuItem>
          <NavigationMenuItem href='/contact'>
            Contact
          </NavigationMenuItem>
        </NavigationMenu.List>
        
        <NavigationMenu.Indicator className='top-full z-[1] flex h-[10px] items-end justify-center overflow-hidden transition-[width,transform_250ms_ease] data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in data-[motion=from-start]:slide-in-from-top-1 data-[motion=from-end]:slide-in-from-bottom-1 data-[motion=to-start]:slide-out-to-top-1 data-[motion=to-end]:slide-out-to-bottom-1'>
          <div className='relative top-[70%] h-[10px] w-[10px] rotate-[45deg] rounded-tl-[2px] bg-notion-border' />
        </NavigationMenu.Indicator>
      </NavigationMenu.Root>
    </div>
  );
}



import { Github, Instagram, Linkedin, Youtube } from 'lucide-react';
import Link from 'next/link';
import { LINK } from '@/const'; // Import the LINK object

export function SocialLinks() {
  return (
    <div className='flex justify-center gap-6 py-8'>
      <Link
        href={LINK.GITHUB} // Use the constant
        className='text-muted-foreground hover:text-foreground transition-colors'
        aria-label='GitHub'
      >
        <Github className='h-6 w-6' />
      </Link>
      <Link
        href={LINK.YOUTUBE} // Use the constant
        className='text-muted-foreground hover:text-foreground transition-colors'
        aria-label='YouTube'
      >
        <Youtube className='h-6 w-6' />
      </Link>
      <Link
        href={LINK.LINKEDIN} // Use the constant
        className='text-muted-foreground hover:text-foreground transition-colors'
        aria-label='LinkedIn'
      >
        <Linkedin className='h-6 w-6' />
      </Link>
      <Link
        href={LINK.INSTAGRAM} // Use the constant
        className='text-muted-foreground hover:text-foreground transition-colors'
        aria-label='Instagram'
      >
        <Instagram className='h-6 w-6' />
      </Link>
    </div>
  );
}
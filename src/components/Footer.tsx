/* eslint-disable import/no-extraneous-dependencies */
import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import { FaYoutube, FaInstagram } from 'react-icons/fa';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { LINK } from '@/const';
import { IconType } from 'react-icons';

const SocialLink = ({ href, icon: Icon, label }: { href: string; icon: IconType; label: string }) => (
  <Tooltip>
    <TooltipTrigger asChild>
      <Link 
        href={href} 
        className='hover:text-notion-accent transition-colors duration-200 p-2 rounded-md hover:bg-notion-gray-light'
        target='_blank'
        rel='noopener noreferrer'
      >
        <Icon />
      </Link>
    </TooltipTrigger>
    <TooltipContent>
      <p>{label}</p>
    </TooltipContent>
  </Tooltip>
);

export default function Footer() {
  return (
    <TooltipProvider>
      <div className='px-2 py-2'>
        <div className='flex flex-row justify-center gap-6 text-xl text-notion-text-secondary'>
          <SocialLink href={LINK.GITHUB} icon={FaGithub} label='GitHub' />
          <SocialLink href={LINK.YOUTUBE} icon={FaYoutube} label='YouTube' />
          <SocialLink href={LINK.LINKEDIN} icon={FaLinkedin} label='LinkedIn' />
          <SocialLink href={LINK.INSTAGRAM} icon={FaInstagram} label='Instagram' />
        </div>
      </div>
    </TooltipProvider>
  );
}
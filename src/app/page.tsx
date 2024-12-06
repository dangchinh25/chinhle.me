import { Nav } from '@/components/nav';
import { SocialLinks } from '@/components/social-links';
import Link from 'next/link';
import { LINK } from '@/const'; // Import the LINK object

export default function Home() {
  return (
    <div className='min-h-screen bg-background text-foreground'>
      <Nav />
      <main className='container max-w-2xl py-12'>
        <div className='prose prose-neutral dark:prose-invert'>
          <ul className='space-y-4'>
            <li>I love making and sharing things.</li>
            <li>I mostly speak English and Vietnamese, sometimes Typescript.</li>
            <li>
              My main focus is making cool software tools that help making my day to day life easier, thus enables me to build
              even more cool stuff or just to have fun with technology. You can see my existing projects{' '}
              <Link href='/projects' className='underline decoration-primary decoration-dotted'>
                here
              </Link>
              .
            </li>
            <li>
              Currently exploring the idea of{' '}
              <span className='font-medium'>Second Brain</span> and{' '}
              <span className='font-medium'>Digital Garden</span>. I share everything I know{' '}
              <Link href={LINK.WIKI} className='underline decoration-primary decoration-dotted'>
                here
              </Link>
              .
            </li>
            <li>
              I&apos;m also into photography and videography, you can checkout my photos on{' '}
              <Link href={LINK.INSTAGRAM} className='underline decoration-primary decoration-dotted'>
                Instagram
              </Link>{' '}
              or watch my videos on{' '}
              <Link href={LINK.YOUTUBE} className='underline decoration-primary decoration-dotted'>
                Youtube
              </Link>
              .
            </li>
            <li>
              If you want to know more about me, you can see{' '}
              <Link href='/likes' className='underline decoration-primary decoration-dotted'>
                what I like
              </Link>
              , or{' '}
              <Link href={LINK.WIKI} className='underline decoration-primary decoration-dotted'>
                explore the wiki
              </Link>
              .
            </li>
            <li>
              I love meeting new people to discuss various topics. Check out my{' '}
              <Link href='/now' className='underline decoration-primary decoration-dotted'>
                Now page
              </Link>{' '}
              to see where I am right now.
            </li>
            <li>
              Feel free to shoot me anything{' '}
              <Link href='/contact' className='underline decoration-primary decoration-dotted'>
                here
              </Link>
              , follow me on{' '}
              <Link href={LINK.GITHUB} className='underline decoration-primary decoration-dotted'>
                Github
              </Link>{' '}
              to see me building more stuff, or connect me on{' '}
              <Link href={LINK.LINKEDIN} className='underline decoration-primary decoration-dotted'>
                Linkedin
              </Link>
              .
            </li>
          </ul>
        </div>
        <SocialLinks />
      </main>
    </div>
  );
}
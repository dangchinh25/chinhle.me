/* eslint-disable import/no-extraneous-dependencies */
import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import { FaYoutube, FaInstagram } from 'react-icons/fa';
import { LINK } from '@/const';

function SlimSolidLine() {
  return (
    <div
        style={{
          display: 'block',
          height: '1px',
          border: 0,
          borderTop: '1px solid #ccc',
          margin: '1em 0',
          padding: 0,
        }}
    >
    </div>
  );
}

export default function Footer() {
  return (
    <div>
      <SlimSolidLine />

      <div className='flex flex-row justify-evenly text-2xl text-richBlack' >
        <Link href={LINK.GITHUB}>
          <FaGithub />
        </Link>
        <Link href={LINK.YOUTUBE}>
          <FaYoutube />
        </Link>
        <Link href={LINK.LINKEDIN}>
          <FaLinkedin />
        </Link>
        <Link href={LINK.INSTAGRAM}>
          <FaInstagram />
        </Link>
      </div>
    </div>
  );
}
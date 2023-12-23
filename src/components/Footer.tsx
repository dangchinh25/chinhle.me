/* eslint-disable import/no-extraneous-dependencies */
import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import { FaYoutube, FaInstagram } from 'react-icons/fa';

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
        <Link href='https://github.com/dangchinh25'>
          <FaGithub />
        </Link>
        <Link href='https://www.youtube.com/channel/UCu5VfUF_Tdv9EJP5YORfMzg'>
          <FaYoutube />
        </Link>
        <Link href='https://www.linkedin.com/in/chinh-d-le/'>
          <FaLinkedin />
        </Link>
        <Link href='https://www.instagram.com/dangg_chinh/'>
          <FaInstagram />
        </Link>
      </div>
    </div>
  );
}
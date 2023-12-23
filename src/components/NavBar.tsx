import Link from 'next/link';

export default function Navbar() {
  return (
    <div className='shadow-md w-full h-10 rounded mb-5'>
      <button>
        <Link href='/'>
          About
        </Link>
      </button>
      <button>
        <Link href='https://wiki.chinhle.me'>
          Wiki
        </Link>
      </button>
      <button>
        <Link href='/projects'>
          Projects
        </Link>
      </button>
      <button>
        <Link href='likes'>
          Likes
        </Link>
      </button>
    </div>
  );
}

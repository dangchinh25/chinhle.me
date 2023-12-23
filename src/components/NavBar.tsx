import Link from 'next/link';

export default function Navbar() {
  return (
    <div>
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
    </div>
  );
}

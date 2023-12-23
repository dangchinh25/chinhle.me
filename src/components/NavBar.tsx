import Link from './Link';

export default function Navbar() {
  return (
    <div>
      <button>
        <Link href='/' underline='none'>
          <a>About</a>
        </Link>
      </button>
      <button>
        <Link href='https://wiki.chinhle.me' underline='none'>
          <a>Wiki</a>
        </Link>
      </button>
    </div>
  );
}

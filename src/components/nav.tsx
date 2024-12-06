import Link from 'next/link';
import { cn } from '@/lib/utils';
import { ThemeToggle } from '@/components/theme-toggle';

interface NavLinkProps {
  href: string
  children: React.ReactNode
  isActive?: boolean
}

function NavLink({ href, children, isActive }: NavLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        'px-3 py-1.5 text-sm font-medium transition-colors hover:text-primary',
        isActive ? 'text-foreground' : 'text-muted-foreground',
      )}
    >
      {children}
    </Link>
  );
}

export function Nav() {
  return (
    <nav className='border-b border-border'>
      <div className='container flex items-center justify-between py-3'>
        <div className='flex items-center'>
          <NavLink href='/about' isActive>
            About
          </NavLink>
          <NavLink href='/projects'>Projects</NavLink>
          <NavLink href='/likes'>Likes</NavLink>
          <NavLink href='/wiki'>Wiki</NavLink>
          <NavLink href='/now'>Now</NavLink>
          <NavLink href='/contact'>Contact</NavLink>
        </div>
        <ThemeToggle />
      </div>
    </nav>
  );
}


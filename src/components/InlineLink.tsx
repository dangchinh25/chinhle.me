import Link from 'next/link';
import { cn } from '@/lib/utils';

export type Props = {
  to: string;
  displayText: string;
  className?: string;
};

export default function InlineLink({ to, displayText, className }: Props) {
  return (
    <Link 
      href={to} 
      className={cn(
        'text-notion-accent hover:text-notion-accent-hover',
        'underline decoration-notion-accent/30 hover:decoration-notion-accent',
        'transition-all duration-200 ease-in-out',
        'focus:outline-none focus:ring-2 focus:ring-notion-accent/20 focus:ring-offset-1 rounded',
        className,
      )}
    >
      {displayText}
    </Link>
  );
}
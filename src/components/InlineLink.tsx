import Link from 'next/link';

export type Props = {
  to: string
  displayText: string
};

export default function InlineLink({ to, displayText }: Props) {
  return (
    <Link href={to} className='underline'>
      <b>{displayText}</b>
    </Link>
  );
}